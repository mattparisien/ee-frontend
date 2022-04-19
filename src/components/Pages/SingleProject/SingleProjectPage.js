import { useQuery } from "@apollo/client";
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import SINGLEPROJECT from "../../../api/graphql/queries/GetSingleProject";
import { shuffleColors } from "../../../helpers/shuffleColors";
import Block from "./components/blocks/Block";
import Next from "./Next";

function SingleProjectPage({ location, transitioning, toggleTransitioning }) {
	const [param, setParam] = useState(null);
	const [project, setProject] = useState(null);

	const accentColor = useMemo(() => shuffleColors(), []);

	useEffect(() => {
		//Find query param
		if (!param) {
			let param = "";
			let counter = 0;
			for (let i = 0; i < location.pathname.length; i++) {
				if (location.pathname[i] === "/") {
					counter += 1;

					if (counter > 1) {
						param = location.pathname.slice(i + 1, location.pathname.length);
					}
				}
			}
			setParam(param);
		}
	}, [location, param]);

	const { loading, error, data } = useQuery(SINGLEPROJECT, {
		variables: { id: param },
	});

	useEffect(() => {
		if (data && !loading) {
			console.log(data)
			setProject(() => ({
				id: data.project.data.id,
				title: data.project.data.attributes.Title,
				subtitle: data.project.data.attributes.Subtitle,
				subtitle: data.project.data.attributes.Subtitle,
				featureImage: {
					url: data.project.data.attributes.FeatureImage.data.attributes.url,
					alt: data.project.data.attributes.FeatureImage.data.attributes
						.alternativeText,
				},
			}));
		}
	}, [data, loading]);

	return (
		<>
			<Helmet>
				<title>
					{project
						? `${project.title} - ${project.subtitle}`
						: "Eyes & Ears Agency"}
				</title>
			</Helmet>
			<div className='o-page o-single-project'>
				{project && (
					<Block
						variant='hero'
						title={project.title}
						subtitle={project.subtitle}
						image={{
							url: project.featureImage.url,
							alt: project.featureImage.alt,
						}}
					/>
				)}

				<Next color={accentColor[1]} currentProjectId={param} />
			</div>
		</>
	);
}

export default SingleProjectPage;
