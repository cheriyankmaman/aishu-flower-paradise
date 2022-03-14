import React from "react";

export const Events = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="events">
			<h3 style={setColor}>Events</h3>
			<br /><br /><br /><br />We conduct events like exhibitions and discount sale twice in every month.

		</div>
	);
};

export const EventsOne = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="events">
			<h3 style={setColor}>Exhibition</h3>
			<br /><br /><br /><br />We provide a platform to conduct exhibitions to introduce new variety of flowers to the world.

		</div>
	);
};

export const EventsTwo = () => {
	let setColor = { fontsize: "50px", color: "palevioletred" }
	return (
		<div className="events">
			<h3 style={setColor}>Discount Sales</h3>
			<br /><br /><br /><br />We make sure to satisfy each our precious customers with our products.

		</div>
	);
};
