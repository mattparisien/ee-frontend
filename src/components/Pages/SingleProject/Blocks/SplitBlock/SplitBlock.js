import { Box } from "@mui/material";
import { useContext } from "react";
import { BlockContext } from "../Block";

function SplitBlock(props) {
	const { flip } = useContext(BlockContext);

	const wrapper = theme => ({
		display: "flex",
		"> *": {
			flex: 1,
		},
		"> .left": {
			flex: props.flex ? props.flex.left : 1,
		},
		"> .right": {
			flex: props.flex ? props.flex.right : 1,
		},
		flexDirection: flip ? "row-reverse" : "row",
		[theme.breakpoints.down("sm")]: {
			flexDirection: flip ? "column-reverse" : "column",
		},
	});

	return (
		<Box className='split-layout' sx={wrapper}>
			{props.children}
		</Box>
	);
}

export default SplitBlock;
