import React from "react";
import Section from "../../../Containers/Section";
import Container from "../../../Containers/ContainerFluid";
import { BLOCKS } from ".";

function Block(props) {
	console.log(props)

	return (
		<Section>
			<Container>
				{props.data && 
				React.createElement(BLOCKS[props.name], {
					key: props.id,
					data: props.data,
				})}
			</Container>
		</Section>
	);
}

export default Block;
