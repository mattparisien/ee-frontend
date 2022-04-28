import React from "react";
import InView from "./InView";
import { motion } from "framer-motion/dist/framer-motion";

function Scale({ children }) {
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
		<InView>
			<motion.div
				className='Scale'
				style={{ width: "100%", height: "100%" }}
				variants={variants}
				initial='hidden'
				animate='visible'
				exit='exit'
			>
				{children}
			</motion.div>
		</InView>
	);
}

export default Scale;
