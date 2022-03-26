import React, {forwardRef} from "react";
import Section from "../../Containers/Section";
import ContainerFluid from "../../Containers/ContainerFluid";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { QuarterNote, WholeNote, BassClef, HalfNote } from "../../Vector/Notes";

function How({ steps }, ref) {
	return (
		<Section classes='o-how' data-theme='light' ref={ref}>
			<ContainerFluid>
				<h1 className='o-h1 -padding-lg -text-center -split -fadeUp'>
					Finding Your <em>Rhythm</em>
					<hr></hr>
				</h1>
				
				<div className='steps-container -relative -margin-top-huge'>
					<div className='c-steps'>
						{steps && steps.map((step, i) => {
							return (
								<div className='c-steps_item' key={i}>
									<ReactMarkdown
										className='title -split -fadeUp'
										children={step.title}
										component='h3'
									/>
									<p className='body -split -fadeUp'>{step.body}</p>
								</div>
							);
						})}
						<div className='c-steps_sheet'>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
							<div className='c-steps_sheet_line' data-scroll></div>
						</div>
					</div>
					<WholeNote />
					<QuarterNote />
					<BassClef />
					<HalfNote />
				</div>
			</ContainerFluid>
		</Section>
	);
}

export default forwardRef(How);
