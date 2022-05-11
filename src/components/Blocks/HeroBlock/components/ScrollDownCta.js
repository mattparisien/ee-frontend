import React from "react";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./ScrollDownCta.css";

function ScrollDownCta({ isMobile }) {
	const cta = theme => ({
		position: "absolute",
		transform: "translateX(-50%)",
		bottom: '-4vw',
		display: !isMobile ? "none" : "block",

		[theme.breakpoints.up("md")]: {
			display: isMobile ? "none" : "block",
			bottom: "-8vw",
			left: "50%",
		},
	});

	return (
		<Box className='ScrollDownCta' sx={cta}>
			<ArrowBackIosIcon sx={{ transform: "rotate(-90deg)" }} />
		</Box>
	);
}

export default ScrollDownCta;
