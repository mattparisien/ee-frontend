import { useMediaQuery } from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useMemo } from "react";
import Section from "../../Containers/Section";
import Slider from "../../Slider/Slider";


function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);
	const mobile = useMediaQuery("(max-width: 600px)");

	const featuredProjects = useMemo(() => {
		return projects && projects.filter(project => project.FeaturedPost);
	}, [projects]);

	return (
		<Section classes='o-work ' data-theme='light'>
			
			<Slider items={projects} />
		</Section>
	);
}

export default Work;
