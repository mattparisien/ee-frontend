import React, { useEffect, useRef, useContext, useState } from "react";
import { Heading, Paragraph, Grid, GridItem, Container } from "../../../index";

import Drawings from "./Drawings";
import { DataContext } from "../../../../App";
import Notes from "./Notes/Notes";
import { Scroll, useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

function Steps() {
	const { steps } = useContext(DataContext);
	const stepRefs = useRef([]);
	const centeredStep = useRef(null);
	const { scroll } = useLocomotiveScroll();
	const [rotation, setRotation] = useState(null);
	const noteContainerRef = useRef(null);
	const rotationRefs = useRef([]);
	const rotationTimeline = useRef(gsap.timeline());

	const addToRefs = el => {
		if (el && !rotationRefs.current.includes(el)) {
			rotationRefs.current.push(el);
		}
	};

	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	console.log(noteContainerRef, rotationRefs)
	// 	if (noteContainerRef.current && rotationRefs.current.length > 3) {
			
	// 		rotationTimeline.current.to(rotationRefs.current, {
	// 			rotation: "180deg",
	// 			scrollTrigger: {
	// 				trigger: noteContainerRef.current,
	// 				start: "top top",
	// 				end: "+=1000",
	// 				scrub: 1,
	// 				onEnter: () => {
	// 					console.log("has enteredss!");
	// 				},
	// 			},
	// 		});
	// 	}
	// }, [noteContainerRef, rotationRefs]);

	const renderSteps = function () {
		return (
			steps &&
			steps.slice(0, 5).map((step, index) => {
				return (
					<GridItem key={step.id} classes={`steps-grid__item${index + 1}`}>
						<Heading small>
							{step.title.split(" ").slice(0, 3).join(" ")}
						</Heading>
						<p>{step.body}</p>
					</GridItem>
				);
			})
		);
	};

	return (
		<Container padding={"regular"} height='auto' isAbove ref={noteContainerRef}>
			<Grid name={"steps"} columns={12} classes={"steps-grid"}>
				{steps && renderSteps()}
				<Notes addToRefs={addToRefs} />
				<Container isAbsolute isBelow className='drawings-wrapper'>
					<div className='drawings-inner'>
						<Drawings />
					</div>
				</Container>
			</Grid>
		</Container>
	);
}

export default Steps;
