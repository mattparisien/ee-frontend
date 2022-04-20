import React from "react";
import { Box, Typography } from "@mui/material";

function QuoteBlock({ data }) {
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
	};

	const quote = {
		textIndent: "-0.45em",
		padding: "0 0.45em",
	};

	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			flexDirection='column'
		>
			<Typography
				variant='h3'
				component='blockquote'
				sx={quote}
			>{`"${data.data.quote}"`}</Typography>
			<Box sx={authorWrap} mt={5}>
				<Typography
					variant='h5'
					ml={4}
					sx={author}
					flex={3}
					className='accent accent-left accent-text'
					fontWeight={600}
				>
					{data.data.author}
				</Typography>
				<Box className='line foreground-el' sx={line}></Box>
			</Box>
		</Box>
	);
}

export default QuoteBlock;
