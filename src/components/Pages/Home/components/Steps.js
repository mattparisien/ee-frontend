import React, { useEffect, useRef } from "react";
import { Heading, Paragraph, Grid, GridItem, Container } from "../../../index";
import useFetch from "../../../../helpers/hooks/useFetch";
import useSplit from "../../../../helpers/hooks/useSplit";
import { useIntersection } from "../../../../helpers/hooks/useIntersect";
import gsap from "gsap";
import {
	DrawingBlue,
	DrawingGreen,
	DrawingYellow,
	DrawingRed,
} from "../../../Vector/Svg";

function Steps() {
	const [data, error, loading] = useFetch("/api/steps", {
		requestType: "textContent",
	});

	const renderSteps = function () {
		return (
			data &&
			data.slice(0, 5).map((step, index) => {
				return (
					<GridItem key={step.id} classes={`steps-grid__item${index + 1}`}>
						<Heading small>
							{step.attributes.Title.split(" ").slice(0, 3).join(" ")}
						</Heading>
						<p>{step.attributes.Body}</p>
					</GridItem>
				);
			})
		);
	};

	return (
		<Container padding={"regular"} height='auto' isAbove>
			<Grid name={"steps"} columns={12} classes={"steps-grid"}>
				{data && renderSteps()}
			</Grid>
			<Container className='steps-drawing-wrapper' isAbsolute isBelow>
				<DrawingRed />
				<DrawingYellow />
				<DrawingGreen />
				<DrawingBlue />
			</Container>
		</Container>
	);
}

export default Steps;
