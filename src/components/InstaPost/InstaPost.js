import { ConstructionOutlined } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardHeader,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import useMediaRatio from "../../helpers/hooks/useMediaRatio";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Media from "../Media/Media";
import VerifiedBadge from "./assets/verified.png";

function InstaPost({
	linkTo,
	handle,
	caption,
	items,
	profileImage,
	isVerified,
}) {
	const [dimensions, setDimensions] = useState({
		width: null,
		height: null,
	});


	console.log('the caption', caption)
	

	const ratio = useMediaRatio(dimensions.width, dimensions.height);

	useEffect(() => {
		if (items && items[0].url && !dimensions.width) {
			if (items[0].media_type === "image") {
				const img = new Image();
				img.src = items[0].url;
				img.onload = () => {
					setDimensions({
						height: img.height,
						width: img.width,
					});
				};
			} else if (items[0].media_type === "video") {
				const video = document.createElement("video");
				video.src = items[0].url;

				video.onloadeddata = () => {
					setDimensions({
						height: video.videoHeight,
						width: video.videoWidth,
					});
				};
			}
		}
	}, [items]);

	const wrapper = theme => ({
		margin: "0 auto",

		width: "calc(100vw - 2rem)",
		[theme.breakpoints.up("sm")]: {
			width: "50vw",
			maxWidth: "30rem",
		},
	});

	const captionStyles = {
		height: "100%",
		"mask-image":
			"linear-gradient(transparent, black 90%, black 100%, transparent 100%)",
		"-webkit-mask-image":
			"-webkit-gradient(linear, left top, left bottom,  from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
	};

	return (
		<ConditionalWrapper
			condition={linkTo}
			wrapper={children => (
				<a href={linkTo} target='_blank' rel='noreferrer'>
					{children}
				</a>
			)}
		>
			<Card className='InstaPost' sx={wrapper}>
				<CardHeader
					sx={{ height: "4rem" }}
					className='InstaPost_header'
					avatar={<Avatar src={profileImage.url} alt={profileImage.alt} />}
					title={<Title handle={handle} isVerified={isVerified} />}
					component='a'
					href={`https://instagram.com/${handle}`}
					target='_blank'
				/>
				<Media
					aspect={ratio}
					options={{
						displayCaption: false,
						width: {
							mobile: "calc(60vw - 2rem)",
							desktop: "50vw",
						},
						maxWidth: {
							desktop: "30rem",
							mobile: "100%",
						},
					}}
					items={items}
				/>
				{items[0].caption && (
					<CardActions
						className='InstaPost_caption'
						sx={{
							overflow: "hidden",
							padding: "0.5em 0.8em",
							height: "4rem",
						}}
					>
						<Typography variant='body3' sx={captionStyles}>
							{<strong style={{ marginRight: "0.5em" }}>{handle}</strong>}
							{caption || items[0].caption}
						</Typography>
					</CardActions>
				)}
			</Card>
		</ConditionalWrapper>
	);
}

const Title = ({ handle, isVerified }) => {
	return (
		<Box display='flex' alignItems='center' className='handle'>
			<Typography variant='body2' fontWeight='600' mr={2}>
				@{handle}
			</Typography>
			{isVerified && <img src={VerifiedBadge} width='15px' height='15px' />}
		</Box>
	);
};

export default InstaPost;
