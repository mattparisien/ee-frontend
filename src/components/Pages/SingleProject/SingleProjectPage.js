import {
	Box,
	Card,
	CardMedia,
	Grid,
	Typography,
	useMediaQuery,
} from "@mui/material";
import gsap from "gsap";
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

function SingleProjectPage({ location, transitioning, toggleTransitioning }) {
	const data = useContext(DataContext);
	const [param, setParam] = useState(null);
	const [info, setInfo] = useState(null);
	const textWrapper = useRef(null);
	const heroImage = useRef(null);
	const revealer = useRef(null);
	const tl = useRef(gsap.timeline());
	const mobile = useMediaQuery("(max-width: 600px)");

	const accentColor = useMemo(() => shuffleColors(), []);

	console.log(Object.entries(info[0].metrics));
	// useEffect(() => {
	// 	console.log(info);
	// }, [info]);

	// useLayoutEffect(() => {
	// 	const desktopTimeline = () => {
	// 		tl.current

	// 			.set(revealer.current, { transition: "none" })
	// 			.set(textWrapper.current, { opacity: 1 })

	// 			// .to(lines, {
	// 			// 	y: 0,
	// 			// 	opacity: 1,
	// 			// 	ease: "power3.out",
	// 			// 	duration: 1,
	// 			// 	stagger: 0.1,
	// 			// })
	// 			.to(
	// 				textWrapper.current,
	// 				{
	// 					bottom: 0,
	// 					top: "50%",
	// 					y: "-50%",
	// 					duration: 3,
	// 					ease: "expo.inOut",
	// 				},
	// 				0.4
	// 			);

	// 		return tl.current;
	// 	};

	// 	setTimeout(() => {
	// 		if (!mobile.matches) {
	// 			desktopTimeline();
	// 		}
	// 	}, 400);
	// }, [mobile.matches]);

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

		if (data && data.posts && param && !info) {
			// setInfo(data.posts.filter(x => x.id === param));
			const currentPost = data.posts.filter(x => x.id === parseInt(param));
			console.log("currentp[ost", currentPost);

			const nextPostIndex =
				data.posts.indexOf(data.posts.find(x => x.id === currentPost[0].id)) +
				1;
			const nextPost =
				data.posts[nextPostIndex === data.posts.length ? 0 : nextPostIndex];

			setInfo({ ...currentPost, nextPost: nextPost });
		}
	}, [data, location, param, info]);

	const stickyGrids = useMemo(() => {
		return (
			info &&
			info[0].media.additional &&
			divideArray(info[0].media.additional.slice(0, 6), 2)
		);
	}, [info]);

	return (
		<>
			<Helmet>
				<title>
					{`${info && info[0].title} - ${info && info[0].subtitle}`}{" "}
				</title>
				<meta name='description' content='Helmet application' />
			</Helmet>
			<div className='o-page o-single-project'>
				<Section data-theme='light' classes='o-hero' noGutter>
					<Box mb={10}>
						<ContainerFluid>
							<Grid
								container
								spacing={5}
								mt={10}
								wrap={mobile ? "wrap" : "nowrap"}
							>
								<Grid
									item
									className=' u-desktop-js-anim'
									ref={textWrapper}
									xs={12}
									md={6}
									lg={6}
									display='flex'
									flexDirection={"column"}
									alignItems={"flex-start"}
									justifyContent={"center"}
								>
									<Typography variant='h5'>{info && info[0].title}</Typography>

									<Typography variant='h2'>
										{info && info[0].subtitle}
									</Typography>

									{/* <h3 className='o-h3'>{info && info[0].subtitle}</h3> */}
									{/* </Fade> */}
								</Grid>

								<Grid
									item
									className='o-hero_image -frame-reveal'
									ref={heroImage}
									xs={12}
									s={6}
									md={6}
									sx={{ position: "relative" }}
								>
									<Card
										sx={{
											width: "100%",
											position: "relative",
											overflow: "visible",
										}}
									>
										<CardMedia
											component='img'
											height={mobile ? 600 : 300}
											image={info && info[0].media.featureImage.url}
											alt={info && info[0].media.featureImage.altText}
										/>

										<Frame />
									</Card>
									<Typography
										variant='body2'
										component='p'
										mt={2}
										textAlign='right'
									>
										{info &&
											info[0].media.featureImage.caption &&
											info[0].media.featureImage.caption}
									</Typography>

									{/* <Figure
									noReveal
									effectDelay={5000}
									src={info && info[0].media.featureImage.url}
									alt={info && info[0].media.featureImage.altText}
								/> */}
								</Grid>

								{/* 				
					<div className='o-hero_image-wrapper-2'>
						<img
							src={info && info[0].media.featureImage.url}
							alt={info && info[0].media.featureImage.altText}
						/>
					</div> */}
							</Grid>
						</ContainerFluid>
					</Box>
				</Section>

				<Section classes='o-overview -padding-lg' data-theme='light' noGutter>
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
				</Section>
				{info && info[0].media.additional && (
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
				)}
				<Section
					classes='o-details -padding-top-lg'
					data-theme='light'
					noGutter
				>
					<ContainerFluid>
						<Grid container spacing={5} wrap={mobile ? "wrap" : "nowrap"}>
							<Grid item xs={12} md={6} lg={6} className='aboutArtist'>
								<Fade bottom>
									<Typography variant='h3' mb={2}>
										About the Artist
									</Typography>
								</Fade>
								<Fade bottom>
									<Typography component='p' variant='body1'>
										{info && info[0].about && info[0].about.artist}
									</Typography>
								</Fade>
							</Grid>
							<Grid className='aboutOrg' item xs={12} md={6} lg={6}>
								{/* <Fade bottom cascade> */}
								<Fade bottom>
									<Typography variant='h3' mb={2}>
										About the organization
									</Typography>
								</Fade>
								<Fade bottom>
									<Typography component='p' variant='body1'>
										{info && info[0].about && info[0].about.organization}
									</Typography>
								</Fade>
								{/* </Fade> */}
							</Grid>
						</Grid>
					</ContainerFluid>
				</Section>

				<Section>
					<AboutSection
						aboutArtist={info && info[0].about && info[0].about.artist}
						aboutOrg={info && info[0].about && info[0].about.organization}
						images={
							info &&
							info[0].media.additional &&
							info[0].media.additional.slice(0, 4)
						}
					/>
				</Section>

				{stickyGrids &&
					stickyGrids.map((sticky, i) => (
						<Sticky
							additionalMedia={sticky}
							metricTitle={Object.keys(info[0].metrics)[i]}
							metric={Object.values(info[0].metrics)[i]}
							reverse={i % 2 === 0}
						/>
					))}

				{/* 
				{info && info[0].media.additional && (
					<Section classes='o-additionalMedia -padding-lg' data-theme='light'>
						<ContainerFluid>
							<ProjectGrid variant='media' items={info[0].media.additional} />
						</ContainerFluid>
					</Section>
				)} */}
				<Section>
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
				</Section>

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
