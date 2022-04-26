import {
	ImageList,
	ImageListItem,
	useMediaQuery,
	Typography,
	Box,
} from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useMemo } from "react";
import Section from "../../Containers/Section";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);
	const mobile = useMediaQuery("(max-width: 600px)");

	const featuredProjects = useMemo(() => {
		return projects && projects.filter(project => project.FeaturedPost);
	}, [projects]);

	console.log(featuredProjects, projects);

	return (
		<Section classes='o-work ' data-theme='light'>
			<ImageList variant='quilted' cols={3} gap={8} sx={{ width: "100%" }}>
				{projects &&
					projects.map(project => (
						<Item
							src={project.image.url}
							alt={project.image.alt}
							title={project.title}
							subtitle={project.subtitle}
						/>
					))}
			</ImageList>
			{/* <Slider items={projects} /> */}
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
				<Typography variant="body3" pb={4}>{subtitle}</Typography>
				<Typography variant="h4" fontWeight="600">{title}</Typography>
			</Box>
		</ImageListItem>
	);
}

export default Work;
