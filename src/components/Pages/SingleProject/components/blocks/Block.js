import React from "react";
import Section from "../../../../Containers/Section";
import Container from "../../../../Containers/ContainerFluid";
import { GalleryBlock, HeroBlock } from "./";

function Block(props) {
	return ( 
		<Section>
			<Container>
				{props.variant === "hero" && <HeroBlock {...props} />}
				{props.variant === "gallery" && <GalleryBlock {...props} />}
			</Container>
		</Section>
	);
}

export default Block;
