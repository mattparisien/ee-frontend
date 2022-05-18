import React, { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Steps from "./components/Steps/Steps";
import useLocalStore from "../../../store/localStore";

function HomePage() {
	const { getHome, home } = useLocalStore(state => ({
		home: state.home,
		getHome: state.getHome,
	}));

	useEffect(() => {
		getHome();
	}, []);

	return (
		<div className='HomePage'>
			<Hero />
			<About aboutText={home.about && home.about} />
			<Steps steps={home.steps} />
		</div>
	);
}

export default HomePage;
