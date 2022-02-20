import React, { useEffect, useState } from "react";
import { Container, Heading, Section } from "../..";
import styled from "styled-components";
import ImageList from "../../ImageList/ImageList";
import { useContext } from "react";
import { DataContext } from "../../Containers/Temp/Authenticated";
import { formatImageList } from "../../../helpers/formatData";

const StyledProjectsGrid = styled(ImageList)`
	display: grid;
`;

function Projects(props) {
	const { posts } = useContext(DataContext);
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		posts && setProjects(formatImageList(posts));
	}, [posts]);

	return (
		<Section bg={"light"}>
			<Container>
				<Heading xl>Our work</Heading>
			</Container>
			<Section>
				<Container padding={"5vw"} bg={"light"}>
					<StyledProjectsGrid listItems={projects} />
				</Container>
			</Section>
		</Section>
	);
}

export default Projects;
