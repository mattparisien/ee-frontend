import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import gsap from "gsap";
import IntertiaPLugin from "gsap/InertiaPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useContext, useEffect, useState } from "react";
import STATICHOME from "../../../api/graphql/queries/static/GetStaticHome";
import { GlobalContext } from "../../../context/Context";
import Scale from "../../HOC/Scale";
import Hero from "./Parts/Hero";
import About from "./Parts/About";
import How from "./Parts/Steps/How";
import Work from "./Parts/Work";

function Home({ pageHeading, location }) {
	gsap.registerPlugin(IntertiaPLugin, ScrollTrigger);

	// const { setTemplateLoaded  } = useContext(ViewContext);
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
					.sort((a, b) => a.Date - b.Date)
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

	console.log(staticData)

	return (
		<>
			<Hero pageHeading={pageHeading} />
			<About aboutText={staticData.about} />
			<How steps={staticData.steps} />
			<Work projects={staticData.featuredWork} />
		</>
	);
}

const QuoteSvg = props => (
	<Box className='QuoteSvg' {...props}>
		<Scale>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 84.65 67.3'>
				<g
					style={{
						isolation: "isolate",
					}}
				>
					<path
						d='M20.64 67.3C6.61 67.3 0 56.56 0 43.35 0 26.02 11.98 4.14 32.63 0l.4 1.65C15.7 5.38 7.85 19.82 7.85 37.16c2.47-4.14 7.43-7.03 12.79-7.03 10.32 0 18.59 8.27 18.59 18.59s-8.27 18.57-18.59 18.57Zm45.42 0c-14.04 0-20.64-10.74-20.64-23.95C45.42 26.02 57.39 4.14 78.04 0l.4 1.65C61.09 5.38 53.26 19.82 53.26 37.17c2.47-4.14 7.43-7.03 12.79-7.03 10.32 0 18.59 8.27 18.59 18.59S76.37 67.3 66.05 67.3Z'
						style={{
							fill: "#f4e925",
							mixBlendMode: "multiply",
						}}
					/>
				</g>
			</svg>
		</Scale>
	</Box>
);

export default Home;
