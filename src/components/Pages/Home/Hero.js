import React, { useMemo } from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import { Typography, Box } from "@mui/material";
import { DrawnLogo } from "../../Vector/Svg";

function Hero({ pageHeading }) {
	const words = useMemo(() => {
		return pageHeading && pageHeading.split(" ");
	}, [pageHeading]);

	const word = theme => ({
		".c-char": {
			transform: "translateY(100%)",
			opacity: 0,
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: "9rem",
			lineHeight: "9rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "11vw",
			lineHeight: "11vw",
		},
		[theme.breakpoints.down("md")]: {
			fontSize: "23vw",
			lineHeight: "23vw",
		},
	});

	const word2 = theme => ({
		".c-char": {
			transform: "translateY(100%)",
			opacity: 0,
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: "9rem",
			lineHeight: "9rem",
		},
		[theme.breakpoints.up("md")]: {
			fontSize: "11vw",
			lineHeight: "11vw",
		},
		[theme.breakpoints.down("md")]: {
			alignItems: "center",
			fontSize: "23vw",
			lineHeight: "23vw",
			alignSelf: "center !important",
		},
	});

	const logo = theme => ({
		width: "20vw",
		height: "20vw",
		maxHeight: "300px",
		overflow: "visible",
		transform: "translate(-50%, -50%)",
		[theme.breakpoints.up("lg")]: {
			transform: "translate(-60%, -50%) !important",
		},
		[theme.breakpoints.up("md")]: {
			height: "20vw",
			width: "20vw",
			transform: "translate(-70%, -50%) !important",
		},
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
		".c-drawnLogo": {
			height: "100%",
			width: "100%",
			overflow: "visible",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",

			svg: {
				height: "100%",
				overflow: "visible",
			},
		},
	});

	const inner = theme => ({
		[theme.breakpoints.down("md")]: {
			alignItems: "center",
			textAlign: "center",
		},
	});

	const containerStyles = theme => ({
		[theme.breakpoints.down("sm")]: {
			marginTop: "5rem",
		},
	});

	return (
		<Section data-theme='light' classes='o-hero ' noGutter>
			<ContainerFluid classes='-stretchX -stretchY' sx={containerStyles}>
				<Box className='o-hero_inner -relative -stretchX -stretchY' sx={inner}>
					<Typography
						variant='h1'
						className='o-hero_word'
						sx={word}
						data-scroll
						data-scroll-speed={2}
					>
						{words && words[0]}
					</Typography>
					<Typography
						sx={word2}
						variant='h1'
						className='o-hero_word'
						data-scroll
						data-scroll-speed={2}
					>
						{words && words[1]}
					</Typography>
					<Typography
						variant='h1'
						className='o-hero_word'
						sx={word}
						data-scroll
						data-scroll-speed={2}
					>
						{words && words[2]}
					</Typography>
					<Box className='o-hero_logo' sx={logo}>
						<div className='inner -relative -stretchX -stretchY'>
							<DrawnLogo color='dark' />
							<div className='revealer'></div>
						</div>
					</Box>
				</Box>
			</ContainerFluid>
		</Section>
	);
}

export default Hero;
