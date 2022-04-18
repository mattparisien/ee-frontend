import { useQuery } from "@apollo/client";
import { useMediaQuery } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import SINGLEPROJECT from "../../../api/graphql/queries/GetSingleProject";
import { shuffleColors } from "../../../helpers/shuffleColors";
import Block from "./components/blocks/Block";
import Next from "./Next";

function SingleProjectPage({ location, transitioning, toggleTransitioning }) {
	// const data = useContext(DataContext);
	const [param, setParam] = useState(null);
	const [info, setInfo] = useState(null);
	const textWrapper = useRef(null);
	const heroImage = useRef(null);

	const mobile = useMediaQuery("(max-width: 600px)");

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
	}, [location, param, info]);

	const { loading, error, data } = useQuery(SINGLEPROJECT, {
		variables: { id: param },
	});

	return (
		<>
			<Helmet>
				<title>
					{`${info && info[0].title} - ${info && info[0].subtitle}`}{" "}
				</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='o-page o-single-project'>
				{data && (
					<Block
						variant='hero'
						title={data.project.data.attributes.Title}
						subtitle={data.project.data.attributes.Subtitle}
						image={{
							url: data.project.data.attributes.FeatureImage.data.attributes
								.url,
							alt: data.project.data.attributes.FeatureImage.data.attributes
								.alternativeText,
						}}
					/>
				)}

				<Next color={accentColor[1]} currentProjectId={param} />
			</div>
		</>
	);
}

export default SingleProjectPage;
