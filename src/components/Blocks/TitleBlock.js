import { Typography } from "@mui/material";
import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import SplitText from "../HOC/SplitText";

function TitleBlock({ data }) {
	return !data.title.includes("-") ? (
		<Typography
			variant='h1'
			component='h1'
			textAlign='center'
			className='title'
		>
			<SplitText>{data.title}</SplitText>
		</Typography>
	) : (
		<>
			<Typography variant='h1' component='h1' textAlign='center'>
				<motion.div className='motion-wrap'>
					<SplitText>{data.title.split("-")[0]}</SplitText>
				</motion.div>
			</Typography>
			<Typography variant='h4' component='h4' textAlign='center'>
				<motion.div className='motion-wrap'>
					<SplitText>{data.title.split("-")[1]}</SplitText>
				</motion.div>
			</Typography>
		</>
	);
}

export default TitleBlock;
