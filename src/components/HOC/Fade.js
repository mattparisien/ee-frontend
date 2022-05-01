import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";

function Fade({ children, wrapper, enterDelay, exitDelay, enterY, exitY }) {
	const { ref, inView, entry } = useInView();

	const variants = {
		hidden: {
			opacity: 0,
			y: enterY || "20%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: [0.215, 0.61, 0.355, 1],
				duration: 0.9,
				delay: enterDelay || 0.1,
			},
		},
		exit: {
			opacity: 0,
			y: exitY || "-20%",
			transition: {
				ease: [0.215, 0.61, 0.355, 1],
				duration: 0.9,
				delay: exitDelay || 0.1,
			},
		},
	};

	return wrapper(
		children && Array.isArray(children) ? (
			children.map((child, i) => (
				<motion.div
					key={i}
					className='fade-child-wrap'
					ref={ref}
					variants={variants}
					initial={"hidden"}
					animate={inView && "visible"}
				>
					{child}
				</motion.div>
			))
		) : (
			<motion.div
				className='fade-child-wrap'
				ref={ref}
				variants={variants}
				initial={"hidden"}
				animate={inView && "visible"}
			>
				{children}
			</motion.div>
		)
	);
}

export default Fade;
