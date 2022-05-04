import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { MediaContext } from "./Media";

function Video({ src }) {
	const { setLoaded } = useContext(MediaContext);

	return (
		<Box
			component='video'
			src={src}
			controls
			playsInline
			muted
			onLoadedData={() => setLoaded(true)}
		></Box>
	);
}

export default Video;
