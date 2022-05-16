import React, { useEffect, useMemo } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function SplitText(props) {
	const wordStyle = theme => ({
		display: "inline-block",
	});

	const charStyle = {
		display: "inline-block",
	};

	const charVariants = {
		hidden: {
			opacity: 0,
			y: "100%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 1.2, ease: [0.19, 1.0, 0.22, 1.0] },
		},
		exit: {
			opacity: 0,
			y: "-100%",
			transition: { duration: 1.2, ease: [0.19, 1.0, 0.22, 1.0] },
		},
	};

	const splitText = useMemo(() => {
		if (props.children) {
			const words = props.children.split(" ");
			const map = words.map(word => word.split(""));

			const final = map.map((arrays, i) => (
				<Box className='motion-word' sx={wordStyle} key={i}>
					{arrays.map((char, idx) => (
						<motion.div
							key={idx}
							variants={charVariants}
							className='motion-char'
							style={charStyle}
						>
							{char}
						</motion.div>
					))}
				</Box>
			));

			return final;
		}
		return null;
	}, []);

	return <AnimationWrapper {...props}>{splitText}</AnimationWrapper>;
}

const AnimationWrapper = ({ children, enterDelay, exitDelay }) => {
	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,

			transition: { staggerChildren: 0.02, delayChildren: enterDelay || 0.2 },
		},
		exit: {
			transition: { staggerChildren: 0.02, delayChildren: exitDelay || 0.2 },
		},
	};

	const { ref, inView, entry } = useInView({
		threshold: 0,
	});

	return (
		<motion.div
			ref={ref}
			className='motion-wrap'
			variants={containerVariants}
			initial={"hidden"}
			exit='exit'
			animate={inView && "visible"}
			style={{
				overflow: "hidden",
			}}
		>
			{children}
		</motion.div>
	);
};

export default SplitText;
