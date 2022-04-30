import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";
import Link from "../../../Link/Link";
import Media from "../../../Media/Media";
import Fade from "../../../HOC/Fade";

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
		a: {
			zIndex: 99999,
		},
		margin: margin,
		width: width,
		height: height,
		"@media (hover: hover)": {
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
			"&:hover .highlight": {
				transform: "scale(1) rotate(30deg)",
			},
		},

		position: "relative",

		[theme.breakpoints.down("sm")]: {
			width: "100%",
			height: `calc(((100vw - 2rem) * 0.5625) + 1rem)`,
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

	const slug = useMemo(() => {
		const slug = title && title.toLowerCase().split(" ").join("-");

		return slug;
	}, [title]);

	return (
		<Link
			href={`/projects/${slug}`}
			isRouterLink
			classes='-hover-underline -stretchX -stretchY -block'
		>
			<Box sx={item}>
				<Box className='item-inner' sx={{ height: "100%" }}>
					<Media
						overlayColor={color}
						items={[
							{
								media_type: "image",
								url: image.url,
								alt: image.alt,
							},
						]}
					/>
					{/* <Box component='img' src={image.url} alt={image.alt}></Box> */}
					{/* <Box className='item-overlay' sx={overlay} ref={overlayRef}></Box> */}

					<Fade
						wrapper={children => (
							<Box className='item-info' sx={itemInfo} pt={2}>
								{children}
							</Box>
						)}
					>
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
					</Fade>
				</Box>
			</Box>
		</Link>
	);
}
export default ProjectGridItem;
