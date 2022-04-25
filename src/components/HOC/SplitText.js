import React, { useMemo } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion/dist/framer-motion";

function SplitText({ children }) {
	const wordStyle = theme => ({
		display: "inline-block",

		paddingRight: theme.spacing(3),
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
			transition: { duration: 1.2, ease: [0.190, 1.000, 0.220, 1.000] },
		},
	};
	// (0.190, 1.000, 0.220, 1.000)

	const splitText = useMemo(() => {
		if (children) {
			const words = children.split(" ");
			const map = words.map(word => word.split(""));

			const final = map.map(arrays => (
				<Box className='motion-word' sx={wordStyle}>
					{arrays.map(char => (
						<motion.div
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

	return <AnimationWrapper>{splitText}</AnimationWrapper>;
}

const AnimationWrapper = ({ children }) => {
	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,

			transition: { staggerChildren: 0.02, delayChildren: 0.2 },
		},
	};

	return (
		<motion.div
			className='motion-wrap'
			variants={containerVariants}
			initial={"hidden"}
			animate='visible'
			style={{ overflow: "hidden" }}
			// exit={{
			// 	y: "-100%",
			// 	transition: { ease: "easeInOut", duration: 1, staggerChildren: 0.5 },
			// }}
		>
			{children}
		</motion.div>
	);
};

export default SplitText;
