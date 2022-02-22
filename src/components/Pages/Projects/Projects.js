import React, { useEffect, useState } from "react";
import { Container, Heading, Section } from "../..";
import styled from "styled-components";
import ImageList from "../../ImageList/ImageList";
import { useContext } from "react";
import { DataContext } from "../../Containers/Temp/Authenticated";
import { formatImageList } from "../../../helpers/formatData";
import { deviceSize } from "../../styles/device";
import divideArray from "../../Grid/helpers/divideArray";
import { getTabId } from "@mui/base";

const GRIDOFFSET = `8`;
const GRIDGAP = "4";
const ROWHEIGHT = "50";
const ULTRANSLATE = (0.6 * ROWHEIGHT - 10 - GRIDGAP);

const StyledProjectsGrid = styled(ImageList)`
	display: grid;
	grid-gap: ${GRIDGAP}vw;
	height: auto;
	grid-template-columns: repeat(12, 1fr);

	${({ rowAmounts }) => {
		return (
			rowAmounts &&
			rowAmounts.map(amount => {
				return `
					&:nth-of-type(${amount.id}) {
						grid-template-rows: repeat(${amount.amount}, ${ROWHEIGHT}vw);
						
					}
					
					`;
			})
		);
	}};

	:not(:first-of-type) {
		transform: translateY(-${ULTRANSLATE}vw);
	}

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
	const [rowAmount, setRowAmount] = useState([]);

	useEffect(() => {
		if (posts) {
			const formattedProjects = formatImageList(posts);
			const dividedGridItems = divideArray(formattedProjects, 5);
			setProjects(dividedGridItems);

			dividedGridItems.map((grid, i) => {
				return setRowAmount(prev => [
					...prev,
					{
						id: (i += 1),
						//-1 to make up for offset
						amount: grid.length - 1,
					},
				]);
			});
		}
	}, [posts]);

	return (
		<Section bg={"light"}>
			<Section bg={"light"}>
				<Container padding={"5vw"} height='auto'>
					<StyledProjectsGrid listItems={projects} rowAmounts={rowAmount} />
				</Container>
			</Section>
		</Section>
	);
}

export default Projects;
