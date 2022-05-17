import React from "react";
import TitleBlock from "../../../../Blocks/TitleBlock";
import Section from "../../../../Containers/Section";
import StepItem from "./components/StepItem";
import Container from "../../../../Containers/ContainerFluid";
import "./Steps.css";

function Steps({ steps }) {
	return (
		<Section sectionTheme='light'>
			<Container>
				<TitleBlock
					data={{
						title: "Finding Your Rhythm",
					}}
				/>
				<div className='content-wrapper relative w-full h-full'>
					<div className='Steps h-full grid grid-cols-6 gap-y-7 sm:gap-y-20 sm:gap-x-20 lg:gap-x-10 lg:gap-y-0'>
						{steps &&
							steps.map(step => {
								return <StepItem step={step} key={step.id} id={step.id} />;
							})}
					</div>
				</div>
			</Container>
		</Section>
	);
}

export default Steps;
