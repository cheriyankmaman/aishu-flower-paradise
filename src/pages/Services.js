import React from "react";
import "../App.css";
export const Services = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="services">
			<h3 style={setColor}>Services</h3>
		
			<br /><br /><br /><br />This is a platform to customers to buy flowers as well as an opportunity to sell their flowers.
		</div>
	);
};

export const ServicesOne = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="services">
			<h3 style={setColor}>Buy Ours</h3>
			<br /><br /><br /><br />Here you can buy flowers from the list.

		</div>
	);
};

export const ServicesTwo = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="services">
			<h3 style={setColor}>Sell Yours</h3>
			<br /><br /><br /><br />Here you can sell your flowers.

		</div>
	);
};

