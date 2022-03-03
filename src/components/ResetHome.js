import React, { useEffect, useRef, useState, useContext } from "react";
import { DrawnLogo } from ".";
import Page from "./Page";
import SectionWrapper from "./SectionWrapper";
import useResize from "../helpers/hooks/useResize";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { Megaphone } from "./Vector/Svg";
import { Grid } from "@mui/material";
import PropTypes from "prop-types";
import { DataContext } from "../App";

function Item(props) {
	const { sx, ...other } = props;
	return (
		<Box
			sx={{
				bgcolor: theme => (theme.palette.mode === "dark" ? "#101010" : "#fff"),
				color: theme =>
					theme.palette.mode === "dark" ? "grey.300" : "grey.800",
				border: "1px solid",
				borderColor: theme =>
					theme.palette.mode === "dark" ? "grey.800" : "grey.300",
				p: 1,
				borderRadius: 2,
				fontSize: "0.875rem",
				fontWeight: "700",
				...sx,
			}}
			{...other}
		/>
	);
}

Item.propTypes = {
	sx: PropTypes.oneOfType([
		PropTypes.arrayOf(
			PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
		),
		PropTypes.func,
		PropTypes.object,
	]),
};

const StepSchema = {
	1: {
		id: 1,
		gridColumn: "1/5",
		gridRow: "1/2",
		heading: null,
		paragraph: null,
	},
	2: {
		id: 2,
		gridColumn: "5/9",
		gridRow: "2/3",
		heading: null,
		paragraph: null,
	},
	3: {
		id: 3,
		gridColumn: "9/13",
		gridRow: "3/4",
		heading: null,
		paragraph: null,
	},
	4: {
		id: 4,
		gridColumn: "5/9",
		gridRow: "4/5",
		heading: null,
		paragraph: null,
	},
	5: {
		id: 5,
		gridColumn: "1/5",
		gridRow: "5/6",
		heading: null,
		paragraph: null,
	},
};

{
	/* <Item sx={{gridColumn: "1/5", gridRow: "1/2"}}>1</Item>
<Item sx={{gridColumn: "5/9", gridRow: "2/3"}}>2</Item>
<Item sx={{gridColumn: "9/13", gridRow: "3/4"}}>3</Item>
<Item sx={{gridColumn: "5/9", gridRow: "4/5"}}>4</Item>
<Item sx={{gridColumn: "1/5", gridRow: "5/6"}}>4</Item> */
}

function ResetHome() {
	const wordRefs = useRef([]);
	const [isParagraphRevealed, setParagraphRevealed] = useState(false);
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
		if (data.steps) {
			data.steps.forEach(step => {
				setSteps(prev => {
					return {
						...prev,
						[step.id]: {
							...prev[step.id],
							heading: step.title,
							paragraph: step.body,
						},
					};
				});
			});
		}
	}, [data]);

	// useEffect(() => {
	// 	if (headingRefs.current && !isHeadingSplit) {
	// 		const mySplitText = new SplitText(headingRefs.current, {
	// 			type: "lines, chars, words",
	// 			charsClass: "hero-heading-char",
	// 			linesClass: "line",
	// 			wordClass: "word",
	// 		});

	// 		setHeadingsplit(true);
	// 	}

	// 	if (isHeadingSplit) {
	// 		const charsLine1 = $(headingRefs.current[0]).find(".hero-heading-char");
	// 		const charsLine2 = $(headingRefs.current[1]).find(".hero-heading-char");

	// 		line1Timeline.current
	// 			.to(charsLine1, {
	// 				x: 0,
	// 				duration: wordEntryDuration,
	// 				stagger: -0.1,
	// 				ease: "expo.inOut",
	// 			})
	// 			.to(charsLine1, {
	// 				y: "-100%",
	// 				duration: wordEntryDuration,
	// 				stagger: -0.1,
	// 				ease: "expo.inOut",
	// 			});
	// 		line2Timeline.current
	// 			.to(charsLine2, {
	// 				x: 0,
	// 				duration: wordEntryDuration,
	// 				stagger: 0.1,
	// 				ease: "expo.inOut",
	// 			})
	// 			.to(charsLine2, {
	// 				y: "100%",
	// 				duration: wordEntryDuration,
	// 				stagger: -0.1,
	// 				ease: "expo.inOut",
	// 				onUpdate: () => {
	// 					if (line2Timeline.current.progress() > 0.5) {
	// 						setParagraphRevealed(true);
	// 					}
	// 				},
	// 			});
	// 	}
	// }, [headingRefs, isHeadingSplit]);

	// const introAnimation = useRef(gsap.timeline());

	// useEffect(() => {
	// 	if (wordRefs.current.length > 2 && containerRef.current) {
	// 		calculateWordOffsets(containerRef, wordRefs, setDefaultOffsets);
	// 	}

	// 	if (wordRefs.current.length > 2 && logoRef.current) {
	// 		animateIntro(introAnimation, wordRefs, chars, logoRef, overlayRef);
	// 	}
	// }, [wordRefs, windowWidth]);

	return (
		<Page pageName='Home'>
			<SectionWrapper height='100vh' bg='light'>
				{/* <div className='hero-content'>
				<div className='hero-content__inner' ref={containerRef}>
					<div className='drawnLogo-wrapper-overflowHidden'>
						<div className='drawnLogo__inner-relative'>
							<div className='drawnLogo__overlay' ref={overlayRef}></div>
							<div className='drawnLogo__inner-absolute' ref={logoRef}>
								<DrawnLogo width='400px' />
							</div>
						</div>
					</div>

					<div className='hero-word hero-word-social' ref={addToRefs}>
						Social
					</div>
					<div className='hero-word hero-word-impact' ref={addToRefs}>
						Impact
					</div>
					<div className='hero-word hero-word-agency' ref={addToRefs}>
						Agency
					</div>
				</div>
			</div> */}
				<div className='rotate-heading-wrapper__social'>
					<Typography
						variant='h1'
						component='h1'
						ref={addToHeadingRefs}
						className='heading-social'
					>
						Social
					</Typography>
				</div>
				<div className='rotate-heading-wrapper__impact'>
					<Typography
						variant='h1'
						component='h1'
						ref={addToHeadingRefs}
						className='heading-social'
					>
						Impact
					</Typography>
				</div>
				{isParagraphRevealed && (
					<Box className='hero-brand-line'>
						<Typography variant='body2' animationDelay={wordEntryDuration + 1}>
							We are the Eyes & Ears agency.
						</Typography>
						<Box className='hero-brand-line__logo'>
							<DrawnLogo />
						</Box>
					</Box>
				)}
				{/* <HeroHeading ref={headingRef} data-scroll data-scroll-speed={3}>Impact</HeroHeading> */}
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
						gap: 1,
						gridTemplateRows: "repeat(6, 300px)",
					}}
					mt={4}
				>
					{steps &&
						Object.values(steps).map(step => {
							return (
								<Item
									sx={{ gridColumn: step.gridColumn, gridRow: step.gridRow }}
								>
									<Typography variant='h4' component='h4'>
										{step.heading}
									</Typography>
									<Typography variant='body2' component='p'>
										{step.paragraph}
									</Typography>
								</Item>
							);
						})}

					{/* <Item sx={{ gridColumn: "5/9", gridRow: "2/3" }}>2</Item>
					<Item sx={{ gridColumn: "9/13", gridRow: "3/4" }}>3</Item>
					<Item sx={{ gridColumn: "5/9", gridRow: "4/5" }}>4</Item>
					<Item sx={{ gridColumn: "1/5", gridRow: "5/6" }}>4</Item> */}
				</Box>
			</SectionWrapper>
			<SectionWrapper></SectionWrapper>
		</Page>
	);
}

export default ResetHome;
