import React, { useContext, useRef } from "react";
import { DataContext } from "../../../../Containers/Temp/Authenticated";
import Heading from "../../../../Text/Heading";
import { device } from "../../../../styles/device";
import { Grid } from "@mui/material";
import Notes from "./Notes/Notes";
import styled from "styled-components";

const StyledSteps = styled.div`
	display: grid;
	grid-column-gap: 1.042vw;
	grid-template-columns: repeat(12, 5.5vw);

	h4 {
		font-family: "Kobe";
		text-align: left;
	}

	.Steps__step:nth-of-type(1) {
		grid-column: 3/7;
	}

	.Steps__step:nth-of-type(2) {
		grid-column: 6/10;
	}

	.Steps__step:nth-of-type(3) {
		grid-column: 9/13;
	}

	.Steps__step:nth-of-type(4) {
		grid-column: 6/10;
	}

	.Steps__step:nth-of-type(5) {
		grid-column: 3/8;
	}

	.Steps__step:nth-of-type(7) {
		grid-column: 7/12;
	}

	@media ${device.mobileL} {
		h4 {
			font-size: 4.167vw;
			margin: 1.719vw 0;
			line-height: 3.5vw;
		}

		p {
			width: 14vw;
		}
	}
`;

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

	const renderLineBreaks = (word, stepIndex, wordIndex) => {
		const stepBreakIndexes = [0, 1];

		if (stepIndex === 0) {
			return (
				<>
					{wordIndex === 0 && word}
					{wordIndex === 1 && (
						<>
							<br></br>
							{word}
						</>
					)}
				</>
			);
		} else if (stepIndex === 1) {
			return (
				<>
					{wordIndex === 0 && word}
					{wordIndex === 1 && (
						<>
							<br></br>
							{word}
						</>
					)}
					{wordIndex === 2 && word}
				</>
			);
		} else if (stepIndex === 2) {
			return (
				<>
					{wordIndex === 0 && word}

					{wordIndex === 1 && (
						<>
							<br></br>
							{word}
						</>
					)}
					{wordIndex === 2 && word}
				</>
			);
		} else if (stepIndex === 3) {
			return (
				<>
					{wordIndex === 0 && word}

					{wordIndex === 2 && (
						<>
							<br></br>
							{word}
						</>
					)}
					{wordIndex === 1 && word}
				</>
			);
		} else if (stepIndex === 4) {
			return (
				<>
					{wordIndex === 0 && word}

					{wordIndex === 2 && (
						<>
							<br></br>
							{word}
						</>
					)}
					{wordIndex === 1 && word}
				</>
			);
		}
	};

	const renderSteps = function () {
		return (
			steps &&
			steps.slice(0, 5).map((step, index) => {
				console.log(index);
				console.log(step.title);
				return (
					<Grid item key={step.id} key={step.id} className='Steps__step'>
						<h4>
							{step.title.split(" ").map((word, i) => {
								console.log(word);
								return <>{renderLineBreaks(word, index, i)}</>;
							})}
						</h4>
						<p>{step.body}</p>
					</Grid>
				);
			})
		);
	};

	return (
		<StyledSteps className='Steps' container>
			{steps && renderSteps()}
			<Notes addToRefs={addToRefs} scrollTrigger={noteContainerRef.current} />
			{/* <div className='drawings-wrapper'>
					<Drawings />
				</div> */}
		</StyledSteps>
	);
}

export default Steps;
