import React from "react";
import { Box } from "@mui/material";
import { height } from "@mui/system";
import variables from "../../styles/scss/_vars.module.scss";

function Image({ src, alt, frame, height, width }) {
	const wrapper = {
		height: height,
		width: width,
		position: "relative",
	};

	const image = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
	};

	return (
		<Box sx={wrapper} className='image-wrapper -swipe-transition'>
			<Box
				component='img'
				className='image'
				src={src}
				alt={alt}
				sx={image}
			></Box>
			{frame && frame}
		</Box>
	);
}

export default Image;