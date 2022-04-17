import { Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useRef } from "react";
import divideArray from "../../../helpers/divideArray";
import useScrollEvent from "../../../helpers/hooks/useScrollEvent";
import $ from "jquery";
import Image from "../../Image/Image";
import ColorBlobs from "../../Drawings/ColorBlobs";
import Reveal from "react-reveal";

function ProjectGrid2({ items, colors }) {
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
        pointerEvents: "none"
      },
      "svg": {
        transform: "scale(1.2)"
      }
    }
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
									<Item
										height={gridSchema[idx].item.height}
										width={gridSchema[idx].item.width}
										margin={gridSchema[idx].item.margin}
										color={colors[idx]}
										artist={item.Title}
										title={item.Subtitle}
										image={{
											url: item.FeatureImage.data.attributes.url,
											alt: item.FeatureImage.data.attributes.alternativeText,
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

function Item({ width, height, margin, color, image, title, artist }) {
	const ref = useRef(null);
	const overlayRef = useRef(null);
	const windowHeight = useRef(window.innerHeight);

	const animateFrame = (item, scrollTop, top) => {};

	const animateOverlayOpacity = (overlay, top) => {
		const offset = windowHeight.current - top;
		const opacityValue = 1 - offset / (windowHeight.current / 2);
		overlay.style.opacity = opacityValue;
	};

	const handleScroll = () => {
		const itemTop = ref.current.getBoundingClientRect().top;

		if (itemTop < windowHeight.current && itemTop > windowHeight.current / 2) {
			animateFrame(ref.current, itemTop, $(window).scrollTop());
		}

		if (itemTop + 100 < windowHeight.current) {
			animateOverlayOpacity(overlayRef.current, itemTop);
		}
	};

	const hello = useScrollEvent(handleScroll);

	const item = theme => ({
		margin: margin,
		width: width,
		height: height,

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

	const overlay = {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		backgroundColor: color,
	};

	const itemInfo = {
		top: 0,
		left: 0,

		width: "100%",
		display: "flex",
		textTransform: "uppercase",
		justifyContent: "space-between",
		"*": {
			fontFamily: "Kobe",
		},
	};

	const infoTitle = theme => ({
		display: "flex",
		alignItems: "center",
		fontFamily: "Kobe",
		fontSize: "1rem",
		lineHeight: "1rem",
		position: "relative",
		"&::after": {
			backgroundColor: "black",
			bottom: 0,
			transformOrigin: "left",
			transition: "all 1s cubic-bezier(1.000, 0.000, 0.000, 1.000)",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "1.2rem",
			lineHeight: "1.2rem",
		},
		[theme.breakpoints.up("sm")]: {
			fontSize: "0.8rem",
			lineHeight: "0.8rem",
		},
	});

	return (
		<Box sx={item} ref={ref} className='item -hover-underline'>
			<Box className='item-inner' sx={{ height: "100%" }}>
				<Image src={image.url} alt={image.alt} width={"100%"} height={"100%"} />
				{/* <Box component='img' src={image.url} alt={image.alt}></Box> */}
				<Box className='item-overlay' sx={overlay} ref={overlayRef}></Box>
				<Box className='item-info' sx={itemInfo} pt={1}>
					<Typography variant='h6' className='artist -underline' sx={infoTitle}>
						{artist}
					</Typography>

					<Typography variant='h6' className='title' sx={infoTitle}>
						{title}
					</Typography>
				</Box>
			</Box>
			<Highlight color={color} />
		</Box>
	);
}

function Highlight({ color }) {
	const highlight = theme => ({
		width: "2rem",
		position: "absolute",
		transform: "scale(0)",
		transition: "all 1s cubic-bezier(1.000, 0.000, 0.000, 1.000)",
		top: "-5%",
		left: "-5%",
		svg: {
			width: "100%",
			fill: color,
		},
		[theme.breakpoints.up("md")]: {
			width: "4rem",
			top: "-5.5%",
			left: "-5.9%",
		},
	});

	return (
		<Box className='highlight' sx={highlight}>
			{" "}
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 71.33 73.94'>
				<path d='M71.02 33.39c-.13-.89-.28-2.03-.54-3.28-.1-.63-.27-1.28-.47-1.93-.19-.65-.38-1.32-.57-1.98-.5-1.28-.96-2.55-1.53-3.59-.59-1.03-1.1-1.92-1.6-2.47-.33-1.11-1.11-1.91-1.43-3.02-.42-.38-.83-.7-1.18-1.09-.35-.39-.64-.86-.92-1.5-.93-.58-1.81-1.39-2.7-2.27-.41-.44-.84-.87-1.27-1.28-.65-.66-1.31-1.31-1.99-1.91-.75-.6-1.58-1.17-2.41-1.74l-.87-.5a37.233 37.233 0 0 0-5.65-3c-.45-.24-.88-.5-1.29-.77-.71-.14-1.44-.31-2.18-.5a37.59 37.59 0 0 0-9.67-1.7h-.02c.06-.27-.71-.34-.54-.82-2.62-.1-5.12.1-7.63.66-2.45.55-5.03 1.36-7.56 2.8-.23-.07-.56-.04-.79-.11-2.47 1.42-5.35 3.61-7.83 6.34-2.51 2.71-4.59 5.91-6.13 8.84-.79 1.54-1.65 3.09-2.29 4.89-.67 1.85-1.19 4.03-1.49 6.27-.31 2.22-.42 4.51-.47 6.59-.05 2.83.14 6.28.92 9.55.37 1.64.86 3.22 1.44 4.67.57 1.43 1.17 2.69 1.75 3.74 1.44 2.62 3.05 4.59 4.59 6.4 3.18 3.75 7.08 6.66 11.17 8.81a41.9 41.9 0 0 0 12.76 4.18c.58-.03 3.37.37 5.7.25 3.06-.13 6.14-.78 8.8-1.77 2.67-.98 4.91-2.29 6.56-3.45 2.27-1.61 3.74-2.68 5.09-3 .84-.88 1.63-1.51 2.42-2.04.75-.59 1.51-1.08 2.19-1.74 1.71-1.73 3.09-4.07 5.15-7.73.75-2.95 1.43-6.22 1.71-9.63.62-1.57.94-3.76 1.05-5.85.06-2.09-.11-4.07-.3-5.32ZM16.58 6.92c.31-.24.63-.47.96-.7-.32.23-.64.46-.96.7Zm1.67-1.17c.22-.14.43-.28.65-.41-.22.13-.43.27-.65.41Z' />
			</svg>
		</Box>
	);
}

export default ProjectGrid2;
