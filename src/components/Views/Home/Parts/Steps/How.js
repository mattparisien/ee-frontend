import { Box } from "@mui/material";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import TitleBlock from "../../../../Blocks/TitleBlock";
import Container from "../../../../Containers/ContainerFluid";
import Section from "../../../../Containers/Section";
import Notes from "./Notes";
import StepItem from "./StepItem";
import { containerStyles, notesWrapper } from "./styles";

function How({ steps }) {
	gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

	const scroll = useLocomotiveScroll();

	const stepsContainer = useRef(null);

	useEffect(() => {
		const notes = document.querySelectorAll(".c-note");

		if (scroll && scroll.scroll) {
			[...notes].forEach(note => {
				const { direction } = note.dataset;

				scroll.scroll.on("scroll", e => {
					const { top } = note.getBoundingClientRect();
					const scrollPos = e.scroll.y;

					const rotate = top / scrollPos;
					note.style.transform = `rotate(${
						direction === "left" ? -Math.abs(rotate * 100) : rotate * 100
					}deg)`;
				});
			});
		}
	}, [scroll]);

	return (
		<>
			<TitleBlock
				data={{
					title: "Finding Your Rhythm",
				}}
			/>
			<Section
				data-theme='light'
				noGutter
				sx={{ overflow: "hidden", position: "relative" }}
			>
				<Container disableMaxWidth>
					<Box className='heading-layout' mb={20}></Box>

					<Box
						className='steps-container -relative'
						sx={containerStyles}
						ref={stepsContainer}
					>
						<Box className='c-steps' sx={{ height: "100%", display: "grid" }}>
							<div className='c-steps_background'></div>
							{steps &&
								steps.map(step => {
									return <StepItem step={step} key={step.id} id={step.id} />;
								})}
						</Box>
					</Box>
				</Container>
				<Box className='notes-wrap' sx={notesWrapper}>
					<Box className='inner'>
						<Notes />
					</Box>
				</Box>
			</Section>
		</>
	);
}

export default How;
