import React from "react";
import { Box } from "@mui/material";
import { height } from "@mui/system";
import variables from "../../styles/scss/_vars.module.scss";
import classNames from "classnames";

function Image({ src, alt, frame, accent }) {
	const classes = classNames("image-wrapper", {
		"accent accent-image accent-left": accent,
	});
	return (
		<Box className={classes}>
			<Box component='img' className='image' src={src} alt={alt}></Box>
			{frame && frame}
		</Box>
	);
}

export default Image;
