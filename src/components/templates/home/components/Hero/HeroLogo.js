import React from "react";
import { DrawnLogo } from "../../../../Vector/Svg";
import Scale from "../../../../HOC/Scale";
import styles from "./Hero.module.css";

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
			className={`${styles.HeroLogo} mb-10 md:mb-0 md:absolute top-1/2 left-1/2 overflow-visible`}
			style={logo}
		>
			<Scale>
				<DrawnLogo />
			</Scale>
		</div>
	);
}

export default HeroLogo;
