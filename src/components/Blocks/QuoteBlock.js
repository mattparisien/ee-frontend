import React from "react";
import { Box, Typography } from "@mui/material";
import Fade from "../HOC/Fade";
import { motion } from "framer-motion";
import useInView from "../../helpers/hooks/useInView";
import Quote from "../Quote/Quote";

function QuoteBlock({ data, fontSize }) {
	// const { ref, inView } = useInView();

	// const author = {
	// 	display: "block",
	// 	textAlign: "left",
	// 	alignSelf: "flex-start",
	// 	position: "relative",
	// };

	// const authorWrap = {
	// 	alignSelf: "flex-start",
	// 	position: "relative",
	// 	display: "flex",
	// 	flexDirection: "row-reverse",
	// 	alignItems: "center",
	// 	justifyContent: "space-between",
	// 	width: "100%",
	// 	paddingLeft: "1.3em",
	// };
	// const line = {
	// 	flex: 1,
	// 	height: "1px",
	// 	transformOrigin: "left",
	// };

	// const quoteStyle = {
	// 	textIndent: "-0.45em",
	// 	padding: "0 0.45em",
	// };

	// const CustomMotionLine = motion(Box);

	// const lineVariants = {
	// 	hidden: {
	// 		scaleX: 0,
	// 	},
	// 	visible: {
	// 		scaleX: 1,

	// 		transition: {
	// 			ease: [0.86, 0, 0.07, 0.995],
	// 			duration: 1,
	// 		},
	// 	},
	// 	exit: {
	// 		scaleX: 0,
	// 		transition: {
	// 			ease: [0.86, 0, 0.07, 0.995],
	// 			duration: 1,
	// 		},
	// 	},
	// };

	return (
		// <Box
		// 	display='flex'
		// 	alignItems='center'
		// 	justifyContent='center'
		// 	flexDirection='column'
		// 	ref={ref}
		// >
		// 	<blockquote
		// 		className='text-lg md:text-3xl'
		// 		style={quoteStyle}
		// 	>{`"${data.quote}"`}</blockquote>

		// 	<Box sx={authorWrap} mt={8}>
		// 		<Typography
		// 			variant='h6'
		// 			ml={4}
		// 			sx={author}
		// 			flex={3}
		// 			className='accent accent-left accent-text'
		// 			fontWeight={600}
		// 		>
		// 			<Box component='span' fontWeight='800'>
		// 				{data.author}
		// 			</Box>
		// 		</Typography>

		// 		<CustomMotionLine
		// 			sx={line}
		// 			className='line bg-current'
		// 			variants={lineVariants}
		// 			initial='hidden'
		// 			animate={inView && "visible"}
		// 			exit='exit'
		// 		/>
		// 	</Box>
		// </Box>
		<Quote quote={data.quote} author={data.author}/>
	);
}

export default QuoteBlock;
