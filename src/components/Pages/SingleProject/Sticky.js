import React from "react";
import Section from "../../Containers/Section";
import Container from "../../Containers/ContainerFluid";
import { Box, Card, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

function Sticky({
	additionalMedia,
	metrics,
	reverse,
	title,
	body,
	metric,
	metricTitle,
}) {

	const containerStyle = {
		display: "flex",
		flexDirection: reverse ? "row-reverse" : "row",
	};

	return (
		<>
			<Section>
				<Container>
					<Box sx={containerStyle}>
						<ImageSection additionalMedia={additionalMedia} reverse={reverse} />
						<TextSection metricTitle={metricTitle} metric={metric} />
					</Box>
				</Container>
			</Section>
			<Section>
				<Container></Container>
			</Section>
		</>
	);
}

function ImageSection({ additionalMedia, reverse }) {
	const card = {
		height: "46vw",
	};

	const image = {
		width: "100%",
		height: "100%",
		objectFit: "cover",
	};

	return (
		<Box sx={{ flex: "70%" }} mr={reverse ? 0 : 5} ml={reverse ? 5 : 0}>
			{additionalMedia.map(media => (
				<Box mb={5}>
					<Card sx={card}>
						<CardMedia
							component='img'
							image={media.attributes.url}
							sx={image}
						/>
					</Card>
				</Box>
			))}
		</Box>
	);
}

function TextSection({metric, metricTitle}) {
	const stickyStyle = {
		position: "sticky",
		top: "100px",
		flex: "30%",
		height: "100px",
	};

	const title = {
		color: "grey",
		fontFamily: "Kobe Bold",
		textTransform: "capitalize"
	};

	const item = {
		marginBottom: "2rem",
	};

	const metricStyle = {
		fontFamily: 'Kobe'
	}

	return (
		<Box sx={stickyStyle}>
			<Box>
				<Typography variant='h3' component='h2' className="metric-title" sx={title} mb={2}>
					{metricTitle === 'funds' ? metricTitle + " raised" : metricTitle}
				</Typography>
				<Typography variant='h5' component='h5' sx={metricStyle}>
					{metric}
				</Typography>
			</Box>
		</Box>
	);
}

export default Sticky;
