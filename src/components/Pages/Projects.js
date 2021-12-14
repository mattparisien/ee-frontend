import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import Container from "../Container";
import ListBlogPosts from "../ListBlogPosts";

function Projects(props) {

	const { addToRefs } = props;

	return (
		<div className="projects-page page-wrap" ref={addToRefs}>
			<Section bg={"light"}>
				<Container>
					<Heading xl>Our work</Heading>
				</Container>
				<Section>
					<Container padding={'5vw'} bg={"light"}>
						<ListBlogPosts />
					</Container>
				</Section>
			</Section>
		</div>
	);
}

export default Projects;
