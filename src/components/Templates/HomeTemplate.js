import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import gsap from "gsap";
import IntertiaPLugin from "gsap/InertiaPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useEffect, useState } from "react";
import STATICHOME from "../../api/graphql/queries/static/GetStaticHome";
import Container from "../Containers/ContainerFluid";
import Section from "../Containers/Section";
import Stories from "../Stories/Stories";
import About from "./Parts/About";
import Hero from "./Parts/Hero";
import How from "./Parts/Steps/How";
import Work from "./Parts/Work";

function HomeTemplate({ pageHeading, location }) {
	gsap.registerPlugin(IntertiaPLugin, ScrollTrigger);

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
		if (!loading && data) {
			setStaticData(() => ({
				about: data.about.data.attributes.Body1,
				steps: [...data.steps.data]
					.sort((a, b) => a.id - b.id)
					.map(step => ({
						title: step.attributes.Title,
						body: step.attributes.Body,
						id: step.id,
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
		<>
			<Hero pageHeading={pageHeading} />
			<About aboutText={staticData.about} />
			<How steps={staticData.steps} />

			<Work projects={staticData.featuredWork} />

			<Section
				classes='o-stories -flex -align-center -justify-center'
				data-theme='light'
			>
				<Container>
					<Box pt={10} pb={10}>
						<Stories slides={staticData.testimonials} withFrame />
					</Box>
				</Container>
			</Section>
		</>
	);
}

export default HomeTemplate;
