import { Typography } from "@mui/material";
import { motion } from "framer-motion/dist/framer-motion";
import React, { useEffect } from "react";
import SplitText from "../HOC/SplitText";

function TitleBlock({ data }) {
	const containerVariants = {
		hidden: {
			opacity: 0,
			x: 200,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: { delay: 2, duration: 1 },
		},
		exit: {
			x: 100,
			transition: { ease: "easeInOut", duration: 0.2 },
		},
	};

	useEffect(() => {}, []);

	return !data.Title.includes("-") ? (
		<Typography
			variant='h1'
			component='h1'
			textAlign='center'
			className='title'
		>
			<SplitText>{data.Title}</SplitText>
		</Typography>
	) : (
		<>
			<Typography variant='h1' component='h1' textAlign='center'>
				<motion.div className='motion-wrap'>
					<SplitText>{data.Title.split("-")[0]}</SplitText>
				</motion.div>
			</Typography>
			<Typography variant='h4' component='h4' textAlign='center'>
				<motion.div className='motion-wrap'>
					<SplitText>{data.Title.split("-")[1]}</SplitText>
				</motion.div>
			</Typography>
		</>
	);
}

export default TitleBlock;
