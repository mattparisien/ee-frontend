import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import $ from "jquery";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Fade from "react-reveal/Fade";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import ColorBlobs from "../../Drawings/ColorBlobs";
import SectionHeading from "../../Headings/SectionHeading";
import { HalfNote, QuarterNote } from "../../Vector/Notes";
import { InstrumentPlayer } from "../../Vector/Svg";

function How({ steps }) {
	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

	

	const noteTl = useRef(null);
	const container = useRef(null);
	const scroll = useLocomotiveScroll();
	const drawing = useRef(null);

	useEffect(() => {
		const drawings = $(container.current).find("path");
		gsap.set(drawings, { drawSVG: "0%" });

		if (container.current && scroll && scroll.scroll) {
			ScrollTrigger.scrollerProxy(".scroll-wrapper", {
				scrollTop(value) {
					return arguments.length
						? scroll.scroll.scrollTo(value, 0)
						: scroll.scroll.scroll.instance.scroll.y;
				},
				getBoundingClientRect() {
					return {
						top: 0,
						left: 0,
						width: window.innerWidth,
						height: window.innerHeight,
					};
				},
				pinType: document.querySelector(".scroll-wrapper")
					.getElementsByClassName.transform
					? "transform"
					: "fixed",
			});

			noteTl.current = gsap.timeline({
				scrollTrigger: {
					scroller: ".scroll-wrapper",
					trigger: $(".o-how"),
					pin: false,
					start: "top top",
					end: "+=2000",
					scrub: 1,
				},
			});
		}
	}, [scroll.isReady, scroll]);

	useEffect(() => {
		noteTl.current &&
			noteTl.current
				.to($(".steps-container .c-note"), {
					duration: 4,
					scale: "1.6",
					rotate: "+=180deg",
				})
				.to(
					$(drawing.current).find("path"),
					{
						drawSVG: "100%",
						duration: 2,
					},
					0
				);
	}, []);

	const stepHeading = theme => ({
		fontSize: "5vw",
		lineHeight: "5vw",
		fontFamily: "Kobe",
		textAlign: "center",
		[theme.breakpoints.down("md")]: {
			fontSize: "6vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "8.5vw",
			lineHeight: "8.5vw",
		},
	});

	const stepParagraph = theme => ({
		fontSize: "1.3vw",
		textAlign: "center",
		[theme.breakpoints.down("md")]: {
			fontSize: "2vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "3vw",
		},
	});

	const noteStyle = theme => ({
		"&_1": {
			top: 0,
			left: 0,
		},
		"&_2": {
			top: "20vw",
			right: "10vw",
			transform: "rotate(90deg)",
		},
		"&_3": {
			bottom: "70vw",
			left: "10vw",
		},
		"&_4": {
			right: "10vw",
			bottom: "15vw",
			transform: "rotate(-80deg)",
		},
		[theme.breakpoints.down("md")]: {
			"&_1": {
				left: "60vw",
				top: "10vw",
			},
			"&_2": {
				top: "40vw",
				right: "60vw",
			},
			"&_3": {
				bottom: "80vw",
				left: "65vw",
			},
			"&_4": {
				right: "70vw",
				bottom: "55vw",
				transform: "rotate(-80deg)",
			},
		},
	});

	const containerStyles = theme => ({
		".MuiContainer-root": {
			overflow: "visible",
		},
		height: "150vw",
		marginLeft: 10,
		marginRight: 10,
		[theme.breakpoints.down("md")]: {
			height: "auto",
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: 5,
			marginRight: 5,
			".c-steps_item_1": {
				"grid-row": "1/2 !important",
				"grid-column": "1/7 !important",
			},
			".c-steps_item_2": {
				"grid-row": " 2/3",
				"grid-column": "8/14 !important",
			},
			".c-steps_item_3": {
				"grid-row": " 3/4",
				"grid-column": "1/7 !important",
			},
			".c-steps_item_4": {
				"grid-row": " 4/5",
				"grid-column": "8/14 !important",
			},
			".c-steps_item_5": {
				"grid-row": " 5/6",
				"grid-column": "1/7 !important",
			},
		},
		[theme.breakpoints.down("sm")]: {
			height: "auto",
			marginLeft: 2,
			marginRight: 2,
			".c-steps_item_1": {
				"grid-row": "1/2 !important",
				"grid-column": "1/14 !important",
			},
			".c-steps_item_2": {
				"grid-row": " 2/3",
				"grid-column": "1/14 !important",
			},
			".c-steps_item_3": {
				"grid-row": " 3/4",
				"grid-column": "1/14 !important",
			},
			".c-steps_item_4": {
				"grid-row": " 4/5",
				"grid-column": "1/14 !important",
			},
			".c-steps_item_5": {
				"grid-row": " 5/6",
				"grid-column": "1/14 !important",
			},
		},

		".c-steps_item_1": {
			"grid-row": "1/2",
			"grid-column": "1/6",
		},
		".c-steps_item_2": {
			"grid-row": " 2/3",
			"grid-column": "5/11",
		},
		".c-steps_item_3": {
			"grid-row": " 3/4",
			"grid-column": "8/14",
		},
		".c-steps_item_4": {
			"grid-row": " 4/5",
			"grid-column": "5/11",
		},
		".c-steps_item_5": {
			"grid-row": " 5/6",
			"grid-column": "1/6",
		},
		".c-note": noteStyle,
	});

	const playerSvg = theme => ({
		width: "36%",
		transform: "translateY(-15vw)",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},

		svg: {
			overflow: "visible",
		},
	});

	const headingLayout = theme => ({
		display: "flex",
		flexDirection: "row-reverse",
		alignItems: "center",
		justifyContent: "center",
		[theme.breakpoints.down("sm")]: {
			marginBottom: 0,
		},
	});

	const heading = theme => ({
		fontSize: "10vw",
		lineHeight: "10vw",
		textAlign: "center",
		[theme.breakpoints.down("sm")]: {
			fontSize: "5.2rem",
			lineHeight: "5.6rem",
		},
	});

	return (
		<>
			<Section classes='o-how' data-theme='light' ref={container} noGutter>
				<ContainerFluid>
					<Box className='heading-layout' sx={headingLayout} mb={20}>
						<SectionHeading
							textAlign='center'
							sx={heading}
							pb={5}
							pt={5}
							mb={5}
							text={"Finding Your Rhythm"}
						/>

						{/* <Rhythm /> */}
						<Box sx={playerSvg}>
							<InstrumentPlayer />
						</Box>
					</Box>

					<Box className='steps-container -relative' sx={containerStyles}>
						<Box className='c-steps' sx={{ height: "100%" }}>
							<div className='c-steps_background'></div>
							{steps &&
								steps.map((step, i) => {
									return (
										<Box
											className={`c-steps_item c-steps_item_${step.id}`}
											key={i}
										>
											<Fade bottom>
												<Typography variant='h2' sx={stepHeading} mb={2}>
													<ReactMarkdown
														disallowedElements={["p"]}
														unwrapDisallowed
														className='title'
														children={step.title}
													/>
												</Typography>
											</Fade>

											<Fade bottom>
												<Typography
													sx={stepParagraph}
													className='body'
													variant='body1'
													component={"p"}
												>
													{step.body}
												</Typography>
											</Fade>
										</Box>
									);
								})}

							<SheetMusic />
						</Box>

						<QuarterNote id={1} />
						<QuarterNote id={2} />

						<QuarterNote id={4} />
						<HalfNote id={3} />
						<ColorBlobs />
					</Box>
				</ContainerFluid>
			</Section>
		</>
	);
}

const SheetMusic = () => {
	return (
		<div className='c-steps_sheet'>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
			<div className='c-steps_sheet_line' data-scroll></div>
		</div>
	);
};

// const Rhythm = () => {
// 	return (
// 		<>
// 			<Box sx={{ display: "flex", width: "900px", "path": {display: "block"}}}>
// 				<svg id='a' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 612 792'>
// 					<path
// 						data-scroll
// 						data-scroll-speed={3}
// 						class='b'
// 						d='M141.49,480.68c-6.78-14.21-19.88-21.97-32.87-18.89,1.97-5.86,2.06-10.67-.43-15.89-4.93-10.32-16.02-15.46-28.65-9.43l-25.5,12.17,37.67,78.92,13.35-6.38-8.93-18.7c-5.33-11.17-1.24-21.02,7.5-25.2,9.59-4.58,19.39-.91,25.07,10.99l8.4,17.6,13.36-6.38-8.98-18.82Zm-49.07-15.04c-2.9,3.92-6.28,7.77-7.93,12.43l-10.9-22.82,9.83-4.69c5.46-2.61,10.02-1.5,12.1,2.87,2.09,4.37-.77,9.01-3.11,12.22Z'
// 					/>
// 					<path
// 						data-scroll
// 						data-scroll-speed={3}
// 						class='b'
// 						d='M166.32,469.55l14.49-86.24,13.67,2.3-6.11,36.35c3.54-3.22,8.99-6.4,16.95-5.06,11.67,1.96,20.24,11.04,17.77,25.77l-5.95,35.42-13.67-2.3,5.57-33.17c1.32-7.83-2.22-12.79-9.51-14.01s-12.97,4.1-14.15,11.13l-5.4,32.11-13.67-2.3Z'
// 					/>
// 					<path
// 						data-scroll
// 						data-scroll-speed={1}
// 						class='b'
// 						d='M273.72,454.26h13.86v57.71c0,17.09-13.05,29.87-28.79,29.87-14.26,0-26.37-9.82-28.66-23.81h14.66c1.88,5.92,7.53,10.22,13.99,10.22,7.8,0,14.93-6.73,14.93-14.66v-7.94c-2.83,3.77-7.4,7-14.93,7-13.99,0-23.01-9.15-23.01-24.08v-34.31h13.86v32.83c0,7.13,4.71,12.11,12.11,12.11s11.97-5.25,11.97-13.05v-31.88Z'
// 					/>
// 					<path
// 						data-scroll
// 						data-scroll-speed={2}
// 						class='b'
// 						d='M318.32,438.75l3.1,20.48c.74,4.92,3.49,7.77,8.14,7.07l5.99-.91,2.07,13.7-9.18,1.39c-10.11,1.53-18.51-4.55-19.94-13.99l-3.88-25.67-11.04,1.67-2.07-13.7c10.77-1.63,14.78-9.31,14.86-20.48l13.83-2.09c.01,8.16-1.41,14.09-5.02,18.99l13.97-2.11,2.07,13.7-12.9,1.95Z'
// 					/>
// 					<path
// 						class='b'
// 						d='M352.95,480.73l18.55-85.46,13.54,2.94-7.82,36.02c3.69-3.05,9.28-5.97,17.17-4.26,11.57,2.51,19.7,11.99,16.53,26.58l-7.62,35.1-13.54-2.94,7.13-32.87c1.68-7.76-1.61-12.88-8.84-14.45s-13.15,3.48-14.66,10.45l-6.91,31.82-13.54-2.94Z'
// 					/>
// 					<path
// 						data-scroll
// 						data-scroll-speed={3}
// 						class='b'
// 						d='M422.02,544.14l-7-56.2,13.75-1.71,.8,6.41c1.55-3.85,6.33-9.06,13.81-9.99,7.34-.91,13,2.04,16.62,6.06,2.92-4.84,7.95-9.12,16.62-10.21,12.95-1.61,23.53,4.93,25.45,20.42l4.32,34.71-13.75,1.71-4.12-33.11c-.91-7.34-5.44-10.98-12.11-10.15-6.54,.81-10.28,5.62-9.38,12.83l4.12,33.11-13.75,1.71-4.12-33.11c-.9-7.21-5.57-10.97-12.24-10.13-6.81,.85-10.23,6.02-9.33,13.23l4.07,32.71-13.75,1.71Z'
// 					/>
// 				</svg>
// 			</Box>
// 		</>
// 	);
// };

export default How;
