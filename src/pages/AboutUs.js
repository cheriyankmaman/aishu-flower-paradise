import React from "react";
import "../App.css";
function AboutUs() {
	let setColor = { fontsize: "50px", color: "black" }
	return (
		<div className="about-us">
			<br />
			<h3 style={setColor}>AboutUs</h3> <br /> <br />
			<>
			An Online Florist<br/>
			Flowers Paradise is an online flower store that delivers flowers all over India.<br/>
			We at Flowers Paradise deliver the best quality - fresh cut flowers, with the help of our strong affiliate network and channel stores. <br /> 
			Each and every one of our flowers is handpicked at the right stage of bloom by our expert florists in your cities.<br /> <br />
			</>
		</div>
	);
};
export default AboutUs;
