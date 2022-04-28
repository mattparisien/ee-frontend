import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

function FadeChildren({
	children,
	wrapper,
	childWrapper,
	wrapperProps,
	childWrapperProps,
}) {
	const { ref, inView, entry } = useInView();

	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,

			transition: { staggerChildren: 0.09, delayChildren: 0.2 },
		},
		exit: {
			transition: { staggerChildren: 0.09, delayChildren: 0.2 },
		},
	};

	const childrenVariants = {
		hidden: {
			opacity: 0,
			y: "100%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				ease: "easeOut",
				duration: 0.5,
			},
		},
	};

	const CustomWrapper = motion(wrapper);
	const CustomChildWrapper = motion(childWrapper);

	return (
		<Box className='inview-wrapper' ref={ref}>
			<CustomWrapper
				{...wrapperProps}
				variants={variants}
				animate={inView && "visible"}
				initial={"hidden"}
				ext={"exit"}
			>
				{children.map((child, i) => (
					<CustomChildWrapper
						key={i}
						variants={childrenVariants}
						{...childWrapperProps}
					>
						{child}
					</CustomChildWrapper>
				))}
			</CustomWrapper>
		</Box>
	);
}

export default FadeChildren;
