import React, { useMemo } from "react";
import Section from "../../../Containers/Section";
import Container from "../../../Containers/ContainerFluid";
import { Typography, Box } from "@mui/material";
import SplitText from "../../../HOC/SplitText";
import Scale from "../../../HOC/Scale";
import { DrawnLogo } from "../../../Vector/Svg";

function Hero({ pageHeading }) {
	const words = useMemo(() => {
		return pageHeading && pageHeading.split(" ");
	}, [pageHeading]);

	const logo = theme => ({
		width: "20vw",
		height: "20vw",
		maxHeight: "300px",
		overflow: "visible",
		position: "absolute",
		top: "50%",
		left: "50%",
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
			// width: "90vw",
			height: "40vw",
			width: "40vw",
			position: "static",
			transform: "translateX(-5%) translateY(0)",
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
				".nose, .ear ": {
					display: "none",
				},
			},
		},
	});

	const containerStyles = theme => ({
		display: "flex",
		flexDirection: "column",
		position: "relative",
		justifyContent: "space-between",

		paddingBottom: theme.spacing(10),
		"@media (orientation: landscape)": {
			height: "calc(100vh - 100px)",
		},
		"@media (orientation: portrait)": {
			height: "calc(65vw - 100px)",
		},

		".word": {
			fontFamily: "Kobe Bold",
			display: "none",
		},
		".word:nth-of-type(2)": {
			textAlign: "right",
		},

		[theme.breakpoints.up("md")]: {
			".word": {
				display: "block !important",
				fontSize: "8rem",
				lineHeight: "8rem",
			},
		},
		[theme.breakpoints.up("lg")]: {
			".word": {
				fontSize: "9rem",
				lineHeight: "9rem",
			},
		},

		[theme.breakpoints.down("md")]: {
			justifyContent: "space-evenly",
			alignItems: "center",
			height: "80vw",
			".word": {
				textAlign: "center",
				fontSize: "22vw",
				lineHeight: "22vw",
			},
		},
	});

	const wordMap = ["Social", "Impact", "Agency"];

	return (
		<Section data-theme='light' classes='o-hero ' noGutter>
			<Container classes='-stretchX -stretchY' sx={containerStyles}>
				{wordMap.map((word, i) => (
					<Typography key={i} className='word'>
						<SplitText enterDelay={3.4}>{word}</SplitText>
					</Typography>
				))}

				<Box className='logo' sx={logo}>
					<Scale enterDelay={3.4}>
						<DrawnLogo />
					</Scale>
				</Box>
				<Typography
					variant='h2'
					sx={theme => ({
						[theme.breakpoints.up("md")]: {
							display: "none",
						},
					})}
				>
					Social Impact Agency
				</Typography>
			</Container>
		</Section>
	);
}

export default Hero;
