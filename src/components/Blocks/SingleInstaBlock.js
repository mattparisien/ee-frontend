import { Avatar, Box, Card, CardHeader, Typography } from "@mui/material";
import React from "react";
import Media from "../Media/Media";
import VerifiedBadge from "./assets/verified.png";
import { useMemo } from "react";

function SingleInstaBlock({ data }) {
	const wrapper = {
		margin: "0 auto",
		width: "40vw",
		maxWidth: "30rem"
	};

	const aspect = useMemo(() => {
		if (data) {
			const width = data.media.data[0].attributes.width;
			const height = data.media.data[0].attributes.height;
			const ratio = width / height;

			if (ratio === 1) {
				return "square";
			}
		}
	}, [data]);

	console.log(data);

	return (
		<Card className='card' sx={wrapper}>
			<CardHeader
				className='card-header'
				avatar={<Avatar />}
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
						desktop: "40vw",
					},
					maxWidth: {
						desktop: "30rem",
						mobile: "100%",
					},
				}}
				items={[
					{
						url: data && data.media.data[0].attributes.url,
						alt: "hi",
						media_type: "image",
					},
				]}
			/>
			<Box className='card-footer'></Box>
		</Card>
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
