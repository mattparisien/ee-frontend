import {
	Avatar,
	Box,
	Button,
	Card,
	CardHeader,
	Paper,
	Typography,
} from "@mui/material";
import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../context/Context";
import variables from "../../styles/scss/_vars.module.scss";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import getInstaPost from "./helpers/getInstaPost";
import InstaCarousel from "./InstaCarousel";
import InstaImage from "./InstaImage";
import InstaVideo from "./InstaVideo";

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
		if (postData.type && postInfo) {
			console.log(postInfo);
			setMediaComponent(
				(postData.type === "IMAGE" && (
					<InstaImage
						src={postData.data.media_url}
						preserveAspectRatio={postInfo.PreserveAspectRatio}
					/>
				)) ||
					(postData.type === "VIDEO" && (
						<InstaVideo
							src={postData.data.media_url}
							preserveAspectRatio={postInfo.PreserveAspectRatio}
						/>
					)) ||
					(postData.type === "CAROUSEL_ALBUM" && (
						<InstaCarousel
							items={postData.data}
							image={url => <InstaImage src={url} />}
							video={url => <InstaVideo src={url} />}
							preserveAspectRatio={postInfo.PreserveAspectRatio}
						/>
					))
			);
		}
	}, [postData, postInfo]);

	const mediaWrapper = {
		position: "relative",
	};

	return (
		!error && (
			<Paper elevation={10}>
				<Card className='instaPost-wrapper' sx={wrapper}>
					<PostHeader
						username={
							postData.data &&
							(postData.data.username || postData.data[0].username)
						}
					/>

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

const PostHeader = ({ username, src }) => {
	const header = {
		alignItems: "center",
		".MuiCardHeader-title": {
			fontFamily: "Kobe Bold",
			fontSize: "1.4rem",
		},
		".css-sgoict-MuiCardHeader-action": {
			marginTop: 0,
		},
	};

	const cta = theme => ({
		textTransform: "capitalize",
		transition: "opacity 500ms ease",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			opacity: 0.6,
		},
	});

	return (
		<CardHeader
			avatar={<CardPicture />}
			title={
				<a
					target='_blank'
					href={`https://instagram.com/${username}`}
				>{`@${username}`}</a>
			}
			sx={header}
			action={<Button variant='contained' color='primary' sx={cta}></Button>}
		/>
	);
};

const CardPicture = ({ src }) => {
	const data = useContext(DataContext);

	return (
		<Avatar
			alt='The Eyes and Ears Agency'
			src={data && data.seo && data.seo.ProfileImage.data.attributes.url}
		/>
	);
};

export default InstaPost;
