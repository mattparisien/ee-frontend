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
import { HalfNote, QuarterNote } from "../../Vector/Notes";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import SectionHeading from "../../Headings/SectionHeading";

function How({ steps }) {
	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

	const mobile = useMediaQuery("(max-width: 600px)");

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
		[theme.breakpoints.down("md")]: {
			fontSize: "2vw",
		},
		[theme.breakpoints.down("sm")]: {
			fontSize: "3vw",
		},
	});

	const containerStyles = theme => ({
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
				"grid-column": "7/13 !important",
			},
			".c-steps_item_3": {
				"grid-row": " 3/4",
				"grid-column": "1/7 !important",
			},
			".c-steps_item_4": {
				"grid-row": " 4/5",
				"grid-column": "7/13 !important",
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
				"grid-column": "1/13 !important",
			},
			".c-steps_item_2": {
				"grid-row": " 2/3",
				"grid-column": "1/13 !important",
			},
			".c-steps_item_3": {
				"grid-row": " 3/4",
				"grid-column": "1/13 !important",
			},
			".c-steps_item_4": {
				"grid-row": " 4/5",
				"grid-column": "1/13 !important",
			},
			".c-steps_item_5": {
				"grid-row": " 5/6",
				"grid-column": "1/13 !important",
			},
		},

		".c-steps_item_1": {
			"grid-row": "1/2",
			"grid-column": "1/5",
		},
		".c-steps_item_2": {
			"grid-row": " 2/3",
			"grid-column": "5/9",
		},
		".c-steps_item_3": {
			"grid-row": " 3/4",
			"grid-column": "9/13",
		},
		".c-steps_item_4": {
			"grid-row": " 4/5",
			"grid-column": "5/9",
		},
		".c-steps_item_5": {
			"grid-row": " 5/6",
			"grid-column": "1/5",
		},
	});

	return (
		<>
			<Section classes='o-how' data-theme='light' ref={container}>
				<ContainerFluid>
					<SectionHeading
						textAlign='center'
						pb={5}
						pt={5}
						mb={5}
						text={"Finding Your Rhythm"}
					/>

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

export default How;
