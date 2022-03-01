import gsap from "gsap";
import React, { useContext, useRef, useState } from "react";
import useSplit from "../../../../helpers/hooks/useSplit";
import { DataContext } from "../../../Containers/Temp/Authenticated";
import { Grid, GridItem, Heading } from "../../../index";
import ContainerFluid from "../../../Containers/ContainerFluid";
import Drawings from "./Drawings";
import Notes from "./Notes/Notes";

function Steps() {
	const { steps } = useContext(DataContext);
	const stepRefs = useRef([]);

	const [itemInView, setItemInView] = useState(null);
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
					<GridItem
						key={step.id}
						classes={`steps-grid__item steps-grid__item${index + 1}`}
						setItemInView={setItemInView}
						id={step.id}
					>
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
		<ContainerFluid height='auto' isAbove ref={noteContainerRef} hasMarginBottom>
			<Grid
				name={"steps"}
				columns={12}
				classes={"steps-grid"}
				itemInView={itemInView}
			>
				{steps && renderSteps()}
				{/* <Notes addToRefs={addToRefs} scrollTrigger={noteContainerRef.current} /> */}
				{/* <div className='drawings-wrapper'>
					<Drawings />
				</div> */}
			</Grid>
		</ContainerFluid>
	);
}

export default Steps;
