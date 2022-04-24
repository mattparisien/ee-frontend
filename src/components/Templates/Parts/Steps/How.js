import { Box } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import $ from "jquery";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ContainerFluid from "../../../Containers/ContainerFluid";
import Section from "../../../Containers/Section";
import CircleSvg from "../../../Vector/Circle";
import animateNotes from "./animations";
import AnimationWrapper from "./AnimationWrapper";
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
				ref={container}
				noGutter
				sx={{ overflow: "hidden" }}
			>
				<AnimationWrapper>
					<ContainerFluid disableMaxWidth>
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
					<Circles />
				</AnimationWrapper>
			</Section>
		</>
	);
}

const Circles = () => {
	const wrapper = theme => ({
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,

		".circle-wrapper": {
			position: "absolute",
			bottom: 0,
			left: 0,
			zIndex: 999,

			"&:nth-child(1)": {
				width: "55vw",
				top: "8%",
				left: "-10%",
				fill: theme.palette.primary.colorSet.yellow,
				mixBlendMode: "multiply",
			},
			"&:nth-child(2)": {
				width: "7vw",
				top: 0,
				left: "30%",
				mixBlendMode: "exclusion",
				fill: theme.palette.primary.colorSet.blue,
			},
			"&:nth-child(3)": {
				width: "30vw",
				top: 0,
				left: "70%",
				fill: "#CCA321",
				mixBlendMode: "exclusion",
			},
			"&:nth-child(4)": {
				width: "40vw",
				top: "29%",
				left: "10%",
				fill: "hotpink",
				mixBlendMode: "multiply",
			},
			"&:nth-child(5)": {
				width: "40vw",
				top: "40%",
				left: "20%",
				fill: theme.palette.primary.colorSet.yellow,
				mixBlendMode: "screen",
			},
		},
	});

	return (
		<Box className='circles-wrapper' sx={wrapper}>
			<Box
				className='circles-inner'
				position='relative'
				sx={{ width: "100%", height: "100%" }}
			>
				<CircleSvg />
				<CircleSvg />
				<CircleSvg />
				<CircleSvg />
				<CircleSvg />
				{/* <CircleSvg />
				<CircleSvg />
				<CircleSvg />
				<CircleSvg />
				<CircleSvg />
				<CircleSvg /> */}
			</Box>
		</Box>
	);
};

export default How;
