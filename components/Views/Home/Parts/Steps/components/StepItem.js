import React from "react";
import Heading from "../../../../../Heading/Heading";
import SplitText from "../../../../../HOC/SplitText";
import Markdown from "../../../../../Markdown/Markdown";
import { useMediaQuery } from "@mui/material";


function StepItem({ step, id }) {

	const matches = useMediaQuery('(max-width: 769px)');

	const locations = {
		1: {
			column: "col-span-full sm:col-span-4 lg:col-span-2",
			row: "row-start-1 row-end-2",
		},
		2: {
			column: "col-span-full sm:col-start-3 col-end-7 lg:col-start-3 lg:col-end-5",
			row: "row-start-2 row-end-3",
		},
		3: {
			column: "col-span-full sm:col-span-4 lg:col-start-5 lg:col-end-7",
			row: "row-start-3 row-end-4",
		},
		4: {
			column: "col-span-full sm:col-start-3 col-end-7 lg:col-start-3 lg:col-end-5",
			row: "row-start-4 row-end-5",
		},
		5: {
			column: "col-span-full sm:col-span-4 lg:col-span-2",
			row: "row-start-5 row-end-6",
		},
	};

	console.log(step.id);

	return (
		<div
			className={`StepItem StepItem_${step.id} relative z-50 ${locations[id].column} ${locations[id].row}`}
		>
			<Heading level={3} wrapperClasses='text-center mb-5 font-semibold'>
				<SplitText>{step.title}</SplitText>
			</Heading>
			<Markdown variantMap={{ p: "small" }} textCenter>{step.body}</Markdown>
		</div>
	);
}

export default StepItem;
