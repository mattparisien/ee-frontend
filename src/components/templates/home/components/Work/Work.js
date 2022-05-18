import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

import React, { useMemo } from "react";
import TitleBlock from "../../../../Blocks/TitleBlock";
import Container from "../../../../Containers/ContainerFluid";
import Section from "../../../../Containers/Section";
import HoverFrame from "../../../../HOC/HoverFrame";
import Image from "../../../../Media/Image";
import MyImage from "../../../../Media/MyImage";
import convertToSlug from "../../../../../helpers/convertToSlug";
import Link from "next/Link";

function Work({ projects }) {
	const theme = useTheme();
	const matches = useMediaQuery(
		`(max-width: ${theme.breakpoints.values.md}px)`
	);

	return (
		<>
			<TitleBlock
				data={{
					title: "Our Work",
				}}
			/>
			<Section data-theme='light'>
				<Container>
					<div className='content-wrapper flex flex-col md:flex-row items-center justify-between'>
						{projects &&
							projects.map((project, i) => (
								<div className='mb-20'>
									<Link href={`/projects/${convertToSlug(project.Subtitle)}`}>
										<a
											className='block h-full'
											href={`/projects/${convertToSlug(project.Subtitle)}`}
										>
											<MyImage
												src={project.FeatureImage.data.attributes.url}
												alt={
													project.FeatureImage.data.attributes.alternativeText
												}
												ratio='portrait'
												objectFit='cover'
												width={200}
												grayscale
											/>
											<Box
												className='item-info'
												display='flex'
												flexDirection={matches ? "row" : "column"}
												justifyContent='space-between'
												sx={{ width: "100%" }}
												pt={2}
											>
												<Typography variant={matches ? "body2" : "body3"}>
													{project.Title}
												</Typography>
												<Typography variant={matches ? "body2" : "body3"}>
													{project.Subtitle}
												</Typography>
											</Box>
										</a>
									</Link>
								</div>
							))}
						{/* <FeaturedGrid rows={rows} /> */}
					</div>
				</Container>
			</Section>
		</>
	);
}

function FeaturedGrid({ rows }) {
	const groups = useMemo(() => {
		if (rows) {
			return rows.map((row, i) => {
				if (i === 0) {
					const group = [...row.slice(1, 3)];

					return [row.slice(0, 1), group];
				} else {
					return row;
				}
			});
		}
	}, [rows]);

	const gap = "0.5rem";

	const gridSpacing = {
		".Row:nth-of-type(odd)": {
			marginBottom: gap,
		},
		".Row:nth-child(1) .row-group:nth-child(1)": {
			paddingRight: gap,
		},
	};

	const grid = {
		width: "100%",
		height: "100%",
		...gridSpacing,
		".FeaturedGridItem": {
			width: "100%",
			height: "100%",
			".Image": {
				width: "100%",
				height: "100%",
				filter: "grayscale(1)",
				img: {
					objectFit: "cover",
					objectPosition: "40% 40%",
					width: "100%",
					height: "100%",
				},
			},
		},
		".Row:first-child": {
			height: "50vw",
			".row-group": {
				display: "inline-block",
				"&:first-child": {
					height: "50vw",
					width: "50%",
					".FeaturedGridItem": {
						width: "100%",
						height: "100%",
					},
				},
				"&:nth-child(2)": {
					display: "inline-block",
					height: "50vw",
					width: "calc(50% - 1px)",
					".FeaturedGridItem": {
						width: "100%",
						height: "50%",
						"&:first-child": {
							paddingBottom: gap,
						},
					},
				},
			},
		},
		".Row:nth-child(2)": {
			"&, .row-group": {
				width: "100%",
				height: "40vw",
			},
		},
	};

	return (
		<Box className='FeaturedGrid' sx={grid}>
			{groups && groups.map((group, i) => <Row group={group} key={i} />)}
		</Box>
	);
}

function Row({ group }) {
	const rowGroup = {
		display: "inline-block",
	};

	return (
		<Box className='Row'>
			{group &&
				group.map((group, i) => (
					<Box className='row-group' sx={rowGroup}>
						{Array.isArray(group) ? (
							group.map((item, i) => (
								<FeaturedGridItem
									item={item}
									key={i}
									id={i}
									mediaAspect={i === 0 ? "square" : "landscape"}
								/>
							))
						) : (
							<FeaturedGridItem
								item={group}
								key={i}
								id={i}
								mediaAspect={"landscape"}
							/>
						)}
					</Box>
				))}
		</Box>
	);
}

function FeaturedGridItem({ item, mediaAspect }) {
	const itemStyles = {
		overflow: "hidden",
	};

	const info = theme => ({
		position: "absolute",
		bottom: 0,
		left: 0,
		color: theme.palette.primary.light,
	});

	return (
		<Box className='FeaturedGridItem -relative' sx={itemStyles}>
			<Link
				isRouterLink
				href={`/projects/${item.subtitle.toLowerCase().split(" ").join("-")}`}
			>
				<Image
					lowResSrc={item.image.src.lowRes}
					highResSrc={item.image.src.highRes}
				/>
				<Box className='item-info' sx={info} p={4}>
					<Typography variant='h6' textTransform='uppercase' fontWeight='600'>
						{item.title}
					</Typography>
					<Typography variant='h4'>{item.subtitle}</Typography>
				</Box>
			</Link>
		</Box>
	);
}

// function Item({ src, alt, title, subtitle }) {
// 	const itemStyles = {
// 		position: "relative",
// 		"&::after": {
// 			position: "absolute",
// 			top: 0,
// 			left: 0,
// 			width: "100%",
// 			height: "100%",
// 			backgroundColor: "black",
// 			opacity: 0.4,
// 			content: "''",
// 		},
// 	};

// 	const info = theme => ({
// 		color: theme.palette.primary.light,
// 		position: "absolute",
// 		bottom: 0,
// 		left: 0,
// 		zIndex: 999,
// 	});

// 	return (
// 		<ImageListItem sx={itemStyles}>
// 			<img src={src} alt={alt} />
// 			<Box className='info' sx={info} p={3}>
// 				<Typography variant='body3' pb={4}>
// 					{subtitle}
// 				</Typography>
// 				<Typography variant='h4' fontWeight='600'>
// 					{title}
// 				</Typography>
// 			</Box>
// 		</ImageListItem>
// 	);
// }

export default Work;
