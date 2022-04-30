import { Box } from "@mui/material";
import React, { useContext } from "react";
import { MediaContext } from "./Media";

function Image({ src, alt, frame, accent }) {
	const { setLoaded } = useContext(MediaContext);

	const imageWrapper = {
		width: "100%",
		height: "100%",
	};

	return (
		<Box className='image-wrapper' sx={imageWrapper}>
			<Box
				component='img'
				className='image'
				src={src}
				alt={alt}
				onLoad={() => setLoaded(true)}
			></Box>
			{frame && frame}
		</Box>
	);
}

export default Image;
