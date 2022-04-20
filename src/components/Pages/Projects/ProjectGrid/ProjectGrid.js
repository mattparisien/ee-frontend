import { Box } from "@mui/material";
import React, { useMemo } from "react";
import divideArray from "../../../../helpers/divideArray";
import ProjectGridItem from "./ProjectGridItem";

function ProjectGrid({ items, colors }) {
	const gutter = "5vw";

	const globalContainer = theme => ({
		".grid-container": {
			"&:not(:first-of-type)": {
				marginTop: "36%",
				[theme.breakpoints.down("sm")]: {
					marginTop: 0,
				},
			},
		},
	});

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
				align: "flex-end",
				gutter: gutter,
			},
			item: {
				height: "140%",
				width: "27%",
				margin: "0 0 0 auto",
			},
		},
		{
			row: {
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
				align: null,
				gutter: null,
			},
			item: {
				height: "220%",
				width: "47%",
				margin: "0 0 0 auto",
			},
		},
		{
			row: {
				align: "flex-start",
				gutter: null,
			},
			item: {
				height: "140%",
				width: "27%",
				margin: "20% 0 0 0",
			},
		},
		{
			row: {
				align: "flex-start",
				gutter: null,
			},
			item: {
				height: "100%",
				width: "38%",
				margin: "20% 0 0 0",
				margin: "30% 0 0 auto",
			},
		},
	];

	const arrays = useMemo(() => {
		if (items) {
			const dividedArrays = divideArray([...items, ...items, ...items], 6);

			return dividedArrays;
		}
	}, [items]);

	return (
		<Box className='projects' sx={globalContainer}>
			{arrays
				? arrays.map((array, idx) => (
						<Box className='grid-container' sx={gridContainer}>
							{array.map((item, idx) => (
								<Row
									key={idx}
									align={gridSchema[idx].row.align}
									gutter={gridSchema[idx].row.gutter}
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
											url: item.image.url,
											alt: item.image.alt,
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

function Row({ children, align, gutter }) {
	const row = theme => ({
		width: "100%",
		height: "24vw",
		display: "flex",
		position: "sticky",
		alignItems: align,
		marginBottom: gutter,
		[theme.breakpoints.down("sm")]: {
			height: "65vw",
			marginBottom: "4rem",
		},
	});

	return <Box sx={row}>{children}</Box>;
}

export default ProjectGrid;
