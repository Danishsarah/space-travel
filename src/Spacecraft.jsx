// This file was renamed from SpaceCrafts.jsx to Spacecraft.jsx
import React, { useEffect, useState } from "react";
import { FaSearch, FaRocket, FaTrash, FaPlus, FaTimes } from "react-icons/fa";
import SpaceTravelApi from "./services/SpaceTravelApi";
import SpacecraftDetail from "./SpacecraftDetail.jsx";
import SpacecraftConstruction from "./SpacecraftConstruction.jsx";
import "./spacecraft.css";

function Spacecraft() {
	const [spacecrafts, setSpacecrafts] = useState([
		{
			id: "prispax",
			name: "Prispax",
			capacity: 10000,
			description:
				"Presenting the Astrolux Odyssey: a revolutionary spacecraft merging cutting-edge technology with lavish luxury, designed to usher 10,000 passengers into the solar system's embrace. A marvel of engineering, its sleek exterior is adorned with solar panels, fueling advanced propulsion while minimizing environmental impact." +
				"Within, the vessel transforms into a haven of opulence. Lavish suites offer cosmic panoramas, celestial artwork bedecks lounges, and sprawling gardens thrive in zero-gravity. Culinary excellence reigns in gourmet restaurants, while immersive theaters and VR chambers offer stellar entertainment." +
				"Safety remains paramount with cosmic radiation shielding and top-tier medical facilities. The Astrolux Odyssey not only advances space exploration but redefines elegance, uniting humanity's thirst for knowledge with a taste of the sublime.",
			pictureUrl: null,
			currentLocation: 2
		},
		{
			id: "falcon-mk1",
			name: "Millennium Falcon",
			capacity: 6,
			description:
				"The legendary Millennium Falcon is a modified Corellian freighter that has made a name for itself across the galaxy. Don't judge her by her appearance—this ship has the heart of a champion. Capable of hyperdrive speeds that rival military cruisers, the Falcon is equipped with quad laser cannons, a deflector shield generator, and an advanced AI-assisted navigation system. Her quick reflexes and incredible maneuverability make her the perfect escape vessel, and she's proven her worth in countless dangerous missions. The captain's seat has seen pilots of legendary skill, and she remains one of the most iconic ships ever built.",
			pictureUrl: null,
			currentLocation: 1
		},
		{
			id: "enterprise-d",
			name: "USS Enterprise-D",
			capacity: 1014,
			description:
				"The USS Enterprise-D is the flagship of the United Federation of Planets. This Galaxy-class starship represents the pinnacle of Starfleet engineering and diplomatic innovation. Equipped with state-of-the-art warp drives capable of Warp 9.6, advanced sensor arrays, and a comprehensive arsenal of photon torpedoes and phaser banks, the Enterprise-D is built for both exploration and defense. The ship features sophisticated computer systems, holodeck technology for recreation and training, and luxurious facilities that make deep space exploration comfortable for its diverse crew of over 1,000. The Enterprise-D has participated in countless historic first contacts and diplomatic missions, serving as a beacon of hope and unity across the galaxy.",
			pictureUrl: null,
			currentLocation: 3
		}
	]);
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
	async function handleDecommission(id) {
		if (!window.confirm("Are you sure you want to decommission this spacecraft?")) return;
		try {
			await SpaceTravelApi.destroySpacecraftById({ id });
			fetchSpacecrafts();
		} catch {
			alert("Failed to decommission spacecraft.");
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
									className="spacecraft-decommission-btn"
									onClick={() => handleDecommission(craft.id)}
									aria-label="Decommission spacecraft"
								>
									<FaTrash className="btn-icon" /> Decommission
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
