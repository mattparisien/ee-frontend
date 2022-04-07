import React, { useMemo } from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import { Typography, Box } from "@mui/material";
import { DrawnLogo } from "../../Vector/Svg";

function Hero({ pageHeading }) {
	const words = useMemo(() => {
		return pageHeading && pageHeading.split(" ");
	}, [pageHeading]);

	return (
		<Section data-theme='light' classes='o-hero ' noGutter>
			<ContainerFluid classes='-stretchX -stretchY'>
				<Box className='o-hero_inner -relative -stretchX -stretchY'>
					<Typography variant='h1' className='o-hero_word'>
						{words && words[0]}
					</Typography>
					<Typography
						variant='h1'
						className='o-hero_word'
						sx={{ textAlign: "right" }}
					>
						{words && words[1]}
					</Typography>
					<Typography variant='h1' className='o-hero_word'>
						{words && words[2]}
					</Typography>
					<div className='o-hero_logo'>
						<div className='inner -relative'>
							<DrawnLogo color='dark' />
							<div className='revealer'></div>
						</div>
					</div>
				</Box>
			</ContainerFluid>
		</Section>
	);
}

export default Hero;
