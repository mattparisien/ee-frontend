import React from "react";
import { Box } from "@mui/material";

function Video({ src }) {
	const wrapper = {
		height: "100%",
		width: "100%",
	};

	return (
		<Box className='video-wrapper' sx={wrapper}>
			<Box component='video' src={src} controls playsInline muted></Box>
		</Box>
	);
}

export default Video;
