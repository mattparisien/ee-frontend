import React from "react";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";

function Loader() {
	const wrap = theme => ({
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: theme.palette.primary.light,
    zIndex: 999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ".MuiCircularProgress-colorPrimary": {
			color: theme.palette.primary.dark,
		},
	});

	return <Box sx={wrap}><CircularProgress/></Box>;
}

export default Loader;
