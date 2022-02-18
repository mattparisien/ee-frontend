import React, { useEffect, useRef, useContext, useState } from "react";
import { Heading, Paragraph, Grid, GridItem, Container } from "../../../index";
import Drawings from "./Drawings";
import { DataContext } from "../../../../App";
import Notes from "./Notes/Notes";
import { Scroll, useLocomotiveScroll } from "react-locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import useSplit from "../../../../helpers/hooks/useSplit";
import SplitText from "gsap/SplitText";

function Steps() {
	const { steps } = useContext(DataContext);
	const stepRefs = useRef([]);
	const centeredStep = useRef(null);

	const { scroll } = useLocomotiveScroll();
	const [rotation, setRotation] = useState(null);
	const noteContainerRef = useRef(null);
	const rotationRefs = useRef([]);
	const rotationTimeline = useRef(gsap.timeline());

	const headingRefs = useRef([]);

	const [isSplit, chars] = useSplit(headingRefs.current, {
		type: "lines",
		linesClass: "line",
	});

	const addToRefs = el => {
		if (el && !rotationRefs.current.includes(el)) {
			rotationRefs.current.push(el);
		}
	};

	const addToHeadingRefs = el => {
		if (el && !headingRefs.current.includes(el)) {
			headingRefs.current.push(el);
		}
	};

	const stepsRevealAnim = useRef(gsap.timeline());

	const renderSteps = function () {
		return (
			steps &&
			steps.slice(0, 5).map((step, index) => {
				return (
					<GridItem key={step.id} classes={`steps-grid__item${index + 1}`}>
						<Heading small ref={addToHeadingRefs}>
							{step.title.split(" ").slice(0, 3).join(" ")}
						</Heading>
						<p>{step.body}</p>
					</GridItem>
				);
			})
		);
	};

	return (
		<Container height='auto' isAbove ref={noteContainerRef} hasMarginBottom>
			<Grid name={"steps"} columns={12} classes={"steps-grid"}>
				{steps && renderSteps()}
				<Notes addToRefs={addToRefs} />
				<Container isAbsolute isBelow className='drawings-wrapper' noGutter>
					<div className='drawings-inner'>
						<Drawings />
					</div>
				</Container>
			</Grid>
		</Container>
	);
}

export default Steps;
