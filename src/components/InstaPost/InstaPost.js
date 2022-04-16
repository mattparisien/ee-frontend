import React, { useEffect, useState } from "react";
import getInstaPost from "./helpers/getInstaPost";
import { Box, Typography, Paper } from "@mui/material";
import variables from "../../styles/scss/_vars.module.scss";
import ConditionalWrapper from "../Containers/ConditionalWrapper";

function InstaPost({ postInfo }) {
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

	const itemWidth = "30rem";

	const wrapper = {
		display: "inline-block",
		width: itemWidth,
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
		if (postInfo && postInfo.URL) {
			const options = {
				...postInfo,
			};

			getInstaPost(postInfo.URL, options).then(post =>
				setPostData(prev => ({
					...prev,
					media: {
						type: post.media_type,
						src: post.media_url,
					},
					permalink: post.permalink,
					caption: post.caption,
				}))
			);
		}
	}, [postInfo]);

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

	return (
		<Box className='instaPost-wrapper' sx={wrapper}>
			<ConditionalWrapper
				condition={postInfo && postInfo.Linkable}
				wrapper={children => (
					<LinkWrapper children={children} permalink={postData.permalink} />
				)}
			>
				{mediaComponent && mediaComponent}
				{postData.caption && (
					<Box className='post-text' sx={text} pt={2}>
						<Typography sx={caption} className='caption'>
							{postData.caption && postData.caption}
						</Typography>
					</Box>
				)}
			</ConditionalWrapper>
		</Box>
	);
}

const LinkWrapper = ({ children, permalink }) => {
	const linkWrap = {
		width: "100%",
		height: "100%",
	};

	return (
		<Box
			sx={linkWrap}
			component='a'
			href={permalink}
			rel='noreferrer'
			target='_blank'
		>
			{children}
		</Box>
	);
};

const Video = ({ src }) => {
	const videoWrapper = {
		borderRadius: "10px",
		overflow: "hidden",
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
		height: "30rem",
		overflow: "hidden",
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
