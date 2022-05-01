import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Box } from "@mui/material";
import InView from "./InView";

function FadeChildren({
	children,
	wrapper,
	childWrapper,
	wrapperProps,
	childWrapperProps,
}) {
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
				transition: {
					ease: [0.215, 0.61, 0.355, 1],
					duration: 0.9,
					delay: 0.1,
				},
			},
		},
	};

	const CustomWrapper = motion(wrapper);
	const CustomChildWrapper = motion(childWrapper);

	return (
		<InView>
			<CustomWrapper
				{...wrapperProps}
				variants={variants}
				animate={"visible"}
				initial={"hidden"}
				ext={"exit"}
			>
				{children &&
					children.map((child, i) => (
						<CustomChildWrapper
							key={i}
							variants={childrenVariants}
							{...childWrapperProps}
						>
							{child}
						</CustomChildWrapper>
					))}
			</CustomWrapper>
		</InView>
	);
}

export default FadeChildren;
