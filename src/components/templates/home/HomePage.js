import React from "react";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";

import Work from "./components/Work/Work";
import Testimonials from "./components/Testimonials/Testimonials";

function HomePage({ about, steps, projects, testimonials }) {
	return (
		<div className='HomePage'>
			<Hero />
			<About aboutText={about && about} />
			<Steps steps={steps} />
			<Work projects={projects} />
			<Testimonials items={testimonials} />
		</div>
	);
}

export default React.memo(HomePage);
