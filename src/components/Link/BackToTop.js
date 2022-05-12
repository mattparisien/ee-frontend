import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { motion } from "framer-motion/dist/framer-motion";
import { FALSE } from "sass";
import { ConstructionOutlined } from "@mui/icons-material";

function BackToTop() {
	const scroll = useLocomotiveScroll();
	const [active, setActive] = useState(false);

	const button = theme => ({
		height: "5rem",
		width: "5rem",
		borderRadius: "50%",
		position: "fixed",
		backgroundColor: theme.palette.primary.dark,
		bottom: 0,
		right: 0,
		zIndex: 9999,
		margin: theme.spacing(5),
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		svg: {
			fill: "white",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			margin: 0,
			width: "40%",
		},
	});

	const handleScrollTop = e => {
		e.preventDefault();
		if (scroll) {
			scroll.scroll.scrollTo(0, 0);
		} else {
			window.scrollTo(0, 0);
		}
	};

	const hasSetScrollHandler = useRef(false);

	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
		},
		exit: {
			opacity: 0,
		},
	};

	return active ? (
		<motion.div
			className='BackToTop'
			variants={variants}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<Box onClick={handleScrollTop} sx={button}>
				<ArrowForwardIosIcon
					sx={{
						transform: `rotate(-90deg)`,
						width: "1rem",
						marginLeft: "0.3rem",
					}}
				/>
			</Box>
		</motion.div>
	) : null;
}

export default BackToTop;
