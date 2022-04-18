import React from "react";
import { Box } from "@mui/material";
import { height } from "@mui/system";
import variables from "../../styles/scss/_vars.module.scss";
import classNames from "classnames";

function Image({ src, alt, frame, height, width, aspectRatio, accent }) {
	const classes = classNames("image-wrapper", {
		"accent accent-image accent-left": accent,
	});

	const wrapper = {
		height: height,
		width: width,
		position: "relative",
		aspectRatio: `1 / ${aspectRatio}`,
	};

	const image = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
	};

	return (
		<Box sx={wrapper} className={classes}>
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
