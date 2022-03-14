import React from "react";
import "../App.css";

function Contact() {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="contact">
			<br />
			<h3 style={setColor}>Contact us</h3>   <br /> <br />
			Customer Care: 10am to 8.30pm<br />
			Email: flowersparadise@gmail.com<br/>
			9257894455
		</div>
	);
};

export default Contact;
