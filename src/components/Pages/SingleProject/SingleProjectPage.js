import {
	Box,
	Card,
	CardMedia,
	Grid,
	Typography,
	useMediaQuery,
} from "@mui/material";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import Fade from "react-reveal/Fade";
import { DataContext } from "../../../context/Context";
import divideArray from "../../../helpers/divideArray";
import { shuffleColors } from "../../../helpers/shuffleColors";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Figure from "../../Figure/Figure";
import Markdown from "../../Markdown/Markdown";
import Frame from "../../Vector/Frame";
import Next from "./Next";
import Sticky from "./Sticky";
import HeroBlock from "./components/blocks/HeroBlock";
import Block from "./components/blocks/Block";
import getBlockName from "./helpers/getBlockName";

function SingleProjectPage({ location, transitioning, toggleTransitioning }) {
	const data = useContext(DataContext);
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

		if (data && data.projects && param && !info) {
			const currentPost = data.projects.filter(x => x.id === parseInt(param));

			const nextPostIndex =
				data.projects.indexOf(
					data.projects.find(x => x.id === currentPost[0].id)
				) + 1;
			const nextPost =
				data.projects[
					nextPostIndex === data.projects.length ? 0 : nextPostIndex
				];

			setInfo({ ...currentPost, nextPost: nextPost });
		}
	}, [data, location, param, info]);

	const dynamicBlocks = useMemo(() => {
		console.log(info[0].Choose)
		if (info && info[0].Choose.length >= 1) {
			return info[0].Choose.map((block, i) => {
				console.log(block)
			});
		}
	}, [info]);

	console.log("dynamic blocks", dynamicBlocks);

	return (
		<>
			<Helmet>
				<title>
					{`${info && info[0].title} - ${info && info[0].subtitle}`}{" "}
				</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='o-page o-single-project'>
				<Block
					variant='hero'
					title={info && info[0].Title}
					subtitle={info && info[0].Subtitle}
					image={{
						url: info && info[0].FeatureImage.data.attributes.url,
						alt: info && info[0].FeatureImage.data.attributes.alternativeText,
					}}
				/>

				<Next color={accentColor[1]} nextPost={info && info.nextPost} />
			</div>
		</>
	);
}

export default SingleProjectPage;
