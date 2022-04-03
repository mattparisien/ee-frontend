import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React from "react";
import Section from "../../Containers/Section";
import Slider from "../../Slider/Slider";

function Work({ projects }) {
	gsap.registerPlugin(ScrollTrigger);

	return (
		<Section classes='o-work -padding-huge' data-theme='light'>
			<h1 className='o-h1 -text-center -padding-bottom-lg -split -fadeUpChars'>
				Featured Work
			</h1>
			<Slider items={projects} />
		</Section>
	);
}


export default Work;
