import React from "react";
import { Box } from "@mui/material";
import variables from "../../styles/scss/_vars.module.scss";

function IntroCard() {
	const card = {
		position: "fixed",

		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: variables["colors-light"],
		zIndex: 999,
		transition: "visibility 300ms ease",
	};

	return <Box className='intro-card' sx={card}></Box>;
}

export default IntroCard;
