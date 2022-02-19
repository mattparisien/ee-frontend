import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import useResize from "../../../helpers/hooks/useResize";
import { useTheme } from "styled-components";
import useScroll from "../../../helpers/hooks/useScrollDir";
import Hero from "./components/Hero";
import About from "./components/About";
import How from "./components/How";
import Section from "../../Containers/Section";

import FeaturedWork from "./components/FeaturedWork";

function Home(props) {
	const { addToRefs } = props;
	const scrollRef = useRef(null);

	const pages = {
		home: {
			sections: [
				{
					id: 1,
					name: "hero",
					page: "home",
					backgroundColor: "light"
				},
				{
					id: 2,
					name: "about",
					page: "home",
					backgroundColor: "dark"
				},
				{
					id: 3,
					name: "how",
					page: "home",
					backgroundColor: "light"
				},
				{
					id: 4,
					name: "featuredWork",
					page: "home",
					backgroundColor: "light"
				},
			],
		},
	};

	const innerComponents = {
		hero: Hero,
		about: About,
		how: How,
		featuredWork: FeaturedWork,
	};

	//Featured work titles

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
