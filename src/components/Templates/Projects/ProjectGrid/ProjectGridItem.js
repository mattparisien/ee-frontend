import { Box, Typography } from "@mui/material";
import React from "react";
import Link from "../../../Link/Link";
import Media from "../../../Media/Media";

function ProjectGridItem({
	width,
	projectId,
	height,
	margin,
	color,
	image,
	title,
	artist,
}) {
	const item = theme => ({
		margin: margin,
		width: width,
		height: height,
		"&:hover::after": {
			opacity: 0.5,
		},
		"&::after": {
			position: "absolute",
			opacity: 0,
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			content: "''",
			backgroundColor: color,
			transition: "600ms ease",
		},

		position: "relative",
		"&:hover .highlight": {
			transform: "scale(1) rotate(30deg)",
		},
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			height: "100%",
			marginTop: 0,
		},
	});


	const itemInfo = {
		top: 0,
		left: 0,
		width: "100%",
		display: "flex",
		justifyContent: "space-between",
	};

	const infoTitle = theme => ({
		display: "flex",
		alignItems: "center",

		position: "relative",
		"&::after": {
			backgroundColor: "black",
			bottom: 0,
			transformOrigin: "left",
			transition: "all 1s cubic-bezier(1.000, 0.000, 0.000, 1.000)",
		},
	});

	return (
		<Link
			href={`/projects/${projectId}`}
			isRouterLink
			classes='item -hover-underline -stretchX'
			sx={item}
		>
			<Box className='item-inner' sx={{ height: "100%" }}>
				<Media
					variant='image'
					overlayColor={color}
					
					items={{
						type: "image",
						url: image.url,
						alt: image.alt,
					}}
					width={"100%"}
					height={"100%"}
				/>
				{/* <Box component='img' src={image.url} alt={image.alt}></Box> */}
				{/* <Box className='item-overlay' sx={overlay} ref={overlayRef}></Box> */}
				<Box className='item-info' sx={itemInfo} pt={2}>
					<Typography
						variant='body2'
						className='artist -underline'
						sx={infoTitle}
					>
						{artist}
					</Typography>

					<Typography
						variant='body2'
						className='title -underline'
						sx={infoTitle}
					>
						{title}
					</Typography>
				</Box>
			</Box>
		</Link>
	);
}
export default ProjectGridItem;
