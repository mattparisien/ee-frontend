import React from "react";
import Heading from "../../../../../Heading/Heading";
import SplitText from "../../../../../HOC/SplitText";
import Markdown from "../../../../../Markdown/Markdown";
import { DoubleNote, HalfNote, QuarterNote } from "../../../../../Vector/Notes";
import { useMediaQuery } from "@mui/material";

function StepItem({ step, id, count }) {

	console.log(count, step)

	const mobileOddTranslate = '-translate-x-[45vw]';
	const mobileEvenTranslate = 'translate-x-[32vw]';

	const noteClasses =
		`fill-yellow-custom absolute top-[50%] left-[50%] -translate-y-1/2 ${id % 2 === 0 ? mobileEvenTranslate : mobileOddTranslate} sm:-translate-x-1/2`;

	const notes = [
		{
			component: DoubleNote,
			classes: noteClasses + " w-[70px]"
		},
		{
			component: HalfNote,
			classes: noteClasses + " w-[30px]"
		},
		{
			component: QuarterNote,
			classes: noteClasses + " w-[30px]"
		},
		{
			component: HalfNote,
			classes: noteClasses + " w-[30px]"
		},
		{
			component: DoubleNote,
			classes: noteClasses + " w-[70px]"
		},
	];

	console.log(id);

	const locations = {
		1: {
			column: "col-span-full sm:col-span-4 lg:col-span-2",
			row: "row-start-1 row-end-2",
		},
		2: {
			column:
				"col-span-full sm:col-start-3 col-end-7 lg:col-start-3 lg:col-end-5",
			row: "row-start-2 row-end-3",
		},
		3: {
			column: "col-span-full sm:col-span-4 lg:col-start-5 lg:col-end-7",
			row: "row-start-3 row-end-4",
		},
		4: {
			column:
				"col-span-full sm:col-start-3 col-end-7 lg:col-start-3 lg:col-end-5",
			row: "row-start-4 row-end-5",
		},
		5: {
			column: "col-span-full sm:col-span-4 lg:col-span-2",
			row: "row-start-5 row-end-6",
		},
	};


	return (
		<div
			className={`StepItem StepItem_${step.id} relative z-50 ${locations[id].column} ${locations[id].row}`}
		>
			<Heading
				level={3}
				wrapperClasses='text-center mb-5 font-semibold sticky z-[2]'
			>
				<SplitText>{step.Title}</SplitText>
			</Heading>
			<div className='z-[2] sticky'>
				<Markdown variantMap={{ p: "small" }} textCenter>
					{step.Body}
				</Markdown>
			</div>
			{React.createElement(notes[count].component, {
				classes: notes[count].classes,
			})}
			{/* <DoubleNote classes='fill-yellow-custom w-[70px] absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2' /> */}
		</div>
	);
}

export default StepItem;
