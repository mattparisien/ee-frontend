import { Box, ImageListItem, Typography, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useMemo } from "react";
import Section from "../../../Containers/Section";
import Slider from "../../../Slider/Slider";
import Media from "../../../Media/Media";
import Container from "../../../Containers/ContainerFluid";
import Link from "../../../Link/Link";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);
	const mobile = useMediaQuery("(max-width: 600px)");

	const featuredProjects = useMemo(() => {
		return projects && projects.filter(project => project.FeaturedPost);
	}, [projects]);

	return (
		<Section data-theme='light'>
			{/* <Slider items={projects} /> */}
			<Container>
				<Box
					className='featured-wrapper'
					display='flex'
					justifyContent='space-between'
				>
					{projects &&
						projects.map((project, i) => (
							<Link
								key={project.id}
								classes='featured-item -hover-underline'
								isRouterLink
								href={`/projects/${
									project.subtitle &&
									project.subtitle.toLowerCase().split(" ").join("-")
								}`}
							>
								<Box
									sx={theme => ({
										position: "relative",
										"&:hover::after": {
											opacity: 0.5,
										},
										"&::after": {
											transition: "400ms ease",
											position: "absolute",
											top: 0,
											left: 0,
											width: "100%",
											height: "100%",
											backgroundColor: theme.palette.primary.colorSet.yellow,
											opacity: 0,
											content: '""',
										},
									})}
								>
									<Media
										grayscale
										boxHeight='auto'
										items={[{ ...project.image, media_type: "image" }]}
										options={{
											filter: "grayscale",
											format: "portrait",
											width: {
												desktop: "25vw",
												mobile: "calc(100vw - 2rem)",
											},

											maxWidth: {
												desktop: "330px",
												mobile: "100vw",
											},
										}}
									/>
								</Box>
								<Box
									className='item-info'
									mt={3}
									display='flex'
									justifyContent='space-between'
								>
									<Typography
										variant='body3'
										component='p'
										className='-underline -underline-dark'
										sx={{ position: "relative" }}
									>
										{project.title}
									</Typography>
									<Typography
										variant='body3'
										component='p'
										className='-underline -underline-dark'
										sx={{ position: "relative" }}
									>
										{project.subtitle}
									</Typography>
								</Box>
							</Link>
						))}
				</Box>
			</Container>
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
