import React, { useEffect, useState } from "react";
import SpaceTravelApi from "./services/SpaceTravelApi";

function SpacecraftDetail({ id, onBack }) {
  const [craft, setCraft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div
      className="spacecrafts-container"
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <button
        onClick={onBack}
        className="back-button"
        style={{ marginBottom: "1.5rem" }}
      >
        Back
      </button>
      <h2 style={{ color: "#6cf", marginBottom: "1.5rem" }}>
        {craft.name}
      </h2>
      <div
        style={{
          background: "#181828",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          padding: "2em 2.5em",
          color: "#fff",
          minWidth: 320,
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
          marginBottom: "1.5em"
        }}
      >
        <div style={{ fontSize: "1.2em", marginBottom: "1em" }}>
          <strong style={{ color: "#6cf" }}>Capacity:</strong> {craft.capacity}
        </div>
        <div style={{ fontSize: "1.1em", marginBottom: "1em" }}>
          <strong style={{ color: "#6cf" }}>Description:</strong>
          <div style={{ marginTop: "0.5em", color: "#fff" }}>
            {craft.description}
          </div>
        </div>
        {craft.pictureUrl &&
          <img
            src={craft.pictureUrl}
            alt={craft.name}
            style={{
              maxWidth: 300,
              borderRadius: 8,
              border: "2px solid #6cf",
              marginTop: "1em"
            }}
          />}
      </div>
    </div>
  );
}

export default SpacecraftDetail;
