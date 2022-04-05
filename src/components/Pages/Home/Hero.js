import React from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import { Typography } from "@mui/material";
import { DrawnLogo } from "../../Vector/Svg";

function Hero() {
	return (
		<Section data-theme='light' classes='o-hero -padding-bottom-lg'>
			<ContainerFluid classes='-stretchX -stretchY'>
				<div className='o-hero_inner -relative -stretchX -stretchY'>
					<Typography variant='h1' className='o-hero_word'>
						Social
					</Typography>
					<Typography
						variant='h1'
						className='o-hero_word'
						sx={{ textAlign: "right" }}
					>
						Impact
					</Typography>
					<Typography variant='h1' className='o-hero_word'>
						Agency
					</Typography>
					<div className='o-hero_logo'>
						<div className='inner -relative'>
							<DrawnLogo color='dark' />
							<div className='revealer'></div>
						</div>
					</div>
				</div>
			</ContainerFluid>
		</Section>
	);
}

export default Hero;
