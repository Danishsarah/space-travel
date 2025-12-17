import React from "react";
import "./navbar.css";

function NavBar({ onNavigate }) {
  return (
    <nav className="navbar">
      <NavItem label="Home" onClick={() => onNavigate && onNavigate("Home")} />
      <NavItem
        label="Spacecrafts"
        onClick={() => onNavigate && onNavigate("Spacecrafts")}
      />
      <NavItem
        label="Planets"
        onClick={() => onNavigate && onNavigate("Planets")}
      />
    </nav>
  );
}

function NavItem({ label, onClick }) {
  return (
    <div className="nav-item" onClick={onClick}>
      {label}
    </div>
  );
}

export default NavBar;
