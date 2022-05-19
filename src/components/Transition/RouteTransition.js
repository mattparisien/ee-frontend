import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

function RouteTransition({ children }) {
	const router = useRouter();

	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { delay: 0.2, duration: 0.5 },
		},
		exit: {
			opacity: 0,
			transition: { ease: "easeInOut", duration: 0.5, delay: 0.5 },
		},
	};

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				className='RouteTransition'
				variants={variants}
				animate='visible'
				exit='exit'
				key={router.pathname}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

export default RouteTransition;
