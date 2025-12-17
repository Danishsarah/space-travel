// Mock API function to send a spacecraft to a planet
// Usage: await SpacecraftConstruction.sendSpacecraftToPlanet({ spacecraftId, targetPlanetId })
import SpaceTravelMockApi from "./services/SpaceTravelMockApi";

SpacecraftConstruction.sendSpacecraftToPlanet = async function({
  spacecraftId,
  targetPlanetId
}) {
  await SpaceTravelMockApi.wait();
  const response = SpaceTravelMockApi.prepareResponse();
  try {
    const mockDb = SpaceTravelMockApi.getMockDb();
    for (let i = 0; i < mockDb.spacecrafts.length; i++) {
      const spacecraft = mockDb.spacecrafts[i];
      if (spacecraft.id === spacecraftId) {
        if (spacecraft.currentLocation === targetPlanetId) {
          throw new Error("The spacecraft is already on this planet!");
        }
        // Update location
        spacecraft.currentLocation = targetPlanetId;
        response.data = { ...spacecraft };
        return response;
      }
    }
    throw new Error("Spacecraft not found!");
  } catch (err) {
    response.error = err.message;
    throw err;
  }
};
import React, { useState } from "react";
import SpaceTravelApi from "./services/SpaceTravelApi";

import "./SpacecraftConstruction.css";

function SpacecraftConstruction({ onBack, onCreated }) {
  // State for dispatch to planet UI
  const [dispatchId, setDispatchId] = useState("");
  const [dispatchResult, setDispatchResult] = useState("");
  const [dispatchLoading, setDispatchLoading] = useState(false);

  // UI function to dispatch to planet
  async function handleDispatchToPlanet() {
    setDispatchResult("");
    if (!dispatchId) {
      setDispatchResult("Please enter a planet ID.");
      return;
    }
    setDispatchLoading(true);
    try {
      // For demo, use the name as the spacecraftId (after creation)
      // In a real app, you would select an existing spacecraft
      await SpacecraftConstruction.sendSpacecraftToPlanet({
        spacecraftId: name,
        targetPlanetId: dispatchId
      });
      setDispatchResult("Spacecraft dispatched to planet " + dispatchId + "!");
    } catch (err) {
      setDispatchResult(err.message || "Failed to dispatch.");
    } finally {
      setDispatchLoading(false);
    }
  }
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !capacity || !description) {
      setError("Name, capacity, and description are required.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await SpaceTravelApi.buildSpacecraft({
        name,
        capacity,
        description,
        pictureUrl
      });
      onCreated && onCreated();
    } catch (err) {
      setError("Failed to create spacecraft.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="spacecraft-construction-outer">
      <div className="spacecraft-construction-inner">
        <h2 className="spacecraft-construction-title">
          Construct New Spacecraft
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ margin: "1em 0" }}>
            <label className="spacecraft-construction-label">
              Name:
              <input
                className="spacecraft-construction-input"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
          </div>
          <div style={{ margin: "1em 0" }}>
            <label className="spacecraft-construction-label">
              Capacity:
              <input
                className="spacecraft-construction-input"
                type="number"
                value={capacity}
                onChange={e => setCapacity(e.target.value)}
              />
            </label>
          </div>
          <div style={{ margin: "1em 0" }}>
            <label className="spacecraft-construction-label">
              Description:
              <textarea
                className="spacecraft-construction-input"
                value={description}
                onChange={e => setDescription(e.target.value)}
                style={{ minHeight: "60px" }}
              />
            </label>
          </div>
          <div style={{ margin: "1em 0" }}>
            <label className="spacecraft-construction-label">
              Picture URL:
              <input
                className="spacecraft-construction-input"
                value={pictureUrl}
                onChange={e => setPictureUrl(e.target.value)}
              />
            </label>
          </div>
          {error &&
            <div className="spacecraft-construction-error">
              {error}
            </div>}
          <button
            type="submit"
            disabled={loading}
            className="spacecraft-construction-submit"
          >
            {loading ? "Constructing..." : "Construct"}
          </button>
        </form>

        {/* Dispatch to planet UI */}
        <div
          style={{
            marginTop: "2em",
            borderTop: "1px solid #444",
            paddingTop: "1.5em"
          }}
        >
          <label className="spacecraft-construction-label">
            Dispatch to planet:
            <input
              className="spacecraft-construction-input"
              type="text"
              placeholder="Enter planet ID"
              value={dispatchId}
              onChange={e => setDispatchId(e.target.value)}
              style={{ width: "50%" }}
            />
          </label>
          <button
            className="spacecraft-construction-submit"
            style={{ marginLeft: "1em", width: "auto" }}
            onClick={handleDispatchToPlanet}
            disabled={dispatchLoading}
            type="button"
          >
            {dispatchLoading ? "Dispatching..." : "Dispatch"}
          </button>
          {dispatchResult &&
            <div
              className="spacecraft-construction-error"
              style={{
                color: dispatchResult.includes("dispatched")
                  ? "#6cf"
                  : "#ff5252"
              }}
            >
              {dispatchResult}
            </div>}
        </div>
      </div>
    </div>
  );
}

export default SpacecraftConstruction;
