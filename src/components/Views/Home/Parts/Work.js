import { Box, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useMemo } from "react";
import Section from "../../../Containers/Section";
import Slider from "../../../Slider/Slider";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);
	const mobile = useMediaQuery("(max-width: 600px)");

	const featuredProjects = useMemo(() => {
		return projects && projects.filter(project => project.FeaturedPost);
	}, [projects]);

	return (
		<Section data-theme='light'>
			<Slider items={projects} />
		</Section>
	);
}

function Item({ src, alt, title, subtitle }) {
	const itemStyles = {
		position: "relative",
		"&::after": {
			position: "absolute",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			backgroundColor: "black",
			opacity: 0.4,
			content: "''",
		},
	};

	const info = theme => ({
		color: theme.palette.primary.light,
		position: "absolute",
		bottom: 0,
		left: 0,
		zIndex: 999,
	});

	return (
		<ImageListItem sx={itemStyles}>
			<img src={src} alt={alt} />
			<Box className='info' sx={info} p={3}>
				<Typography variant='body3' pb={4}>
					{subtitle}
				</Typography>
				<Typography variant='h4' fontWeight='600'>
					{title}
				</Typography>
			</Box>
		</ImageListItem>
	);
}

export default Work;
