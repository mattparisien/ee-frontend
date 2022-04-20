import React from "react";
import { Box } from "@mui/material";

function SplitBlock(props) {
	const wrapper = theme => ({
		display: "flex",
		"> *": {
			flex: 1,
		},
		"> .left": {
			flex: props.flex.left,
		},
		"> .right": {
			flex: props.flex.right,
		},
		flexDirection: props.flip ? "row-reverse" : "row",
		[theme.breakpoints.down("sm")]: {
			flexDirection: props.flip ? "column-reverse" : "column",
		},
	});

	return (
		<Box className='split-layout' sx={wrapper}>
			{props.children}
		</Box>
	);
}

export default SplitBlock;
