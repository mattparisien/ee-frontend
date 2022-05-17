import React, { useMemo } from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import { Typography, Box } from "@mui/material";
import { DrawnLogo } from "../../Vector/Svg";

function Hero({ pageHeading }) {
	const words = useMemo(() => {
		return pageHeading && pageHeading.split(" ");
	}, [pageHeading]);

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

	const containerStyles = theme => ({
		display: "flex",
		flexDirection: "column",
		position: "relative",
		maxWidth: "none !important",
		justifyContent: "space-between",
		padding: "3rem 0",
		height: "calc(100vh - 75px)",

		".word": {
			fontFamily: "Kobe Bold",
		},
		".word:nth-of-type(2)": {
			textAlign: "right",
		},
		[theme.breakpoints.up("md")]: {
			".word": {
				fontSize: "8rem",
				lineHeight: "8rem",
			},
		},
		[theme.breakpoints.up("lg")]: {
			".word": {
				fontSize: "10rem",
				lineHeight: "10rem",
			},
		},

		[theme.breakpoints.down("md")]: {
			justifyContent: "center",
			alignItems: "center",
			height: "80vw",
			".word": {
				textAlign: "center",
				fontSize: "22vw",
				lineHeight: "22vw",
			},
		},
	});

	return (
		<Section data-theme='light' classes='o-hero ' noGutter>
			<ContainerFluid>
				<div className='content-wrapper h-[80vh] max-h-[600px] flex flex-col justify-between py-3 relative'>
					<Typography className='word'>Social</Typography>
					<Typography className='word'>Impact</Typography>
					<Typography className='word'>Agency</Typography>
					<Box className='o-hero_logo' sx={logo}>
						<div className='inner -relative -stretchX -stretchY'>
							<DrawnLogo color='dark' />
							<div className='revealer'></div>
						</div>
					</Box>
				</div>
			</ContainerFluid>
		</Section>
	);
}

export default Hero;
