import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import Image from "./Image";
import Video from "./Video";

function Media(props) {
	const { aspectRatio, width, height, src, alt, variant, accent } = props;

	const classes = classNames("media-wrapper", {
		"accent accent-image accent-left": accent,
	});


	console.log(src)

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
		<Box className={classes} sx={wrapper}>
			{variant === "image" && <Image {...props} />}
			{variant === "video" && <Video {...props} />}
			{/* {variant === "insta" && (
				<InstaPost
					postInfo={{
						URL: src,
					}}
				/>
			)} */}
		</Box>
	);
}

export default Media;
