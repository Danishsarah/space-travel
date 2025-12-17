function RocketLoader() {
  return (
    <div className="rocket-loader-container">
      <div className="rocket-loader">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect x="27" y="40" width="6" height="15" rx="3" fill="#ff9800">
              <animate
                attributeName="y"
                values="40;50;40"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </rect>
            <path
              d="M30 5 L38 30 L30 25 L22 30 Z"
              fill="#6cf"
              stroke="#fff"
              strokeWidth="1"
            />
            <ellipse
              cx="30"
              cy="35"
              rx="6"
              ry="10"
              fill="#222"
              stroke="#6cf"
              strokeWidth="2"
            />
            <circle cx="30" cy="20" r="4" fill="#fff" />
          </g>
        </svg>
        <div className="rocket-loader-text">Scanning Planets...</div>
      </div>
    </div>
  );
}
// ...existing code...
import React, { useEffect, useState } from "react";
import { FaSearch, FaSatellite, FaRocket, FaTimes } from "react-icons/fa";
import SpaceTravelApi from "./services/SpaceTravelApi";
import SpacecraftConstruction from "./SpacecraftConstruction.jsx";
import "./planets.css";

function Planets() {
  const [planets, setPlanets] = useState([]);
  const [spacecrafts, setSpacecrafts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dispatching, setDispatching] = useState(false);
  const [selectedCraft, setSelectedCraft] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [dispatchError, setDispatchError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Handle dispatching a spacecraft to a different planet
  async function handleDispatch() {
    setDispatchError("");
    if (!selectedCraft || !selectedPlanet) {
      setDispatchError("Please select a spacecraft and a destination planet.");
      return;
    }
    if (selectedPlanet.id === selectedCraft.currentLocation) {
      setDispatchError("Destination must be different from current location.");
      return;
    }
    setDispatching(true);
    try {
      // Use mock API if available, otherwise fallback to SpaceTravelApi
      if (typeof SpacecraftConstruction.sendSpacecraftToPlanet === "function") {
        await SpacecraftConstruction.sendSpacecraftToPlanet({
          spacecraftId: selectedCraft.id,
          targetPlanetId: selectedPlanet.id
        });
      } else {
        await SpaceTravelApi.updateSpacecraftLocation(
          selectedCraft.id,
          selectedPlanet.id
        );
      }
      // Update local state
      setSpacecrafts(prev =>
        prev.map(
          craft =>
            craft.id === selectedCraft.id
              ? { ...craft, currentLocation: selectedPlanet.id }
              : craft
        )
      );
      setSelectedCraft(null);
      setSelectedPlanet(null);
    } catch (err) {
      setDispatchError(
        err.message || "Failed to dispatch spacecraft. Please try again."
      );
    } finally {
      setDispatching(false);
    }
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const planetRes = await SpaceTravelApi.getPlanets();
        const craftRes = await SpaceTravelApi.getSpacecrafts();
        setPlanets(planetRes.data || []);
        setSpacecrafts(craftRes.data || []);
      } catch (err) {
        setError("Failed to load planets or spacecrafts.");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <RocketLoader />;
  if (error)
    return (
      <div>
        {error}
      </div>
    );

  return (
    <div className="planets-container">
      <h2 className="planets-title">
        <FaSatellite className="icon" /> Planets
      </h2>

      {/* Search Bar */}
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search planets by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm &&
          <button
            className="search-clear-btn"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            <FaTimes />
          </button>}
      </div>

      {/* Filtered Planets List */}
      <ul className="planet-list">
        {planets
          .filter(planet =>
            planet.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map(planet =>
            <li key={planet.id} className="planet-item">
              <strong>{planet.name}</strong> (Population:{" "}
              {planet.currentPopulation})<br />
              {planet.pictureUrl &&
                <img
                  className="planet-img"
                  src={planet.pictureUrl}
                  alt={planet.name}
                />}
              <div>
                <em>Stationed Spacecraft:</em>
                <ul className="stationed-list">
                  {spacecrafts.filter(
                    craft => craft.currentLocation === planet.id
                  ).length === 0 && <li>None</li>}
                  {spacecrafts
                    .filter(craft => craft.currentLocation === planet.id)
                    .map(craft =>
                      <li key={craft.id}>
                        <FaRocket className="icon-small" /> {craft.name}{" "}
                        (Capacity: {craft.capacity})
                        <button
                          onClick={() => {
                            setSelectedCraft(craft);
                            setSelectedPlanet(null);
                          }}
                          className="dispatch-btn"
                        >
                          Dispatch
                        </button>
                      </li>
                    )}
                </ul>
              </div>
            </li>
          )}
      </ul>
      {selectedCraft &&
        <div className="dispatch-panel">
          <h3>
            Dispatch {selectedCraft.name}
          </h3>
          <div>
            <label>Select destination planet: </label>
            <select
              value={selectedPlanet ? selectedPlanet.id : ""}
              onChange={e => {
                const pid = Number(e.target.value);
                setSelectedPlanet(planets.find(p => p.id === pid));
              }}
            >
              <option value="">-- Select --</option>
              {planets
                .filter(p => p.id !== selectedCraft.currentLocation)
                .map(planet =>
                  <option key={planet.id} value={planet.id}>
                    {planet.name}
                  </option>
                )}
            </select>
            <button
              onClick={handleDispatch}
              disabled={!selectedPlanet || dispatching}
            >
              {dispatching ? "Dispatching..." : "Dispatch"}
            </button>
            <button
              onClick={() => {
                setSelectedCraft(null);
                setSelectedPlanet(null);
              }}
            >
              Cancel
            </button>
            {dispatchError &&
              <div className="dispatch-error">
                {dispatchError}
              </div>}
          </div>
        </div>}
    </div>
  );
}

export default Planets;
