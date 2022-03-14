import React from "react";
import "../App.css";


export const ConnectOne = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="connect">
			<h3 style={setColor}>Youtube</h3>
			<br /><br /><br /><br />Pease like, share, subscribe!

		</div>
	);
};

export const ConnectTwo = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="connect">
			<h3 style={setColor}>Facebook</h3>
			<br /><br /><br /><br />Please login to Facebook!

		</div>
	);
};

export const ConnectThree = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="connect">
			<h3 style={setColor}>Instagram</h3>
			<br /><br /><br /><br />Please login to Instagram!

		</div>
	);
};

