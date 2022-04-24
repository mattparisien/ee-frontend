import { Typography } from "@mui/material";
import { motion } from "framer-motion/dist/framer-motion";
import React from "react";

function TitleBlock({ data }) {
	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { delay: 0.8, duration: 1 },
		},
		exit: {
			x: 100,
			transition: { ease: "easeInOut", duration: 0.2},
		},
	};

	return !data.Title.includes("-") ? (
		<Typography variant='h1' component='h1' textAlign='center'>
			<motion.div
				className='motion-wrap'
				initial={"hidden"}
				animate='visible'
				exit='exit'
			>
				{data.Title}
			</motion.div>
		</Typography>
	) : (
		<>
			<Typography variant='h1' component='h1' textAlign='center'>
				<motion.div className='motion-wrap'>
					{data.Title.split("-")[0]}
				</motion.div>
			</Typography>
			<Typography variant='h4' component='h4' textAlign='center'>
				<motion.div className='motion-wrap'>
					{data.Title.split("-")[1]}
				</motion.div>
			</Typography>
		</>
	);
}

export default TitleBlock;
