import React from "react";
import Section from "../../../Containers/Section";
import Container from "../../../Containers/ContainerFluid";
import { Box } from "@mui/material";
import { BLOCKS } from ".";

function Block(props) {
	console.log(props);
	return (
		<Section data-theme={props.data.theme || "light"}>
			<Container>
				<Box pt={10} pb={10}>
					{props.data &&
						React.createElement(BLOCKS[props.name], {
							key: props.id,
							data: props.data,
						})}
				</Box>
			</Container>
		</Section>
	);
}

export default Block;
