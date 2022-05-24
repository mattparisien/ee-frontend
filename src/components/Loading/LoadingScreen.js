import { CircularProgress } from "@mui/material";
import React from "react";

function LoadingScreen({ isActive }) {
	return (
		<div
			className={`LoadingScreen bg-light fixed top-0 left-0 w-full h-screen ${
				isActive ? "flex items-center justify-center" : "hidden"
			}`}
			style={{ zIndex: 999 }}
		>
			<CircularProgress sx={{ color: "black" }} />
		</div>
	);
}

export default LoadingScreen;
