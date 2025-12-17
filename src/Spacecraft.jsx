// This file was renamed from SpaceCrafts.jsx to Spacecraft.jsx
import React, { useEffect, useState } from "react";
import { FaSearch, FaRocket, FaHome, FaPlus, FaTimes } from "react-icons/fa";
import SpaceTravelApi from "./services/SpaceTravelApi";
import SpacecraftDetail from "./SpacecraftDetail.jsx";
import SpacecraftConstruction from "./SpacecraftConstruction.jsx";
import "./spacecraft.css";

function Spacecraft() {
	const [spacecrafts, setSpacecrafts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedId, setSelectedId] = useState(null);
	const [showConstruction, setShowConstruction] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [sortBy, setSortBy] = useState("name");
	function RocketLoader() {
		return (
			<div className="rocket-loader-container">
				<div className="rocket-loader">
					<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g>
							<rect x="27" y="40" width="6" height="15" rx="3" fill="#ff9800">
								<animate attributeName="y" values="40;50;40" dur="0.8s" repeatCount="indefinite" />
							</rect>
							<path d="M30 5 L38 30 L30 25 L22 30 Z" fill="#6cf" stroke="#fff" strokeWidth="1"/>
							<ellipse cx="30" cy="35" rx="6" ry="10" fill="#222" stroke="#6cf" strokeWidth="2"/>
							<circle cx="30" cy="20" r="4" fill="#fff" />
						</g>
					</svg>
					<div className="rocket-loader-text">Launching Spacecrafts...</div>
				</div>
			</div>
		);
	}
	async function fetchSpacecrafts() {
		setLoading(true);
		setError(null);
		try {
			const response = await SpaceTravelApi.getSpacecrafts();
			setSpacecrafts(response.data || []);
		} catch (err) {
			setError("Failed to load spacecrafts.");
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		fetchSpacecrafts();
	}, []);
	async function handleReturnHome(id) {
		const craft = spacecrafts.find(s => s.id === id);
		if (!craft) return;
		
		if (craft.currentLocation === 2) {
			alert("This spacecraft is already at Earth (Home Planet).");
			return;
		}
		
		if (!window.confirm(`Send ${craft.name} back to Earth?`)) return;
		
		try {
			await SpaceTravelApi.sendSpacecraftToPlanet({ spacecraftId: id, targetPlanetId: 2 });
			fetchSpacecrafts();
			alert(`${craft.name} is returning to Earth!`);
		} catch {
			alert("Failed to send spacecraft home.");
		}
	}
	if (loading) return <RocketLoader />;
	if (error) return <div>{error}</div>;
	if (selectedId) {
		return <SpacecraftDetail id={selectedId} onBack={() => setSelectedId(null)} />;
	}
	if (showConstruction) {
		return <SpacecraftConstruction onBack={() => setShowConstruction(false)} onCreated={() => { setShowConstruction(false); fetchSpacecrafts(); }} />;
	}

	// Filter and sort spacecrafts
	const filteredSpacecrafts = spacecrafts.filter(craft =>
		craft.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const sortedSpacecrafts = [...filteredSpacecrafts].sort((a, b) => {
		if (sortBy === "name") {
			return a.name.localeCompare(b.name);
		} else if (sortBy === "capacity") {
			return b.capacity - a.capacity;
		}
		return 0;
	});

	return (
		<div className="spacecrafts-container">
			<div className="spacecrafts-header">
				<h2 className="spacecrafts-title"><FaRocket className="icon" /> Spacecrafts</h2>
				<button onClick={() => setShowConstruction(true)} className="spacecraft-btn construct-btn">
					<FaPlus className="btn-icon" /> Construct New Spacecraft
				</button>
			</div>

			{/* Search and Filter Controls */}
			<div className="search-filter-container">
				<div className="search-container">
					<FaSearch className="search-icon" />
					<input
						type="text"
						placeholder="Search by name..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="search-input"
					/>
					{searchTerm && (
						<button 
							className="search-clear-btn" 
							onClick={() => setSearchTerm("")}
							aria-label="Clear search"
						>
							<FaTimes />
						</button>
					)}
				</div>

				<div className="sort-container">
					<label htmlFor="sort-select">Sort by:</label>
					<select 
						id="sort-select"
						value={sortBy} 
						onChange={(e) => setSortBy(e.target.value)}
						className="sort-select"
					>
						<option value="name">Name</option>
						<option value="capacity">Capacity (Highest First)</option>
					</select>
				</div>
			</div>

			{/* Results Count */}
			<div className="results-count">
				Showing {sortedSpacecrafts.length} of {spacecrafts.length} spacecraft(s)
			</div>

			<ul className="spacecrafts-list">
				{sortedSpacecrafts.map(craft => (
					<li key={craft.id} className="spacecraft-item">
						<div className="spacecraft-card">
							<div className="spacecraft-header-card">
								<strong onClick={() => setSelectedId(craft.id)} className="spacecraft-name">
									<FaRocket className="icon-small" /> {craft.name}
								</strong>
								<span className="capacity-badge">Capacity: {craft.capacity}</span>
							</div>
							<p className="spacecraft-description">{craft.description}</p>
							<div className="spacecraft-actions">
								<button className="spacecraft-construction-view-details" onClick={() => setSelectedId(craft.id)}>
									View Details
								</button>
								<button 
									className="spacecraft-return-home-btn"
									onClick={() => handleReturnHome(craft.id)}
									aria-label="Return spacecraft to Earth"
								>
									<FaHome className="btn-icon" /> Return to Earth
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>

			{sortedSpacecrafts.length === 0 && !loading && (
				<div className="no-results">
					<p>No spacecrafts found. {searchTerm && "Try adjusting your search."}</p>
				</div>
			)}
		</div>
	);
}

export default Spacecraft;
