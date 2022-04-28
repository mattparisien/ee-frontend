import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion/dist/framer-motion";

function Accent({ component, color }) {
	const styles = theme => ({
		position: "absolute",
		top: "-15%",
		left: "-20%",
		mixBlendMode: "multiply",
		width: "40%",

		svg: {
			fill: theme.palette.primary.colorSet.yellow,
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
		<Box className='Accent' sx={styles}>
			<motion.div
				className='motion-wrap'
				variants={variants}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				{component()}
			</motion.div>
		</Box>
	);
}

export default Accent;
