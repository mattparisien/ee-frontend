import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React from "react";
import Section from "../../Containers/Section";
import Slider from "../../Slider/Slider";
import Line from "../../Vector/Line";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);
	const mobile = useMediaQuery('(max-width: 600px)');


	return (
		<Section classes='o-work ' data-theme='light'>
			<div className='o-heading-wrapper -relative'>
				<Typography variant='h1' textAlign={"center"} mb={!mobile ? 0 : 4}>
					Featured Work
				</Typography>
				{/* <Line /> */}
			</div>
			<Slider items={projects} />
		</Section>
	);
}

export default Work;
