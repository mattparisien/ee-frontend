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
import Page from "../../Containers/Page";

function HomePage({ pageHeading, location }) {
	gsap.registerPlugin(IntertiaPLugin, ScrollTrigger);

	const scroll = useLocomotiveScroll();

	const { loading, error, data } = useQuery(STATICHOME, {
		variables: {
			projectLimit: 1,
		},
	});

	const [staticData, setStaticData] = useState({
		about: null,
		steps: null,
		stories: null,
	});

	useEffect(() => {
		console.log(loading, error, data);
		if (!loading && data) {
			console.log(data);
			setStaticData(() => ({
				about: data.about.data.attributes.Body1,
				steps: [...data.steps.data]
					.sort((a, b) => a.id - b.id)
					.map(step => ({
						title: step.attributes.Title,
						body: step.attributes.Body,
					})),
				testimonials: data.testimonials.data.map(testimonial => ({
					quote: testimonial.attributes.Quote,
					author: testimonial.attributes.Author,
				})),
				featuredWork: [...data.projects.data.slice(0, 3)]
					.sort((a, b) => a.Date - b.Date)
					.map(project => ({
						id: project.id,
						title: project.attributes.Title,
						subtitle: project.attributes.Subtitle,
						image: {
							url: project.attributes.FeatureImage.data.attributes.url,
							alt: project.attributes.FeatureImage.data.attributes
								.alternativeText,
							caption: project.attributes.FeatureImage.data.attributes.caption,
						},
					})),
			}));
		}
	}, [data, loading]);

	return (
		<Page name='home' location={location}>
			{staticData && (
				<>
					<Hero pageHeading={pageHeading} />
					<About aboutText={staticData.about} />
					<How steps={staticData.steps} />

					<Work projects={staticData.featuredWork} />

					<Section
						classes='o-stories -flex -align-center -justify-center'
						data-theme='light'
					>
						<ContainerFluid>
							<Box pt={10} pb={10}>
								<Stories slides={staticData.testimonials} withFrame />
							</Box>
						</ContainerFluid>
					</Section>
				</>
			)}
		</Page>
	);
}

export default HomePage;
