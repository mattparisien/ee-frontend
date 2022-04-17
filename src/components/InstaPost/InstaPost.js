import React, { useEffect, useState } from "react";
import getInstaPost from "./helpers/getInstaPost";

import {
	Box,
	Typography,
	Paper,
	Card,
	CardMedia,
	CardHeader,
} from "@mui/material";
import variables from "../../styles/scss/_vars.module.scss";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import InstaCarousel from "./InstaCarousel";
import InstaVideo from "./InstaVideo";
import InstaImage from "./InstaImage";
import { Button } from "@mui/material";
import { borderRadius } from "@mui/system";

function InstaPost({ postInfo }) {
	const [postData, setPostData] = useState({
		type: "",
		data: null,
	});

	const [error, setError] = useState(false);

	const [mediaComponent, setMediaComponent] = useState(null);

	const itemWidth = "30rem";

	const wrapper = {
		display: "inline-block",
		width: itemWidth,
		position: "relative",
		overflow: "hidden",
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

			getInstaPost(postInfo.URL, options)
				.then(post =>
					setPostData(prev => ({
						...prev,
						type: post.media_type,
						data: post.item || post.items,
					}))
				)
				.catch(err => setError(true));
		}
	}, [postInfo]);

	useEffect(() => {
		if (postData.type) {
			setMediaComponent(
				(postData.type === "IMAGE" && (
					<InstaImage src={postData.data.media_url} />
				)) ||
					(postData.type === "VIDEO" && (
						<InstaVideo src={postData.data.media_url} />
					)) ||
					(postData.type === "CAROUSEL_ALBUM" && (
						<InstaCarousel
							items={postData.data}
							image={url => <InstaImage src={url} />}
							video={url => <InstaVideo src={url} />}
						/>
					))
			);
		}
	}, [postData]);

	const mediaWrapper = {
		position: "relative",
	};

	// const username = {
	// 	position: "absolute",
	// 	top: 0,
	// 	left: 0,
	// 	zIndex: 999,
	// 	height: "2.5rem",
	// 	color: variables["colors-light"],
	// 	marginTop: "2rem",
	// 	padding: "0.8rem 0.9rem",

	// 	".pill": {
	// 		backgroundColor: "black",
	// 		borderTopRightRadius: "50px",
	// 		borderBottomRightRadius: "50px",
	// 	},
	// };

	return (
		!error && (
			<Paper elevation={10}>
				<Card className='instaPost-wrapper' sx={wrapper}>
					<CardHeader>
						{postData.data &&
							(postData.data.username || postData.data[0].username) && (
								<>
									<Box className='pill'>
										<Typography variant='h6' component='p'>{`@${
											postData.data.username || postData.data[0].username
										}`}</Typography>
									</Box>
								</>
							)}
					</CardHeader>
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
				</Card>
			</Paper>
		)
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

export default InstaPost;
