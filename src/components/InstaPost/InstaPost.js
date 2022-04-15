import React, { useEffect, useState } from "react";
import getInstaPost from "./helpers/getInstaPost";
import { Box, Typography } from "@mui/material";
import variables from "../../styles/scss/_vars.module.scss";

function InstaPost() {
	const [postData, setPostData] = useState({
		media: {
			type: null,
			src: null,
			alt: null,
		},
		comments: null,
		permalink: null,
		caption: null,
		likes: null,
	});

	const [mediaComponent, setMediaComponent] = useState(null);

	const wrapper = {};

	const linkWrap = {
		width: "100%",
		height: "100%",
	};

	const caption = {
		width: "300px",
	};

	const text = {
		height: "5rem",
		position: "relative",
		overflow: "hidden",
		"&::after": {
			content: "''",
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			background: `linear-gradient(transparent, ${variables["colors-light"]})`,
		},
	};

	useEffect(() => {
		getInstaPost().then(data =>
			setPostData(prev => ({
				...prev,
				media: {
					type: data.data.media_type,
					src: data.data.media_url,
				},
				permalink: data.data.permalink,
				caption: data.data.caption,
			}))
		);
	}, []);

	useEffect(() => {
		if (postData.media.type) {
			setMediaComponent(
				postData.media.type !== "VIDEO" ? (
					<Image src={postData.media.src} />
				) : (
					<Video src={postData.media.src} />
				)
			);
		}
	}, [postData]);

	useEffect(() => {
		console.log(mediaComponent);
	}, [mediaComponent]);

	return (
		<Box className='instaPost-wrapper' sx={wrapper}>
			<Box
				sx={linkWrap}
				component='a'
				href={postData.permalink && postData.permalink}
				rel='noreferrer'
				target='_blank'
			>
				{mediaComponent && mediaComponent}
				<Box className='post-text' sx={text} pt={2}>
					<Typography sx={caption} className='caption'>
						{postData.caption && postData.caption}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

const Video = ({ src }) => {
	const videoWrapper = {
		borderRadius: "10px",
		overflow: "hidden",
		width: "300px",
		height: "300px",
		video: {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			objectPosition: "center",
		},
	};

	return (
		<Box className='video-wrapper' sx={videoWrapper}>
			<Box component='video' controls muted playsInLine src={src}></Box>
		</Box>
	);
};

const Image = ({ src, alt }) => {
	const imageWrapper = {
		borderRadius: "10px",
		overflow: "hidden",
		width: "300px",
		height: "300px",
		img: {
			width: "100%",
			height: "100%",
			objectFit: "cover",
			objectPosition: "center",
		},
	};

	return (
		<Box className='image-wrapper' sx={imageWrapper}>
			<Box component='img' className='image' src={src}></Box>
		</Box>
	);
};

export default InstaPost;
