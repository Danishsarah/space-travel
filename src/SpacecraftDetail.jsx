import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaUsers, FaGauge, FaShieldAlt, FaRadiation, FaLightbulb } from "react-icons/fa";
import SpaceTravelApi from "./services/SpaceTravelApi";
import "./spacecraft.css";

function SpacecraftDetail({ id, onBack }) {
  const [craft, setCraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Enhanced spacecraft specifications
  const spacecraftSpecs = {
    "prispax": {
      manufacturer: "Astrolux Industries",
      type: "Luxury Passenger Liner",
      maxSpeed: "Warp 5.2",
      shieldPower: "Quantum Shielding",
      weapons: "None (Civilian)",
      amenities: ["Luxury Suites", "Fine Dining", "Zero-G Gardens", "VR Entertainment", "Spa & Wellness"],
      crew: 500,
      engines: "Advanced Fusion Drives",
      range: "10,000 light-years"
    },
    "falcon-mk1": {
      manufacturer: "Corellian Engineering Corporation",
      type: "Modified Freight Transport",
      maxSpeed: "Hyperdrive (0.5 past light speed)",
      shieldPower: "Deflector Shields",
      weapons: "Quad Laser Cannons",
      amenities: ["Compact Quarters", "Cargo Hold", "Smuggler's Compartments", "Hyperdrive"],
      crew: 2,
      engines: "Corellian Quad Drive",
      range: "Galaxy-wide with hyperdrive"
    },
    "enterprise-d": {
      manufacturer: "Starfleet Engineering",
      type: "Galaxy-Class Starship",
      maxSpeed: "Warp 9.6",
      shieldPower: "Graviton Shielding Array",
      weapons: "Photon Torpedoes, Phaser Banks",
      amenities: ["Holodeck", "Multi-Level Observation Lounge", "Medical Bay", "Science Labs", "Officer's Quarters"],
      crew: 850,
      engines: "Matter-Antimatter Reactors",
      range: "Unlimited (Starfleet Operations)"
    }
  };

  useEffect(
    () => {
      async function fetchCraft() {
        try {
          const data = await SpaceTravelApi.getSpacecraftById({ id });
          setCraft(data);
        } catch (err) {
          setError("Failed to load spacecraft details.");
        } finally {
          setLoading(false);
        }
      }
      fetchCraft();
    },
    [id]
  );

  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div>
        {error}
      </div>
    );
  if (!craft) return <div>Not found.</div>;

  const specs = spacecraftSpecs[craft.id] || {};

  return (
    <div className="spacecraft-detail-container">
      <button
        onClick={onBack}
        className="detail-back-button"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="detail-header">
        <h2 className="detail-title">{craft.name}</h2>
        {specs.type && <p className="detail-type">{specs.type}</p>}
      </div>

      <div className="detail-content">
        {/* Main Description */}
        <div className="detail-section">
          <h3>Overview</h3>
          <p className="detail-description">{craft.description}</p>
        </div>

        {/* Specifications Grid */}
        <div className="detail-specs-grid">
          <div className="detail-spec-card">
            <div className="spec-icon"><FaUsers /></div>
            <div className="spec-content">
              <h4>Passenger Capacity</h4>
              <p className="spec-value">{craft.capacity}</p>
            </div>
          </div>

          {specs.crew && (
            <div className="detail-spec-card">
              <div className="spec-icon"><FaUsers /></div>
              <div className="spec-content">
                <h4>Crew</h4>
                <p className="spec-value">{specs.crew}</p>
              </div>
            </div>
          )}

          {specs.maxSpeed && (
            <div className="detail-spec-card">
              <div className="spec-icon"><FaGauge /></div>
              <div className="spec-content">
                <h4>Max Speed</h4>
                <p className="spec-value">{specs.maxSpeed}</p>
              </div>
            </div>
          )}

          {specs.range && (
            <div className="detail-spec-card">
              <div className="spec-icon"><FaRadiation /></div>
              <div className="spec-content">
                <h4>Operational Range</h4>
                <p className="spec-value">{specs.range}</p>
              </div>
            </div>
          )}

          {specs.manufacturer && (
            <div className="detail-spec-card">
              <div className="spec-icon"><FaLightbulb /></div>
              <div className="spec-content">
                <h4>Manufacturer</h4>
                <p className="spec-value">{specs.manufacturer}</p>
              </div>
            </div>
          )}

          {specs.engines && (
            <div className="detail-spec-card">
              <div className="spec-icon"><FaGauge /></div>
              <div className="spec-content">
                <h4>Propulsion System</h4>
                <p className="spec-value">{specs.engines}</p>
              </div>
            </div>
          )}
        </div>

        {/* Systems Information */}
        <div className="detail-systems">
          {specs.shieldPower && (
            <div className="system-info">
              <h4><FaShieldAlt className="icon-inline" /> Defensive Systems</h4>
              <p>{specs.shieldPower}</p>
            </div>
          )}

          {specs.weapons && (
            <div className="system-info">
              <h4>Weapons</h4>
              <p>{specs.weapons}</p>
            </div>
          )}

          {specs.amenities && specs.amenities.length > 0 && (
            <div className="system-info">
              <h4>Amenities & Features</h4>
              <ul className="amenities-list">
                {specs.amenities.map((amenity, idx) => (
                  <li key={idx}>{amenity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {craft.pictureUrl &&
          <div className="detail-image-section">
            <img
              src={craft.pictureUrl}
              alt={craft.name}
              className="detail-image"
            />
          </div>
        }
      </div>
    </div>
  );
}

export default SpacecraftDetail;
