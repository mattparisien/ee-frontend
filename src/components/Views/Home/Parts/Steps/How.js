import { Box } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import $ from "jquery";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Container from "../../../../Containers/ContainerFluid";
import Section from "../../../../Containers/Section";
import animateNotes from "./animations";
import StepItem from "./StepItem";
import SplitText from "../../../../HOC/SplitText";

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
		".c-steps_sheet": {
			height: "90%",
		},
		".c-steps_sheet_line": {
			"&:last-of-type": {
				display: "none",
			},
		},
		[theme.breakpoints.down("md")]: {
			height: "auto",
		},
		[theme.breakpoints.down("md")]: {
			marginLeft: 5,
			marginRight: 5,
			".c-steps_sheet": {
				height: "100%",
			},

			".c-steps_sheet_line": {
				"&:last-of-type": {
					display: "block",
				},
				"&:nth-of-type(even)": {
					display: "none",
				},
			},

			".c-steps_item": {
				justifyContent: "center",
			},
			".c-steps_item_1": {
				gridRow: "1/2 !important",
				gridColumn: "1/8 !important",
			},
			".c-steps_item_2": {
				gridRow: " 2/3",
				gridColumn: "7/14 !important",
			},
			".c-steps_item_3": {
				gridRow: " 3/4",
				gridColumn: "1/8 !important",
			},
			".c-steps_item_4": {
				gridRow: " 4/5",
				gridColumn: "7/14 !important",
			},
			".c-steps_item_5": {
				gridRow: " 5/6",
				gridColumn: "1/8 !important",
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
			<Section
				classes='o-how -relative'
				data-theme='light'
				noGutter
				sx={{ overflow: "hidden" }}
			>
				<Container disableMaxWidth>
					<Box className='heading-layout' sx={headingLayout} mb={20}>
						{/* <Box sx={playerSvg}>
							<InstrumentPlayer />
						</Box> */}
					</Box>

					<Box
						className='steps-container -relative'
						sx={containerStyles}
						ref={stepsContainer}
					>
						<Box className='c-steps' sx={{ height: "100%", display: "grid" }}>
							<div className='c-steps_background'></div>
							{steps &&
								steps.map(step => {
									return <StepItem step={step} key={step.id} />;
								})}

							{/* <Sheet /> */}
						</Box>

						{/* <Notes /> */}
					</Box>
				</Container>
			</Section>
		</>
	);
}

export default How;
