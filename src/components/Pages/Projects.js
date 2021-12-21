import React from "react";
import { Section, Heading, Container } from "../index";
import ListBlogPosts from "../ListBlogPosts";
import useFetch from "../../helpers/hooks/useFetch";
import Spinner from "../Vector/Spinner";

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
