import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavItem label="Home" />
      <NavItem label="Spacecrafts" />
      <NavItem label="Planets" />
    </nav>
  );
}

function NavItem({ label }) {
  return (
    <div className="nav-item">
      {label}
    </div>
  );
}

export default NavBar;
