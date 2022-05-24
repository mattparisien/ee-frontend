import React from "react";
import Section from "../../../../Containers/Section";
import Carousel from "../../../../Carousel/Carousel";
import Container from "../../../../Containers/ContainerFluid";

function Testimonials({ items }) {
	return (
		<Section>
			<Container maxWidth="small">
				<Carousel items={items} type='text' arrowColor="dark"/>
			</Container>
		</Section>
	);
}

export default Testimonials;
