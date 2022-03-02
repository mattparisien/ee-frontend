import React, { useContext, useRef } from "react";
import { DataContext } from "../../../../Containers/Temp/Authenticated";
import Heading from "../../../../Text/Heading";
import Paragraph from "../../../../Text/Paragraph";
import { Grid } from "@mui/material";
import Notes from "./Notes/Notes";

function Steps() {
	const { steps } = useContext(DataContext);
	const noteContainerRef = useRef(null);
	const rotationRefs = useRef([]);
	const headingRefs = useRef([]);

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

	const renderSteps = function () {
		return (
			steps &&
			steps.slice(0, 5).map((step, index) => {
				return (
					<Grid item key={step.id} key={step.id}>
						<Heading small ref={addToHeadingRefs}>
							{step.title.split(" ").slice(0, 3).join(" ")}
						</Heading>
						<Paragraph>{step.body}</Paragraph>
					</Grid>
				);
			})
		);
	};

	return (
		<Grid className='Steps' container>
			{steps && renderSteps()}
			<Notes addToRefs={addToRefs} scrollTrigger={noteContainerRef.current} />
			{/* <div className='drawings-wrapper'>
					<Drawings />
				</div> */}
		</Grid>
	);
}

export default Steps;
