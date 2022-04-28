import React, { useEffect } from "react";
import { CircularProgress, Box } from "@mui/material";

function LoadingScreen({ isActive }) {
	useEffect(() => {
		console.log(isActive);
	}, [isActive]);

	const wrapper = theme => ({
		backgroundColor: theme.palette.primary.light,
		top: 0,
		left: 0,
		position: "fixed",
		zIndex: 999,
		width: "100%",
		height: "100vh",
		display: isActive ? "flex" : "none",
		justifyContent: "center",
		alignItems: "center",
		".MuiCircularProgress-colorPrimary": {
			color: theme.palette.primary.dark,
		},
	});

	return (
		<Box sx={wrapper}>
			<CircularProgress />
		</Box>
	);
}

export default LoadingScreen;
