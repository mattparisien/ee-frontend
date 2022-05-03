import {
	Avatar,
	Box,
	Card,
	CardHeader,
	Typography,
	CardActions,
} from "@mui/material";
import React, { useMemo } from "react";
import Media from "../Media/Media";
import VerifiedBadge from "./assets/verified.png";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import { Link } from "@mui/material";

function SingleInstaBlock({ data }) {
	const wrapper = {
		margin: "0 auto",
		width: "30vw",
		maxWidth: "20rem",
	};

	const aspect = useMemo(() => {
		if (data) {
			const width = data.media.data[0].attributes.width;
			const height = data.media.data[0].attributes.height;
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
	}, [data]);

	const caption = {
		"mask-image":
			"linear-gradient(transparent, black 90%, black 100%, transparent 100%)",
		"-webkit-mask-image":
			"-webkit-gradient(linear, left top, left bottom,  from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
	};

	return (
		<ConditionalWrapper
			condition={data && data.linkTo}
			wrapper={children => (
				<a href={data && data.linkTo} target='_blank' rel='noreferrer'>
					{children}
				</a>
			)}
		>
			<Card className='card' sx={wrapper}>
				<CardHeader
					className='card-header'
					avatar={
						<Avatar src={data && data.profileImage.data.attributes.url} />
					}
					title={
						<Title
							handle={data && data.handle}
							isVerified={data && data.verifiedUser}
						/>
					}
					component='a'
					href={`https://instagram.com/${data && data.handle}`}
					target='_blank'
				/>
				<Media
					disableOverlay
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
					items={
						data &&
						data.media.data.map(item => ({
							...item.attributes,
							media_type: item.attributes.providerMetadata.resourceType,
						}))
					}
				/>
				{data && data.caption && (
					<CardActions>
						<Typography variant='body3' sx={caption}>
							{data.caption.slice(0, 150)}...
						</Typography>
					</CardActions>
				)}
			</Card>
		</ConditionalWrapper>
	);
}

const Title = ({ handle, isVerified }) => {
	return (
		<Box display='flex' alignItems='center'>
			<Typography variant='body2' fontWeight='600' mr={2}>
				@{handle}
			</Typography>
			{isVerified && <img src={VerifiedBadge} width='20px' height='20px' />}
		</Box>
	);
};

export default SingleInstaBlock;
