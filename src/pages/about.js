import React from "react";
import AboutPage from "../components/templates/about/AboutPage";
import { getAbout } from "../lib/getAbout";
import Seo from "../components/Seo/Seo";

function about({ about }) {

	console.log(about.seo)

	return (
		<>
			<Seo {...about.seo} />
			<AboutPage {...about} />
		</>
	);
}

export async function getStaticProps() {
	const about = await getAbout();

	console.log(about);

	return {
		props: {
			about: { ...about },
		},
	};
}

export default about;
