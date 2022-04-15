import React, { useEffect, useState } from "react";
import getInstaPost from "./helpers/getInstaPost";
import { Box, Typography } from "@mui/material";

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
				<Typography>{postData.caption && postData.caption}</Typography>
			</Box>
		</Box>
	);
}

export default InstaPost;
