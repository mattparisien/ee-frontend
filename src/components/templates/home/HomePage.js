import React from "react";
import Carousel from "../../Carousel/Carousel";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";

function HomePage({ about, steps, projects }) {
	return (
		<div className='HomePage'>
			<Hero />
			<About aboutText={about && about} />
			<Steps steps={steps} />
			<Carousel items={projects} />
			{/* <Work projects={projects} /> */}
		</div>
	);
}

export default HomePage;
