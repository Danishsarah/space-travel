// This file was renamed from SpaceCrafts.jsx to Spacecraft.jsx
import React, { useEffect, useState } from "react";
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
		}
	]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedId, setSelectedId] = useState(null);
	const [showConstruction, setShowConstruction] = useState(false);
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
	return (
		<div className="spacecrafts-container">
			<h2 className="spacecrafts-title">Spacecrafts</h2>
			<button onClick={() => setShowConstruction(true)} className="spacecraft-btn">Construct New Spacecraft</button>
			<ul className="spacecrafts-list">
				{spacecrafts.map(craft => (
					<li key={craft.id} className="spacecraft-item">
						<div className="spacecraft-card">
							<strong onClick={() => setSelectedId(craft.id)}>{craft.name}</strong> (Capacity: {craft.capacity})<br />
							{craft.description}<br />
							<button className="spacecraft-construction-view-details" onClick={() => setSelectedId(craft.id)}>View Details</button>
							<button onClick={() => handleDecommission(craft.id)}>Decommission</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Spacecraft;
