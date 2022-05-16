import React from "react";
import { DrawnLogo } from "../../../Vector/Svg";
import Scale from "../../../HOC/Scale";

const logo = {
	width: "20vw",
	height: "20vw",
	maxHeight: "300px",
	".c-drawnLogo": {
		width: "100%",
		height: "100%",
	},
};

function HeroLogo() {
	return (
		<div
			className='HeroLogo absolute top-1/2 left-1/2  overflow-visible'
			style={logo}
		>
			<Scale>
				<DrawnLogo />
			</Scale>
		</div>
	);
}

export default HeroLogo;
