import { Box } from "@mui/material";
import React, { useContext } from "react";
import { MediaContext } from "./Media";

function Image({ src, alt, frame, accent }) {
	const { setLoaded } = useContext(MediaContext);

	return (
		<Box
			component='img'
			className='image'
			src={src}
			alt={alt}
			onLoad={() => setLoaded(true)}
		></Box>
	);
}

export default Image;
