import React, { useEffect, useRef, useContext } from "react";
import { Heading, Paragraph, Grid, GridItem, Container } from "../../../index";
import useFetch from "../../../../helpers/hooks/useFetch";
import { useIntersection } from "../../../../helpers/hooks/useIntersect";
import gsap from "gsap";
import {
	DrawingBlue,
	DrawingGreen,
	DrawingYellow,
	DrawingRed,
	NoteFilled,
	NoteOutline,
} from "../../../Vector/Svg";
import { DataContext } from "../../../../App";
import Notes from "./Notes";
import { Section } from "../../../index";

function Steps() {
	const { steps } = useContext(DataContext);

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
		<Container padding={"regular"} height='auto' isAbove>
			<Grid name={"steps"} columns={12} classes={"steps-grid"}>
				{steps && renderSteps()}
				<Notes />
			</Grid>
			<Container className='steps-drawing-wrapper' isAbsolute isBelow>
				{/* <DrawingRed />
				<DrawingYellow />
				<DrawingGreen />
				<DrawingBlue /> */}
			</Container>
		</Container>
	);
}

export default Steps;
