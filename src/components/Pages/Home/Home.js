import React, { useRef } from "react";
import Section from "../../Containers/Section";
import About from "./components/About";
import FeaturedWork from "./components/FeaturedWork";
import Hero from "./components/Hero/Hero";
import How from "./components/How";

export const pages = {
	home: {
		sections: [
			{
				id: 1,
				name: "hero",
				page: "home",
				backgroundColor: "light",
			},
			{
				id: 2,
				name: "about",
				page: "home",
				backgroundColor: "dark",
			},
			{
				id: 3,
				name: "how",
				page: "home",
				backgroundColor: "light",
			},
			// {
			// 	id: 4,
			// 	name: "featuredWork",
			// 	page: "home",
			// 	backgroundColor: "light",
			// },
		],
	},
	projects: {
		sections: [
			{
				id: 1,
				name: "hero",
				page: "projects",
				backgroundColor: "dark",
				height: "auto"
			},
			{
				id: 2,
				name: "projects",
				page: "projects",
				backgroundColor: "dark",
				height: "auto"
			},
		],
	},
};

function Home(props) {
	const { addToRefs } = props;
	const scrollRef = useRef(null);

	const innerComponents = {
		hero: Hero,
		about: About,
		how: How,
		// featuredWork: FeaturedWork,
	};

	return (
		<>
			{pages.home.sections.map(section => {
				return (
					<Section
						key={section.id}
						id={section.id}
						page={section.page}
						noGutter={section.id === 1}
						bg={section.backgroundColor}
					>
						{React.createElement(innerComponents[section.name], {
							key: section.id,
						})}
					</Section>
				);
			})}
		</>
	);
}

export default Home;
