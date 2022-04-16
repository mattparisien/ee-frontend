import React, { useEffect, useState } from "react";
import getInstaPost from "./helpers/getInstaPost";
import { Box, Typography, Paper } from "@mui/material";
import variables from "../../styles/scss/_vars.module.scss";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import InstaCarousel from "./InstaCarousel";

function InstaPost({ postInfo }) {
	const [postData, setPostData] = useState({
		type: "",
		data: null,
	});

	const [mediaComponent, setMediaComponent] = useState(null);

	const itemWidth = "30rem";

	const wrapper = {
		display: "inline-block",
		width: itemWidth,
		borderRadius: "10px",
		overflow: "hidden"
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
					type: post.media_type,
					data: post.item || post.items,
				}))
			);
		}
	}, [postInfo]);

	useEffect(() => {
		if (postData.type) {
			setMediaComponent(
				(postData.type === "IMAGE" && (
					<Image src={postData.data.media_url} />
				)) ||
					(postData.type === "VIDEO" && (
						<Video src={postData.data.media_url} />
					)) ||
					(postData.type === "CAROUSEL_ALBUM" && (
						<InstaCarousel
							items={postData.data}
							image={url => <Image src={url} />}
							video={url => <Video src={url} />}
						/>
					))
			);
		}
	}, [postData]);

	const mediaWrapper = {
		height: "30rem",
	};

	return (
		<Box className='instaPost-wrapper' sx={wrapper}>
			<ConditionalWrapper
				condition={postInfo && postInfo.Linkable}
				wrapper={children => (
					<LinkWrapper children={children} permalink={postData.permalink} />
				)}
			>
				<Box className='media-wrapper' sx={mediaWrapper}>
					{mediaComponent && mediaComponent}
				</Box>
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
		height: "100%",
		height: "100%",
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
