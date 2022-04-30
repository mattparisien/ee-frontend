import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { MediaContext } from "./Media";

function Video({ src }) {
	const { setLoaded } = useContext(MediaContext);


	const wrapper = {
		height: "100%",
		width: "100%",
	};

	return (
		<Box className='video-wrapper' sx={wrapper}>
			<Box
				component='video'
				src={src}
				controls
				playsInline
				muted
				onLoadedData={() => setLoaded(true)}
			></Box>
		</Box>
	);
}

export default Video;
