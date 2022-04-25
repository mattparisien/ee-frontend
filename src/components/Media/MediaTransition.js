import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion/dist/framer-motion";
import { useTheme } from "@mui/material";

function MediaTransition() {
	const theme = useTheme();

	const style = {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		backgroundColor: theme.palette.primary.light,
		transformOrigin: "bottom",
	};

	const swiperVariants = {
		hidden: {
			scaleY: 1,
		},
		visible: {
			scaleY: 0,
			transition: { duration: 1.3, ease: [0.86, 0, 0.07, 0.995], delay: 0.3 },
		},
		exit: {
			scaleY: 1,
			transition: { duration: 1.3, ease: [0.86, 0, 0.07, 0.995] },
		}
	};

	return (
		<motion.div
			className='MediaTransition'
			style={style}
			variants={swiperVariants}
			animate='visible'
			initial='hidden'
			exit="exit"
		></motion.div>
	);
}

export default MediaTransition;
