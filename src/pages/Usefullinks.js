import React from "react";
import "../App.css";


export const UsefullinksOne = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="usefullinks">
			<h3 style={setColor}>Blog</h3>
			<br /><br /><br /><br />Behind the scenes with the design and engineering teams.

		</div>
	);
};

export const UsefullinksTwo = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="usefullinks">
			<h3 style={setColor}>Products</h3>
			<br /><br />*Flowers
		    <br /><br />*Plants
			<br /><br />*Bouquets
			<br /><br />*Floral Decors

		</div>
	);
};

export const UsefullinksThree = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="usefullinks">
			<h3 style={setColor}>Announcements</h3>
			<br /><br /><br /><br />Here we inform the date about exhibitions, discount sale etc.
			
		</div>
	);
};
