import { useQuery } from "@apollo/client";
import gsap from "gsap";
import IntertiaPLugin from "gsap/InertiaPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useContext, useEffect, useState } from "react";
import STATICHOME from "../../../api/graphql/queries/static/GetStaticHome";
import { GlobalContext } from "../../../context/Context";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import QuoteSwiper from "../../QuoteSwiper/QuoteSwiper";
import About from "./Parts/About";
import Hero from "./Parts/Hero";
import Steps from "./Parts/Steps/Steps";
import Work from "./Parts/Work";

function Home({ pageHeading }) {
	gsap.registerPlugin(IntertiaPLugin, ScrollTrigger);

	const { loading, error, data } = useQuery(STATICHOME, {
		variables: {
			projectLimit: 1,
		},
	});

	const { setLoading } = useContext(GlobalContext);

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
				featuredWork: [...data.projects.data.slice(0, 4)]
					.sort(
						(a, b) =>
							new Date(b.attributes.Date).getTime() -
							new Date(a.attributes.Date).getTime()
					)
					.map(project => ({
						id: project.id,
						title: project.attributes.Title,
						subtitle: project.attributes.Subtitle,
						image: {
							src: {
								lowRes: project.attributes.FeatureImage.data.attributes.url,
								highRes: project.attributes.FeatureImage.data.attributes.url,
							},
							alt: project.attributes.FeatureImage.data.attributes
								.alternativeText,
							caption: project.attributes.FeatureImage.data.attributes.caption,
						},
					})),
			}));

			setLoading(false);
		}

		return () => setLoading(true);
	}, [data, loading]);

	return (
		<>
			<Hero pageHeading={pageHeading} />
			<About aboutText={staticData.about} />
			<Steps steps={staticData.steps} />
			<Work projects={staticData.featuredWork} />
			<Section>
				<Container>
					<QuoteSwiper slides={staticData.testimonials} />
				</Container>
			</Section>
		</>
	);
}

export default Home;
