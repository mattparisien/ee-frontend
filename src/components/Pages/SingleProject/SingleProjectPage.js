import { useQuery } from "@apollo/client";
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import SINGLEPROJECT from "../../../api/graphql/queries/GetSingleProject";
import { shuffleColors } from "../../../helpers/shuffleColors";
import Page from "../../Containers/Page";
import Block from "./Blocks/Block";
import formatBlockData from "./helpers/formatBlockData";
import Next from "./Next";

function SingleProjectPage({ location }) {
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
		variables: { id: param ? param : 0 },
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
				blocks: formatBlockData(data.project.data.attributes.Choose),
			}));
		}
	}, [data, loading]);

	return (
		<Page name='singleProject' location={location}>
			<Helmet>
				<title>
					{project
						? `${project.title} - ${project.subtitle}`
						: "Eyes & Ears Agency"}
				</title>
			</Helmet>

			{project && (
				<Block
					name='HeroBlock'
					data={{
						title: project.title,
						subtitle: project.subtitle,
						image: {
							url: project.featureImage.url,
							alt: project.featureImage.alt,
						},
					}}
				/>
			)}

			{project &&
				project.blocks.map(block => (
					<Block name={block.name} id={block.id} key={block.id} data={block} />
				))}

			<Next color={accentColor[1]} currentProjectId={param} />
		</Page>
	);
}

export default SingleProjectPage;
