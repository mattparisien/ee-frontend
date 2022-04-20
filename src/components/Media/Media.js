import React from "react";
import { Box } from "@mui/material";
import Image from "./Image";
import Video from "./Video";

function Media(props) {
	const { aspectRatio, width, height, src, alt, variant } = props;

	const innerComponent = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		objectPosition: "center",
	};

	const wrapper = {
		height: height,
		width: width,
		position: "relative",
		aspectRatio: `1 / ${aspectRatio}`,
		"img, video": innerComponent,
	};

	return (
		<Box className='media-wrapper' sx={wrapper}>
			{variant === "image" && <Image {...props} />}
			{variant === "image" && <Video {...props} />}
		</Box>
	);
}

export default Media;
