import { Box } from "@mui/material";
import { useContext } from "react";
import { BlockContext } from "../Block";

function SplitBlock(props) {
	const { flip, inset } = useContext(BlockContext);

	const wrapper = theme => ({
		display: "flex",
		justifyContent: "space-between",

		".is-left": {
			width: props.width && props.width.left,
			flex: props.flex && props.flex.left,
		},
		".is-right": {
			width: props.width && props.width.right,
			flex: props.flex && props.flex.right,
		},

		flexDirection: flip ? "row-reverse" : "row",
		[theme.breakpoints.down("sm")]: {
			flexDirection: flip ? "column-reverse" : "column",
			".is-right, .is-left": {
				width: "100%",
			},
			".is-left": {
				marginBottom: theme.spacing(10),
			},
		},
	});

	return (
		<Box className='split-layout' sx={wrapper}>
			<Left component={props.leftComponent} styles={props.leftStyles} />
			<Right component={props.rightComponent} styles={props.rightStyles} />
		</Box>
	);

	function Left({ component, styles }) {
		return (
			<Box
				className={`split-layout_section ${flip ? "is-right" : "is-left"}`}
				sx={styles}
			>
				{component}
			</Box>
		);
	}
	function Right({ component, styles }) {
		return (
			<Box
				className={`split-layout_section ${flip ? "is-left" : "is-right"}`}
				sx={styles}
			>
				{component}
			</Box>
		);
	}
}

export default SplitBlock;
