import React, { useMemo } from "react";
import { Box } from "@mui/material";
import { useContext } from "react";
import { MediaContext } from "./Media";

function Video({ src }) {
	const { setLoaded } = useContext(MediaContext);

	// const thumbnail = useMemo(() => {
	// 	if (src) {
	// 		const url = src.replace(/mov|mp4/gi, "jpg");

	// 		return url;
	// 	}
	// }, [src]);

	return (
		<Box
			component='video'
			src={src}
			controls
			playsInline
			// preload='none'
			muted
			// poster={thumbnail}
			onLoadStart={() => setLoaded(true)}
		></Box>
	);
}

export default Video;
