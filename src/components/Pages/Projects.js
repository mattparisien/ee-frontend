import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import Container from "../Container";
import ListBlogPosts from "../ListBlogPosts";

function Projects() {
	return (
		<div>
			<Section>
				<Container>
					<Heading xl>Our work</Heading>
				</Container>
				<Section>
					<Container>
					<ListBlogPosts />
					</Container>
						
					
				</Section>
			</Section>
		</div>
	);
}

export default Projects;
