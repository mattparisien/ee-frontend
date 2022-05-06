import React from "react";
import { Box, Typography } from "@mui/material";
import Fade from "../HOC/Fade";
import { motion } from "framer-motion/dist/framer-motion";
import InView from "../HOC/InView";

function QuoteBlock({ data, fontSize }) {
	const author = {
		display: "block",
		textAlign: "left",
		alignSelf: "flex-start",
		position: "relative",
	};

	const authorWrap = {
		alignSelf: "flex-start",
		position: "relative",
		display: "flex",
		flexDirection: "row-reverse",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		paddingLeft: "1.3em",
	};
	const line = {
		flex: 1,
		height: "1px",
		transformOrigin: "left",
	};

	const quote = {
		textIndent: "-0.45em",
		padding: "0 0.45em",
	};

	const CustomMotionLine = motion(Box);

	const lineVariants = {
		hidden: {
			scaleX: 0,
		},
		visible: {
			scaleX: 1,

			transition: {
				ease: [0.86, 0, 0.07, 0.995],
				duration: 1,
			},
		},
		exit: {
			scaleX: 0,
			transition: {
				ease: [0.86, 0, 0.07, 0.995],
				duration: 1,
			},
		},
	};

	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
		>
			<Fade
				wrapper={Typography}
				wrapperProps={{
					variant: fontSize || "h4",
					component: "blockquote",
					sx: quote,
				}}
			>
				{`"${data.quote}"`}
			</Fade>

			<Box sx={authorWrap} mt={8}>
				<Typography
					variant='h6'
					ml={4}
					sx={author}
					flex={3}
					className='accent accent-left accent-text'
					fontWeight={600}
				>
					<Box component='span' fontWeight='800'>
						{data.author}
					</Box>
				</Typography>
				<InView sx={{ flex: 1 }}>
					<CustomMotionLine
						sx={line}
						className='line foreground-el'
						variants={lineVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
					/>
				</InView>
			</Box>
		</Box>
	);
}

export default QuoteBlock;
