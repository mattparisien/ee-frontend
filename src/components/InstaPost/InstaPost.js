import React, { useEffect, useState } from "react";
import getInstaPost from "./helpers/getInstaPost";
import { Box, Typography } from "@mui/material";
import variables from "../../styles/scss/_vars.module.scss";

function InstaPost() {
	const [postData, setPostData] = useState({
		image: {
			src: null,
			alt: null,
		},
		comments: null,
		permalink: null,
		caption: null,
		likes: null,
	});

	const wrapper = {};

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
			background: `linear-gradient(transparent, ${variables['colors-light']})`,
		},
	};

	useEffect(() => {
		const data = getInstaPost().then(data =>
			setPostData(prev => ({
				...prev,
				image: { ...prev.image, src: data.data.media_url },
				permalink: data.data.permalink,
				caption: data.data.caption,
			}))
		);
	}, []);

	return (
		<Box className='instaPost-wrapper' sx={wrapper}>
			<Box
				sx={linkWrap}
				component='a'
				href={postData.permalink && postData.permalink}
				rel='noreferrer'
				target='_blank'
			>
				<Box className='image-wrapper' sx={imageWrapper}>
					<Box
						component='img'
						className='image'
						src={postData.image.src && postData.image.src}
					></Box>
				</Box>
				<Box className='post-text' sx={text} pt={2}>
					<Typography sx={caption} className='caption'>
						{postData.caption && postData.caption}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default InstaPost;
