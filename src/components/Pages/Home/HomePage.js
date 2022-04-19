import gsap from "gsap";
import IntertiaPLugin from "gsap/InertiaPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useContext, useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { DataContext } from "../../../context/Context";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Stories from "../../Stories/Stories";
import About from "./About";
import Hero from "./Hero";
import How from "./Steps/How";
import Work from "./Work";
import { Box } from "@mui/material";
import InstaPost from "../../InstaPost/InstaPost";
import STATICHOME from "../../../api/graphql/queries/static/GetStaticHome";
import { useQuery } from "@apollo/client";

function HomePage({ pageHeading }) {
	gsap.registerPlugin(IntertiaPLugin, ScrollTrigger);

	const scroll = useLocomotiveScroll();

	const { loading, error, data } = useQuery(STATICHOME);

	const [staticData, setStaticData] = useState({
		about: null,
		steps: null,
		stories: null,
	});

	useEffect(() => {
		if (!loading && data) {
			setStaticData(() => ({
				about: data.about.data.attributes.Body,
				steps: [...data.steps.data]
					.sort((a, b) => a.id - b.id)
					.map(step => ({
						title: step.attributes.Title,
						body: step.attributes.Body,
					})),
			}));
		}
	}, [data, loading]);

	return (
		<>
			<div className='o-page o-page_home'>
				{/* <Hero pageHeading={pageHeading} />
				<About aboutText={data.about && data.about.Body1} />
				<How steps={data && data.steps} />

				<Work projects={data.projects && data.projects.slice(0, 6)} />

				<Section
					classes='o-stories -flex -align-center -justify-center'
					data-theme='light'
				>
					<ContainerFluid>
						<Box pt={10} pb={10}>
							<Stories slides={data && data.testimonials} withFrame />
						</Box>
					</ContainerFluid>
				</Section> */}
			</div>
		</>
	);
}

export default HomePage;
