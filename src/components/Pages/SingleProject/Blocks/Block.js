import React from "react";
import Section from "../../../Containers/Section";
import Container from "../../../Containers/ContainerFluid";
import { Box } from "@mui/material";
import { BLOCKS } from ".";

function Block(props) {
	const padding = props.name === "FullBleedMediaBlock" ? 0 : 10;

console.log(props)


	return (
		<Section sectionTheme={props.data.theme}>
			<Container fullBleed={props.name.startsWith("FullBleed")}>
				<Box pt={padding} pb={padding}>
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
