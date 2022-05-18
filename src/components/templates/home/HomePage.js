import React, { useEffect } from "react";
import useGlobalStore from "../../../store/globalStore";
import useLocalStore from "../../../store/localStore";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Work from "./components/Work/Work";

function HomePage() {
	const { getHome, home } = useLocalStore(state => ({
		home: state.home,
		getHome: state.getHome,
	}));

	const { projects, getProjects } = useGlobalStore(state => ({
		projects: state.projects,
		getProjects: state.getProjects,
	}));

	useEffect(() => {
		getHome();
		getProjects();
	}, []);

	return (
		<div className='HomePage'>
			<Hero />
			<About aboutText={home.about && home.about} />
			<Steps steps={home.steps} />
			<Work projects={projects} />
		</div>
	);
}

export default HomePage;
