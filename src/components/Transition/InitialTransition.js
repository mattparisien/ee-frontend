import React from "react";
import { motion } from "framer-motion";

function InitialTransition() {
	const blackBox = {
		initial: {
			height: "100vh",
		},
		animate: {
			height: 0,
			transition: {
				duration: 1.5,
				ease: [0.87, 0, 0.13, 1],
			},
		},
	};

	return (
		<div className='-position-absolute -display-flex -align-items-center -justify-content-center -w-100 -h-100'>
			<motion.div
				className='-position-relative z-50 -w-100 -h-100 -bg-dark'
				initial='initial'
				animate='animate'
				variants={blackBox}
			/>
		</div>
	);
}

export default InitialTransition;
