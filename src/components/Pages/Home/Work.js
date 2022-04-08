import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useMemo } from "react";
import Section from "../../Containers/Section";
import Slider from "../../Slider/Slider";
import Line from "../../Vector/Line";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import SectionHeading from "../../Headings/SectionHeading";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);
	const mobile = useMediaQuery("(max-width: 600px)");

	const featuredProjects = useMemo(() => {
		return projects && projects.filter(project => project.featured);
	}, [projects]);

	return (
		<Section classes='o-work ' data-theme='light'>
			<div className='o-heading-wrapper -relative'>
				<SectionHeading
					variant='h1'
					textAlign={"center"}
					mb={!mobile ? 0 : 2}
					pb={!mobile ? 5 : 5}
					text={"	Our Work"}
				/>

				{/* <Line /> */}
			</div>
			<Slider items={featuredProjects} />
		</Section>
	);
}

export default Work;
