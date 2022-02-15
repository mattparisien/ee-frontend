import React, { useEffect, useRef, useContext } from "react";
import { Heading, Paragraph, Grid, GridItem, Container } from "../../../index";
import useFetch from "../../../../helpers/hooks/useFetch";
import { useIntersection } from "../../../../helpers/hooks/useIntersect";
import gsap from "gsap";
import Drawings from "./Drawings";
import { DataContext } from "../../../../App";
import Notes from "./Notes";
import $ from "jquery";
import { Section } from "../../../index";

function Steps() {
	const { steps } = useContext(DataContext);
	const stepRefs = useRef([]);
	const centeredStep = useRef(null);

	const addToRefs = el => {
		if (el && !stepRefs.current.includes(el)) {
			stepRefs.current.push(el);
		}
	};

	useEffect(() => {
		if (stepRefs.current.length >= 5) {
			const windowCenter = $(window).height() / 2;

			const main = $("main");

			console.log(main);
			stepRefs.current.forEach(ref => {});
		}
	}, [stepRefs]);

	const renderSteps = function () {
		return (
			steps &&
			steps.slice(0, 5).map((step, index) => {
				return (
					<GridItem
						key={step.id}
						classes={`steps-grid__item${index + 1}`}
						ref={addToRefs}
					>
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
		<Container padding={"regular"} height='auto' isAbove>
			<Grid name={"steps"} columns={12} classes={"steps-grid"}>
				{steps && renderSteps()}
				<Notes />
				<Drawings />
			</Grid>
		</Container>
	);
}

export default Steps;
