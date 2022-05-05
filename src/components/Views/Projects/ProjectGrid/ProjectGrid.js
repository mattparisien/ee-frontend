import { Box } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import divideArray from "../../../../helpers/divideArray";
import ProjectGridItem from "./ProjectGridItem";

function ProjectGrid({ items, colors }) {
	const gutter = "5vw";

	console.log(items, "...");

	const gridContainer = theme => ({
		position: "relative",
		".o-colorBlobs": {
			pointerEvents: "none",
			mixBlendMode: "multiply",
			"& *": {
				pointerEvents: "none",
			},
			svg: {
				transform: "scale(1.2)",
			},
		},
	});

	const gridSchema = [
		{
			row: {
				height: "22vw",
				align: null,
				gutter: null,
			},
			item: {
				height: "100%",
				width: "38%",
			},
		},
		{
			row: {
				height: "28vw",
				align: "flex-end",
				gutter: gutter,
			},
			item: {
				height: "100%",
				width: "27%",
				margin: "0 0 0 auto",
			},
		},
		{
			row: {
				height: "22vw",
				align: null,
				gutter: gutter,
			},
			item: {
				height: "100%",
				width: "38%",
				margin: null,
			},
		},
		{
			row: {
				height: "50vw",
				align: null,
				gutter: null,
			},
			item: {
				height: "100%",
				width: "47%",
				margin: "0 0 0 auto",
			},
		},
		{
			row: {
				height: "28vw",
				align: "flex-start",
				gutter: gutter,
			},
			item: {
				height: "100%",
				width: "27%",
				// margin: "20% 0 0 0",
			},
		},
		{
			row: {
				height: "22vw",
				align: "flex-start",
				gutter: gutter,
			},
			item: {
				height: "100%",
				width: "38%",
				// margin: "20% 0 0 0",
				margin: "0 0 0 auto",
			},
		},
	];

	const arrays = useMemo(() => {
		if (items) {
			const dividedArrays = divideArray([...items], 6);

			return dividedArrays;
		}
	}, [items]);

	return (
		<Box className='projects'>
			{arrays
				? arrays.map((array, i) => (
						<Box
							className='ProjectGrid grid-container'
							sx={gridContainer}
							key={i}
						>
							{array.map((item, idx) => (
								<Row
									key={idx}
									id={idx}
									align={gridSchema[idx].row.align}
									gutter={gridSchema[idx].row.gutter}
									height={gridSchema[idx].row.height}
								>
									<ProjectGridItem
										projectId={item.id}
										height={gridSchema[idx].item.height}
										width={gridSchema[idx].item.width}
										margin={gridSchema[idx].item.margin}
										color={colors[idx]}
										artist={item.title}
										title={item.subtitle}
										image={{
											src: {
												lowRes:
													item.featureImage.data.attributes.formats.thumbnail
														.url,
												highRes: item.featureImage.data.attributes.formats.large
													? item.featureImage.data.attributes.formats.large.url
													: item.featureImage.data.attributes.url,
											},
											alt: item.featureImage.data.attributes.alt,
										}}
									/>
								</Row>
							))}
							{/* <ColorBlobs /> */}
						</Box>
				  ))
				: null}
		</Box>
	);
}

function Row({ children, align, gutter, height }) {
	const row = theme => ({
		width: "100%",
		height: height,
		display: "flex",
		position: "sticky",
		alignItems: align,
		marginBottom: gutter,
		[theme.breakpoints.down("md")]: {
			height: "65vw",
			marginBottom: "2rem",
		},
	});

	return (
		<Box sx={row} className='Row '>
			{children}
		</Box>
	);
}

export default ProjectGrid;
