import React, { useMemo } from "react";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import {
	Card,
	CardHeader,
	Avatar,
	CardActions,
	Typography,
	Box,
} from "@mui/material";
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
	const wrapper = {
		margin: "0 auto",
		width: "30vw",
		maxWidth: "20rem",
	};

	const captionStyles = {
		"mask-image":
			"linear-gradient(transparent, black 90%, black 100%, transparent 100%)",
		"-webkit-mask-image":
			"-webkit-gradient(linear, left top, left bottom,  from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
	};

	const aspect = useMemo(() => {
		if (items) {
			const width = items[0].width;
			const height = items[0].height;
			const ratio =
				width && height ? Math.round((width / height) * 10) / 10 : null;

			if (!ratio) {
				return "portrait";
			}

			if (ratio === 1) {
				return "square";
			} else if (ratio === 0.8) {
				return "portrait";
			} else if (ratio === 0.5) {
				return "landscape";
			}
		}
	}, [items]);

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
					className='InstaPost_header'
					avatar={<Avatar src={profileImage.url} alt={profileImage.alt} />}
					title={<Title handle={handle} isVerified={isVerified} />}
					component='a'
					href={`https://instagram.com/${handle}`}
					target='_blank'
				/>
				<Media
					options={{
						format: aspect && aspect,
						displayCaption: false,
						width: {
							mobile: "calc(60vw - 2rem)",
							desktop: "30vw",
						},
						maxWidth: {
							desktop: "20rem",
							mobile: "100%",
						},
					}}
					items={items}
				/>
				{caption && (
					<CardActions className='InstaPost_caption'>
						<Typography variant='body3' sx={captionStyles}>
							{caption.slice(0, 100)}...
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
