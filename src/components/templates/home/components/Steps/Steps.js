import React from "react";
import TitleBlock from "../../../../Blocks/TitleBlock";
import Container from "../../../../Containers/ContainerFluid";
import Section from "../../../../Containers/Section";
import StepItem from "./components/StepItem";
import Notes from "./components/Notes";
import Heading from "../../../../Heading/Heading";

function Steps({ steps }) {
	return (
		<Section sectionTheme='light'>
			<Container maxWidth='large'>
				<Heading level={2} wrapperClasses="text-center">Finding your Rhythm</Heading>
				<div className='content-wrapper relative w-full h-full py-20'>
					<div className='Steps h-full grid grid-cols-6 gap-y-7 sm:gap-y-20 sm:gap-x-20 lg:gap-x-10 lg:gap-y-10'>
						{steps &&
							steps.map((step, index) => {
								return <StepItem step={step} key={step.id} id={step.id} count={index} />;
							})}
					</div>
				</div>
			</Container>
		</Section>
	);
}

export default Steps;
