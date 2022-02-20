import React from "react";
import { Container, Heading, Section } from "../index";
import ListBlogPosts from "../ListBlogPosts";

function Projects(props) {
	const { addToRefs } = props;

	return (
		<Section bg={"light"}>
			<Container>
				<Heading xl>Our work</Heading>
			</Container>
			<Section>
				<Container padding={"5vw"} bg={"light"}>
					<ListBlogPosts />
				</Container>
			</Section>
		</Section>
	);
}

export default Projects;
