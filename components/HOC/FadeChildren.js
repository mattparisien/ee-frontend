import { motion } from "framer-motion";
import React from "react";
import useInView from "../../helpers/hooks/useInView";

function FadeChildren({
	children,
	wrapper,
	childWrapper,
	wrapperProps,
	childWrapperProps,
}) {
	const { ref, inView } = useInView();
	const variants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,

			transition: { staggerChildren: 0.2, delayChildren: 0.2 },
		},
		exit: {
			transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
				ease: [0.215, 0.61, 0.355, 1],
				duration: 0.8,
				delay: 0.1,
			},
		},
	};

	const CustomWrapper = motion(wrapper);
	const CustomChildWrapper = motion(childWrapper);
	

	return (
		<CustomWrapper
			ref={ref}
			{...wrapperProps}
			variants={variants}
			animate={inView && "visible"}
			initial={"hidden"}
			exit={"exit"}
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
	);
}

export default FadeChildren;
