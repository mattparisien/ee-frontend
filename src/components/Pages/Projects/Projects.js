import React, { useEffect, useState } from "react";
import { Container, Heading, Section } from "../..";
import styled from "styled-components";
import ImageList from "../../ImageList/ImageList";
import { useContext } from "react";
import { DataContext } from "../../Containers/Temp/Authenticated";
import { formatImageList } from "../../../helpers/formatData";
import { deviceSize } from "../../styles/device";
import divideArray from "../../Grid/helpers/divideArray";

const GRIDOFFSET = `8`;
const GRIDGAP = "4vw";

const StyledProjectsGrid = styled(ImageList)`
	display: grid;
	grid-gap: ${GRIDGAP};
	height: auto;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(4, 50vw);

	@media only screen and (max-width: ${deviceSize.mobileL}px) {
		grid-column: 1/13 !important;
		grid-row: repeat(10, 200px);
		transform: none !important;
	}

	li {
		width: auto;
		height: auto;

		&:nth-of-type(1) {
			grid-column: 7/13;
			grid-row: 1/2;
		}

		&:nth-of-type(2) {
			grid-column: 1/7;
			grid-row: 2/3;
			transform: translateY(-${GRIDOFFSET}vw);
		}

		&:nth-of-type(3) {
			grid-column: 7/13;
			grid-row: 3/4;
			height: 50%;
			transform: translateY(-${GRIDOFFSET * 2}vw);
			z-index: 3;
		}

		&:nth-of-type(4) {
			grid-column: 2/8;
			grid-row: 3/4;

			transform: translateY(-100%});
		}

		&:nth-of-type(5) {
			height: 60%;
			grid-column: 7/13;
			grid-row: 4/5;
		}
	}
`;

function Projects(props) {
	const { posts } = useContext(DataContext);
	const [projects, setProjects] = useState(null);

	useEffect(() => {
		if (posts) {
			const formattedProjects = formatImageList(posts);
			const dividedGridItems = divideArray(formattedProjects, 5);
			setProjects(dividedGridItems);
		}
		// posts && setProjects(formatImageList(posts));
	}, [posts]);

	return (
		<Section bg={"light"}>
			<Section bg={"light"}>
				<Container padding={"5vw"} height='auto'>
					<StyledProjectsGrid listItems={projects} />
				</Container>
			</Section>
		</Section>
	);
}

export default Projects;
