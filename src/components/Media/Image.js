import React from "react";
import { Box } from "@mui/material";
import { height } from "@mui/system";
import variables from "../../styles/scss/_vars.module.scss";
import classNames from "classnames";

function Image({ src, alt, frame, accent }) {

	const imageWrapper = {
		width: "100%",
		height: "100%"
	}

	return (
		<Box className='image-wrapper' sx={imageWrapper}>
			<Box component='img' className='image' src={src} alt={alt}></Box>
			{frame && frame}
		</Box>
	);
}

export default Image;
