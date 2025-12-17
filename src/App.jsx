

import styles from "./App.module.css";
import NavBar from "./navbar.jsx";
import Spacecraft from "./Spacecraft.jsx";
import Planets from "./Planets.jsx";
import React, { useState } from "react";
import "./navbar.css";

function App () {
  const [page, setPage] = useState("Home");

  let content;
  if (page === "Spacecrafts") {
    content = <Spacecraft />;
  } else if (page === "Home") {
    content = (
      <div style={{ textAlign: 'center', marginTop: '4em', color: '#fff' }}>
        <h1>Space Travel</h1>
        <p style={{ fontSize: '1.2em', marginTop: '1.5em', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', background: '#181828', borderRadius: 12, padding: '1.5em', boxShadow: '0 2px 8px rgba(0,0,0,0.18)', color: '#6cf' }}>
          Welcome fellow astronauts to an engaging page that creates spaceship and launches them to space!<br />
          Travel to the planet you desire!
        </p>
        <div style={{ fontSize: '1.1em', marginTop: '2em', maxWidth: 650, marginLeft: 'auto', marginRight: 'auto', background: '#232b3a', borderRadius: 12, padding: '1.5em', boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
          In the not-so-distant future, where technology has evolved by leaps and bounds, humanity has achieved the unimaginable: they have successfully transformed other planets in the solar system into habitable environments. Once the cradle of humanity, Earth had become a shadow of its former self due to centuries of neglect and environmental degradation. As a result, the focus of humankind had shifted beyond Earth's boundaries, and the key to their interplanetary exploration lay in a cutting-edge web application called "Space Travel."
        </div>
        <div style={{ fontSize: '1.1em', marginTop: '1.5em', maxWidth: 650, marginLeft: 'auto', marginRight: 'auto', background: '#232b3a', borderRadius: 12, padding: '1.5em', boxShadow: '0 2px 8px rgba(0,0,0,0.18)' }}>
          The web application's users are commanders who will use it to evacuate humankind from the Earth. The web application is planned to empower users to list all spacecraft, view the details of a spacecraft, build a new one, and destroy the old one. But the capabilities of it continue beyond there. It is planned to enable users to view planets with the spacecraft on it and send spacecraft from one planet to another to transfer people.
        </div>
      </div>
    );
  } else if (page === "Planets") {
    content = <Planets />;
  }

  // Show back button for all except Home
  const showBack = page !== "Home";

  return (
    <>
      <NavBar onNavigate={setPage} />
      {showBack && (
        <div className="navbar-back-button-container">
          <button
            className="back-button navbar-back-button"
            onClick={() => setPage("Home")}
            aria-label="Back"
          >
            &#8592; Back
          </button>
        </div>
      )}
      {content}
    </>
  );
}

export default App;
