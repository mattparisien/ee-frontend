import { Box, Typography, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useRef, useState } from "react";
import { DrawnLogo } from ".";
import { DataContext } from "../App";
import useResize from "../helpers/hooks/useResize";
import Page from "./Page";
import SectionWrapper from "./SectionWrapper";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { Megaphone } from "./Vector/Svg";
import SplitText from "gsap/SplitText";

// function Item(props) {
// 	return (
// 		<Box
// 			sx={{
// 				color: theme =>
// 					theme.palette.mode === "dark" ? "grey.300" : "grey.800",
// 				border: "1px solid",
// 				borderColor: theme =>
// 					theme.palette.mode === "dark" ? "grey.800" : "grey.300",
// 				p: 1,
// 				borderRadius: 2,
// 				fontSize: "0.875rem",
// 				fontWeight: "700",
// 				...sx,
// 			}}
// 			{...other}
// 		/>
// 	);
// }

// Item.propTypes = {
// 	sx: PropTypes.oneOfType([
// 		PropTypes.arrayOf(
// 			PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
// 		),
// 		PropTypes.func,
// 		PropTypes.object,
// 	]),
// };

// {
/* <Item sx={{gridColumn: "1/5", gridRow: "1/2"}}>1</Item>
<Item sx={{gridColumn: "5/9", gridRow: "2/3"}}>2</Item>
<Item sx={{gridColumn: "9/13", gridRow: "3/4"}}>3</Item>
<Item sx={{gridColumn: "5/9", gridRow: "4/5"}}>4</Item>
<Item sx={{gridColumn: "1/5", gridRow: "5/6"}}>4</Item> */
// }

const locationsDesktop = {
	1: {
		gridColumn: "1/5",
		gridRow: "1/2",
	},
	2: {
		gridColumn: "5/9",
		gridRow: "2/3",
	},
	3: {
		gridColumn: "9/13",
		gridRow: "3/4",
	},
	4: {
		gridColumn: "5/9",
		gridRow: "4/5",
	},
	5: {
		gridColumn: "1/5",
		gridRow: "5/6",
	},
};

const locationsMobile = {
	1: {
		gridColumn: "1/13",
		gridRow: "1/2",
	},
	2: {
		gridColumn: "1/13",
		gridRow: "2/3",
	},
	3: {
		gridColumn: "1/13",
		gridRow: "3/4",
	},
	4: {
		gridColumn: "1/13",
		gridRow: "4/5",
	},
	5: {
		gridColumn: "1/13",
		gridRow: "5/6",
	},
};

function ResetHome() {
	const wordRefs = useRef([]);
	const [isParagraphRevealed, setParagraphRevealed] = useState(false);
	const matches = useMediaQuery("(max-width: 600px)");
	const [stepDevice, setStepDevice] = useState("desktop");
	const [stepLocations, setStepLocations] = useState(locationsDesktop);

	const StepSchema = {
		1: {
			id: 1,
			gridColumn: stepLocations[1].gridColumn,
			gridRow: stepLocations[1].gridRow,
			heading: null,
			paragraph: null,
		},
		2: {
			id: 2,
			gridColumn: stepLocations[2].gridColumn,
			gridRow: stepLocations[2].gridRow,
			heading: null,
			paragraph: null,
		},
		3: {
			id: 3,
			gridColumn: stepLocations[3].gridColumn,
			gridRow: stepLocations[3].gridRow,
			heading: null,
			paragraph: null,
		},
		4: {
			id: 4,
			gridColumn: stepLocations[4].gridColumn,
			gridRow: stepLocations[4].gridRow,
			heading: null,
			paragraph: null,
		},
		5: {
			id: 5,
			gridColumn: stepLocations[5].gridColumn,
			gridRow: stepLocations[5].gridRow,
			heading: null,
			paragraph: null,
		},
	};

	const [steps, setSteps] = useState(StepSchema);

	const [split, setSplit] = useState(null);
	const [isHeadingSplit, setHeadingsplit] = useState(null);
	const headingRefs = useRef([]);
	headingRefs.current = [];

	const [windowWidth] = useResize();
	const containerRef = useRef(null);
	const logoRef = useRef(null);
	const overlayRef = useRef(null);
	const line1Timeline = useRef(gsap.timeline({ delay: 0.5 }));
	const line2Timeline = useRef(gsap.timeline({ delay: 0.5 }));
	const wordEntryDuration = 2;

	const addToRefs = el => {
		if (el && !wordRefs.current.includes(el)) {
			wordRefs.current.push(el);
		}
	};

	const addToHeadingRefs = el => {
		if (el && !headingRefs.current.includes(el)) {
			headingRefs.current.push(el);
		}
	};

	const data = useContext(DataContext);

	useEffect(() => {
		if (matches) {
			setStepDevice("mobile");
		} else {
			setStepDevice("desktop");
		}

		if (stepDevice === "desktop") {
			setStepLocations(locationsDesktop);
		} else if (stepDevice === "mobile") {
			setStepLocations(locationsMobile);
		}

		if (data.steps) {
			data.steps.forEach(step => {
				setSteps(prev => {
					return {
						...prev,
						[step.id]: {
							...StepSchema[step.id],
							heading: step.title,
							paragraph: step.body,
						},
					};
				});
			});
		}
	}, [data, matches, stepDevice, stepLocations]);

	useEffect(() => {
		console.log(stepLocations);
	}, [stepLocations]);

	useEffect(() => {
		if (headingRefs.current && !isHeadingSplit) {
			const mySplitText = new SplitText(headingRefs.current, {
				type: "lines, chars, words",
				charsClass: "hero-heading-char",
				linesClass: "line",
				wordClass: "word",
			});

			setHeadingsplit(true);
		}

		if (isHeadingSplit) {
			const charsLine1 = $(headingRefs.current[0]).find(".hero-heading-char");
			const charsLine2 = $(headingRefs.current[1]).find(".hero-heading-char");
			console.log(charsLine1),
				line1Timeline.current
					.to(charsLine1, {
						x: 0,
						duration: wordEntryDuration,
						stagger: -0.1,
						ease: "expo.inOut",
					})
					.to(charsLine1, {
						y: "-100%",
						duration: wordEntryDuration,
						stagger: -0.1,
						ease: "expo.inOut",
					});
			line2Timeline.current
				.to(charsLine2, {
					x: 0,
					duration: wordEntryDuration,
					stagger: 0.1,
					ease: "expo.inOut",
				})
				.to(charsLine2, {
					y: "100%",
					duration: wordEntryDuration,
					stagger: -0.1,
					ease: "expo.inOut",
					onUpdate: () => {
						if (line2Timeline.current.progress() > 0.5) {
							setParagraphRevealed(true);
						}
					},
				});
		}
	}, [headingRefs, isHeadingSplit]);

	const introAnimation = useRef(gsap.timeline());

	useEffect(() => {
		if (wordRefs.current.length > 2 && containerRef.current) {
			calculateWordOffsets(containerRef, wordRefs, setDefaultOffsets);
		}

		if (wordRefs.current.length > 2 && logoRef.current) {
			animateIntro(introAnimation, wordRefs, chars, logoRef, overlayRef);
		}
	}, [wordRefs, windowWidth]);

	return (
		<Page pageName='Home'>
			<SectionWrapper height='100vh' bg='light'>
				{/* <div className='drawnLogo__overlay' ref={overlayRef}></div> */}
				{/* <div className='drawnLogo__inner-absolute' ref={logoRef}>
					<DrawnLogo width='400px' />
				</div> */}

				<Box className='hero-word hero-word-social'>
					<Typography
						ref={addToHeadingRefs}
						component='h1'
						sx={{
							fontSize: "20vw",
							position: "absolute",
							top: 0,
							left: 0,
							"& .hero-heading-char": {
								transform: "translateX(-100vw)",
							},
						}}
					>
						Social
					</Typography>
				</Box>
				<Box className='hero-word hero-word-impact'>
					<Typography
						ref={addToHeadingRefs}
						component='h1'
						sx={{
							fontSize: "20vw",
							position: "absolute",
							bottom: 0,
							right: 0,
							"& .hero-heading-char": {
								transform: "translateX(100vw)",
							},
						}}
					>
						Impact
					</Typography>
				</Box>

				{isParagraphRevealed && (
					<Box className='hero-brand-line'>
						<Typography variant='body2' animationDelay={wordEntryDuration + 1}>
							We are the Eyes & Ears agency.
						</Typography>
						{/* <Box className='hero-brand-line__logo'>
							<DrawnLogo />
						</Box> */}
					</Box>
				)}
			</SectionWrapper>
			<SectionWrapper height='100vh' bg='dark'>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						height: "100%",
						flexDirection: "column",
					}}
				>
					<Typography
						variant='h2'
						sx={{ alignSelf: "flex-start" }}
						gutterBottom
						fontWeight='400'
					>
						About us
					</Typography>
					<Typography variant='h4'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
						amet eligendi illo maiores consectetur eveniet voluptate modi
						mollitia. Omnis, aperiam quas aut maxime ipsam optio nemo veritatis
						debitis voluptatibus facere dolor ducimus consequuntur dicta, id
						assumenda reprehenderit numquam dolorum architecto?
					</Typography>
					<Box
						className='megaphone-wrapper'
						sx={{
							width: "300px",
							position: "absolute",
							bottom: 0,
							right: 0,
							transform: "scaleX(-100%)",
						}}
					>
						<Megaphone />
					</Box>
				</Box>
			</SectionWrapper>
			<SectionWrapper height='auto' bg='light'>
				<Typography variant='h2' textAlign='center'>
					Feel the Rhythm
				</Typography>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: "repeat(12, 1fr)",
						gap: 4,
						gridTemplateRows: "repeat(5, 300px)",
					}}
					mt={4}
				>
					{steps &&
						Object.values(steps).map(step => {
							return (
								<Box
									className='GridItem'
									sx={{ gridColumn: step.gridColumn, gridRow: step.gridRow }}
									key={step.id}
								>
									<Typography
										variant='h4'
										component='h4'
										className='GridItem__heading'
										mt={2}
										mb={2}
									>
										{step.heading}
									</Typography>
									<Typography
										variant='body2'
										component='p'
										className='GridItem__body'
									>
										{step.paragraph}
									</Typography>
								</Box>
							);
						})}
				</Box>
			</SectionWrapper>
			{/* <SectionWrapper height='100vh' bg='light'>
				<Typography variant='h2' component='h2' textAlign='center'>
					Featured work
				</Typography>
				<Box
					className='images-container'
					sx={{ height: "100%", position: "relative" }}
				>
					<Box
						className='image-wrapper'
						sx={{
							overflow: "hidden",
							width: "30vw",
							height: "40vw",
							maxWidth: "500px",
							maxHeight: "700px",
							position: "absolute",
							top: 0,
							transform: "rotate(-16deg)",
							padding: "inherit",
							margin: "5vw"
						}}
					>
						<img
							style={{ height: "100%", width: "100%", objectFit: "cover" }}
							src='https://images.pexels.com/photos/9527445/pexels-photo-9527445.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
						></img>
					</Box>
					<Box
						className='image-wrapper'
						sx={{
							overflow: "hidden",
							width: "30vw",
							height: "40vw",
							maxWidth: "500px",
							maxHeight: "700px",
							position: "absolute",
							right: 0,
							
							padding: "inherit",
							margin: "5vw"
						}}
					>
						<img
							style={{ height: "100%", width: "100%", objectFit: "cover" }}
							src='https://images.pexels.com/photos/6094204/pexels-photo-6094204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						></img>
					</Box>
					<Box
						className='image-wrapper'
						sx={{
							overflow: "hidden",
							width: "30vw",
							height: "40vw",
							maxWidth: "500px",
							maxHeight: "700px",
							position: "absolute",
							bottom: 0,
						}}
					>
						<img
							style={{ height: "100%", width: "100%", objectFit: "cover" }}
							src='https://images.pexels.com/photos/10369605/pexels-photo-10369605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						></img>
					</Box>
					<Box
						className='image-wrapper'
						sx={{
							overflow: "hidden",
							width: "30vw",
							height: "40vw",
							maxWidth: "500px",
							maxHeight: "700px",
							position: "absolute",
							bottom: 0,
						}}
					>
						<img
							style={{ height: "100%", width: "100%", objectFit: "cover" }}
							src='https://images.pexels.com/photos/11101677/pexels-photo-11101677.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
						></img>
					</Box>
				</Box>
			</SectionWrapper> */}
			<SectionWrapper height='80vh' bg='light'>
				<Testimonials items={data.stories && data.stories} />
			</SectionWrapper>
		</Page>
	);
}

export default ResetHome;
