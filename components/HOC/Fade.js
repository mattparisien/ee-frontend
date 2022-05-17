import { motion } from "framer-motion";
import React from "react";
import useInView from "../../helpers/hooks/useInView";

function Fade({
	children,
	wrapper,
	enterDelay,
	exitDelay,
	enterY,
	exitY,
	wrapperProps,
}) {
	const { ref, inView } = useInView();
	const CustomWrapper = motion(wrapper);

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

	return (
		<CustomWrapper
			ref={ref}
			{...wrapperProps}
			variants={variants}
			animate={inView && "visible"}
			initial='hidden'
			exit='exit'
		>
			{children}
		</CustomWrapper>
	);
}

export default Fade;
