import { Box } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import $ from "jquery";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ContainerFluid from "../../../Containers/ContainerFluid";
import Section from "../../../Containers/Section";
import SectionHeading from "../../../Headings/SectionHeading";
import { InstrumentPlayer } from "../../../Vector/Svg";
import animateNotes from "./animations";
import Notes from "./Notes";
import Sheet from "./Sheet";
import StepItem from "./StepItem";

function How({ steps }) {
	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

	const container = useRef(null);
	const scroll = useLocomotiveScroll();

	const stepsContainer = useRef(null);

	useEffect(() => {
		const elements = {
			container: stepsContainer.current,
			notes: $(stepsContainer.current).find(".c-note"),
		};

		if (scroll.isReady) {
			animateNotes(scroll, elements);
		}
	}, [scroll]);

	const noteStyle = theme => ({
		"&_1": {
			top: 0,
			left: 0,
		},
		"&_2": {
			top: "35vw",
			left: "2vw",
		},
		"&_3": {
			bottom: "70vw",
			left: "10vw",
		},
		"&_4": {
			right: "10vw",
			bottom: "15vw",
		},
		"&_5": {
			top: "20vw",
			right: "10vw",

			width: "2vw",
			height: "2vw",
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
			},
		},
	});

	const containerStyles = theme => ({
		".MuiContainer-root": {
			overflow: "visible",
		},
		height: "140vw",
		marginLeft: 10,
		marginRight: 10,
		[theme.breakpoints.down("md")]: {
			height: "auto",
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: 5,
			marginRight: 5,
			".c-steps_item_1": {
				gridRow: "1/2 !important",
				gridColumn: "1/7 !important",
			},
			".c-steps_item_2": {
				gridRow: " 2/3",
				gridColumn: "8/14 !important",
			},
			".c-steps_item_3": {
				gridRow: " 3/4",
				gridColumn: "1/7 !important",
			},
			".c-steps_item_4": {
				gridRow: " 4/5",
				gridColumn: "8/14 !important",
			},
			".c-steps_item_5": {
				gridRow: " 5/6",
				gridColumn: "1/7 !important",
			},
		},
		[theme.breakpoints.down("sm")]: {
			height: "auto",
			marginLeft: 2,
			marginRight: 2,
			".c-steps_item_1": {
				gridRow: "1/2 !important",
				gridColumn: "1/14 !important",
			},
			".c-steps_item_2": {
				gridRow: " 2/3",
				gridColumn: "1/14 !important",
			},
			".c-steps_item_3": {
				gridRow: " 3/4",
				gridColumn: "1/14 !important",
			},
			".c-steps_item_4": {
				gridRow: " 4/5",
				gridColumn: "1/14 !important",
			},
			".c-steps_item_5": {
				gridRow: " 5/6",
				gridColumn: "1/14 !important",
			},
		},

		".c-steps_item_1": {
			gridRow: "1/2",
			gridColumn: "1/7",
		},
		".c-steps_item_2": {
			
			gridColumn: "5/11",
		},
		".c-steps_item_3": {
			gridRow: " 3/4",
			gridColumn: "8/14",
		},
		".c-steps_item_4": {
			gridRow: " 4/5",
			gridColumn: "5/11",
		},
		".c-steps_item_5": {
			gridRow: " 5/6",
			gridColumn: "1/7",
		},
		".c-note": noteStyle,
	});

	const playerSvg = theme => ({
		width: "36%",
		transform: "translateY(-10vw)",
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
				<ContainerFluid sx={{maxWidth: "100% !important"}}>
					<Box className='heading-layout' sx={headingLayout} mb={20}>
						<SectionHeading
							textAlign='center'
							sx={heading}
							pb={5}
							pt={5}
							mb={5}
							text={"Finding Your Rhythm"}
						/>

						<Box sx={playerSvg}>
							<InstrumentPlayer />
						</Box>
					</Box>

					<Box
						className='steps-container -relative'
						sx={containerStyles}
						ref={stepsContainer}
					>
						<Box className='c-steps' sx={{ height: "100%" }}>
							<div className='c-steps_background'></div>
							{steps &&
								steps.map(step => {
									return <StepItem step={step} key={step.id} />;
								})}

							<Sheet />
						</Box>

						<Notes />
					</Box>
				</ContainerFluid>
			</Section>
		</>
	);
}

export default How;