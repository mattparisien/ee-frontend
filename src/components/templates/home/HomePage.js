import React, { useEffect } from "react";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Work from "./components/Work/Work";
import { GlobalContext } from "../../../lib/context";

function HomePage({ about, steps, projects }) {
	return (
		<div className='HomePage'>
			<Hero />
			<About aboutText={about && about} />
			<Steps steps={steps} />
			<Work projects={projects} />
		</div>
	);
}

export default HomePage;
