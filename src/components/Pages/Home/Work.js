import { useMediaQuery } from "@mui/material";
import React, { useMemo } from "react";
import Section from "../../Containers/Section";
import SectionHeading from "../../Headings/SectionHeading";
import Slider from "../../Slider/Slider";

function Work({ projects }) {
	const mobile = useMediaQuery("(max-width: 600px)");

	const featuredProjects = useMemo(() => {
		return projects && projects.filter(project => project);
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
