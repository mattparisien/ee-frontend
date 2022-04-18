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
import HeroBlock from "./blocks/HeroBlock";

function SingleProjectPage({ location, transitioning, toggleTransitioning }) {
	const data = useContext(DataContext);
	const [param, setParam] = useState(null);
	const [info, setInfo] = useState(null);
	const textWrapper = useRef(null);
	const heroImage = useRef(null);
	// const revealer = useRef(null);
	// const tl = useRef(gsap.timeline());
	const mobile = useMediaQuery("(max-width: 600px)");

	const accentColor = useMemo(() => shuffleColors(), []);

	console.log(info);

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
			// setInfo(data.posts.filter(x => x.id === param));
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

	// const stickyGrids = useMemo(() => {
	// 	return (
	// 		info &&
	// 		info[0].media.additional &&
	// 		divideArray(info[0].media.additional.slice(0, 6), 2)
	// 	);
	// }, [info]);

	return (
		<>
			<Helmet>
				<title>
					{`${info && info[0].title} - ${info && info[0].subtitle}`}{" "}
				</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='o-page o-single-project'>
				<HeroBlock
					title={info && info[0].Title}
					subtitle={info && info[0].Subtitle}
					image={{
						url: info && info[0].FeatureImage.data.attributes.url,
						alt: info && info[0].FeatureImage.data.attributes.alternativeText
					}}
				/>

				{/* <Section classes='o-overview -padding-lg' data-theme='light' noGutter>
					<ContainerFluid>
						<Grid container spacing={5} wrap={mobile ? "wrap" : "nowrap"}>
							<Grid item xs={12} md={6} lg={6}>
								<Typography variant='h4' component='h4'>
									<Markdown children={info && info[0].goal} />
								</Typography>
							</Grid>

							<Grid item xs={12} md={6} lg={6}>
								<Typography variant='body1' component='p'>
									<Markdown
										children={
											info && info[0].about && info[0].about.partnership
										}
									/>
								</Typography>
							</Grid>
						</Grid>
					</ContainerFluid>
				</Section> */}
				{/* {info && info[0].media.additional && (
					<Section data-theme='light' classes='o-feature' noGutter>
						<ContainerFluid>
							<div className='o-feature_item'>
								<Figure
									noFrame
									src={
										info &&
										info[0].media.additional &&
										info[0].media.additional[0].attributes.url
									}
								/>
							</div>
						</ContainerFluid>
					</Section>
				)} */}
				{/* <Section

				{/* <Section>
					<AboutSection
						aboutArtist={info && info[0].about && info[0].about.artist}
						aboutOrg={info && info[0].about && info[0].about.organization}
						images={
							info &&
							info[0].media.additional &&
							info[0].media.additional.slice(0, 4)
						}
					/>
				</Section> */}

				{/* {stickyGrids &&
					stickyGrids.map((sticky, i) => (
						<Sticky
							additionalMedia={sticky}
							metricTitle={Object.keys(info[0].metrics)[i]}
							metric={Object.values(info[0].metrics)[i]}
							reverse={i % 2 === 0}
						/>
					))} */}

				{/* 
				{info && info[0].media.additional && (
					<Section classes='o-additionalMedia -padding-lg' data-theme='light'>
						<ContainerFluid>
							<ProjectGrid variant='media' items={info[0].media.additional} />
						</ContainerFluid>
					</Section>
				)} */}
				{/* <Section>
					<ContainerFluid>
						<Grid
							container
							gap={10}
							wrap={"nowrap"}
							sx={{ textAlign: "center" }}
						>
							{info &&
								Object.entries(info[0].metrics).map(metric => (
									<>
										<Grid item sx={4} md={4} lg={4}>
											<Typography
												component='h3'
												variant='h3'
												sx={{ textTransform: "uppercase" }}
											>
												{metric[0]}
											</Typography>
											<Typography component='h4'>{metric[1]}</Typography>
										</Grid>
									</>
								))}
						</Grid>
					</ContainerFluid>
				</Section> */}

				<Next color={accentColor[1]} nextPost={info && info.nextPost} />
			</div>
		</>
	);
}

function AboutSection({ aboutOrg, aboutArtist, images }) {
	const text = {
		marginRight: "6rem",
		position: "sticky",
		top: 100,
		height: "500px",
	};

	const text2 = {
		marginLeft: "6rem",
		position: "sticky",
		top: 100,
		height: "500px",
	};

	const container = {
		display: "flex",
		"> *": {
			flex: 1,
		},
		img: {
			height: "40vw",
		},
	};

	const container2 = {
		display: "flex",
		flexDirection: "row-reverse",

		"> *": {
			flex: 1,
		},
		img: {
			height: "40vw",
		},
	};

	return (
		<ContainerFluid>
			<Box>
				<Box sx={container} pb={10}>
					<Box sx={text}>
						<Typography variant='h3' component='h4' mb={4}>
							About the Organization
						</Typography>
						<Typography variant='body1' component='p'>
							{aboutOrg}
						</Typography>
					</Box>
					<Box>
						<Card>
							<CardMedia
								image={images && images[0].attributes.url}
								component='img'
							/>
						</Card>
						<Card>
							<CardMedia
								image={images && images[1].attributes.url}
								component='img'
							/>
						</Card>
					</Box>
				</Box>
				<Box sx={container2}>
					<Box sx={text2}>
						<Typography variant='h3' component='h3' mb={4}>
							About the Artist
						</Typography>
						<Typography variant='body1' component='p'>
							{aboutArtist}
						</Typography>
					</Box>
					<Box>
						<Card>
							<CardMedia
								image={images && images[2].attributes.url}
								component='img'
							/>
						</Card>
						<Card>
							<CardMedia
								image={images && images[3].attributes.url}
								component='img'
							/>
						</Card>
					</Box>
				</Box>
			</Box>
		</ContainerFluid>
	);
}

export default SingleProjectPage;
