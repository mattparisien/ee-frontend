import React from "react";
import { DrawnLogo } from "../../../Vector/Svg";
import Scale from "../../../HOC/Scale";

// const logo = theme => ({
//   width: "20vw",
//   height: "20vw",
//   maxHeight: "300px",
//   overflow: "visible",
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   [theme.breakpoints.up("lg")]: {
//     transform: "translate(-60%, -50%) !important",
//   },
//   [theme.breakpoints.up("md")]: {
//     height: "20vw",
//     width: "20vw",
//     transform: "translate(-70%, -50%) !important",
//   },
//   [theme.breakpoints.down("md")]: {
//     height: "40vw",
//     width: "40vw",
//     position: "static",
//     transform: "translateX(-5%) translateY(0)",
//   },
//   ".c-drawnLogo": {
//     height: "100%",
//     width: "100%",
//     overflow: "visible",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",

//     svg: {
//       height: "100%",
//       overflow: "visible",
//       ".nose, .ear ": {
//         display: "none",
//       },
//     },
//   },
// });

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
