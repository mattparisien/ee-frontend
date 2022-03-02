import React, { useRef } from "react";
import Section from "../../Containers/Section";
import About from "./components/About";
import FeaturedWork from "./components/FeaturedWork";
import Hero from "./components/Hero/Hero";
import How from "./components/How";
import SectionLayout from "../../Containers/SectionLayout";
import About2 from "./components/About2";

export const pages = {
	home: {
		sections: [
			{
				id: 1,
				name: "hero",
				page: "home",
				backgroundColor: "light",

				height: "100vh",
			},
			{
				id: 2,
				name: "about",
				page: "home",
				backgroundColor: "dark",
			},
			{
				id: 3,
				name: "about2",
				page: "home",
				backgroundColor: "light",
				height: "60vw"
			},
			{
				id: 4,
				name: "how",
				page: "home",
				backgroundColor: "light",
			},
			// {
			// 	id: 4,
			// 	name: "featuredWork",
			// 	page: "home",
			// 	backgroundColor: "light",
			// 	minHeight: "100vh"
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
				height: "auto",
			},
			{
				id: 2,
				name: "projects",
				page: "projects",

				backgroundColor: "dark",
				height: "auto",
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
		about2: About2,
		how: How,
		// featuredWork: FeaturedWork,
	};

	return (
		<>
			{pages.home.sections.map(section => {
				return (
					<SectionLayout
						key={section.id}
						id={section.id}
						page={section.page}
						bg={section.backgroundColor}
						height={section.height}
						minHeight={section.minHeight}
					>
						{React.createElement(innerComponents[section.name], {
							key: section.id,
							height: section.height,
							headerOffset: section.headerOffset,
						})}
					</SectionLayout>
				);
			})}
		</>
	);
}

export default Home;
