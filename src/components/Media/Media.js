import { Box } from "@mui/material";
import classNames from "classnames";
import React from "react";
import Image from "./Image";
import Video from "./Video";
import Carousel from "./Carousel";

function Media(props) {
	const { aspectRatio, width, height, variant, accent, items } = props;

	console.log("the itmes", items);

	const classes = classNames("media-wrapper", {
		"accent accent-image accent-left": accent,
	});

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
			{items && items.type === "image" && (
				<Image src={items && items.data.url} alt={items && items.data.alt} />
			)}
			{items && items.type === "video" && (
				<Video src={items && items.data.url} />
			)}
			{items && items.type === "carousel" && (
				<Carousel
					items={items && items.data}
					image={url => <Image src={url} />}
					video={url => <Video src={url} />}
				/>
			)}

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
