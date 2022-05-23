import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import Scale from "../HOC/Scale";

function Accent({ component, color }) {
	const styles = theme => ({
		position: "absolute",
		top: "-15%",
		left: "-20%",
		mixBlendMode: "multiply",
		width: "40%",

		svg: {
			fill: color || theme.palette.primary.colorSet.yellow,
		},
		[theme.breakpoints.down("sm")]: {
			width: "25%",
			left: "-12%",
			top: "-9.5%",
		},
	});

	const variants = {
		hidden: {
			scale: 0,
		},

		visible: {
			scale: 1,

			transition: {
				ease: [0.86, 0, 0.07, 0.995],
				duration: 1,
			},
		},

		exit: {
			scale: 0,

			transition: {
				ease: [0.86, 0, 0.07, 0.995],
				duration: 1,
			},
		},
	};

	return (
		<div className='Accent w-14 h-14 md:w-20 md:h-20 absolute top-[-10%] left-[-12%] d:top-[-12%] md:left-[-16%] mix-blend-multiply'>
			<Scale>
				<div className='w-full h-full bg-yellow-custom rounded-full'></div>
			</Scale>
		</div>
	);
}

export default Accent;
