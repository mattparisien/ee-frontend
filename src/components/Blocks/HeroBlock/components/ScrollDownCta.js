import React from "react";
import { Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./ScrollDownCta.css";

function ScrollDownCta() {
	const cta = theme => ({
		position: "absolute",
		transform: "translateX(-50%)",
		bottom: '-8vw',
		[theme.breakpoints.up("md")]: {
			bottom: "5vw",
			left: "22vw",
		},
	});

	return (
		<Box className='ScrollDownCta' sx={cta}>
			<ArrowBackIosIcon sx={{ transform: "rotate(-90deg)" }} />
		</Box>
	);
}

export default ScrollDownCta;
