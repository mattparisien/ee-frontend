import { Box } from "@mui/material";
import React, { useContext } from "react";
import { MediaContext } from "./Media";

function Video({ src }) {
	const { setLoaded } = useContext(MediaContext);

	setLoaded(true);

	return (
		<Box
			component='video'
			src={src.highRes || src}
			controls
			playsInline
			muted
			onLoadStart={() => setLoaded(true)}
		></Box>
	);
}

export default Video;
