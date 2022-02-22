import React, { useEffect, useState } from "react";
import { Container, Heading, Section } from "../..";
import styled from "styled-components";
import ImageList from "../../ImageList/ImageList";
import { useContext } from "react";
import { DataContext } from "../../Containers/Temp/Authenticated";
import { formatImageList } from "../../../helpers/formatData";
import { deviceSize } from "../../styles/device";
import divideArray from "../../Grid/helpers/divideArray";

//General styles constants
const ROWHEIGHT = 50;
const GRIDOFFSET = 8;
const GRIDGAP = 4;
const ULTRANSLATE = 0.6 * ROWHEIGHT - 10 - GRIDGAP;
const GRIDCOLUMNS = {
	amount: 12,
	fraction: 1,
};
//Grid rows determined by amount of items in each array

//Grid one styles
const GRIDONE = {
	ITEMS: [
		{
			id: 1,
			columnArea: "7/13",
			rowArea: "1/2",
			offset: null,
			height: null,
		},
		{
			id: 2,
			columnArea: "1/7",
			rowArea: "2/3",
			offset: `-${GRIDOFFSET}vw`,
			height: null,
		},
		{
			id: 3,
			columnArea: "1/7",
			rowArea: "2/3",
			offset: `-${GRIDOFFSET * 2}vw`,
			height: "50%",
		},
		{
			id: 4,
			columnArea: "2/8",
			rowArea: "3/4",
			offset: "-100%",
		},
		{
			id: 5,
			columnArea: "7/13",
			rowArea: "4/5",
			offset: null,
			height: "60%",
		},
	],
};

const GRIDSTYLES = {
	general: {
		GRIDOFFSET,
		GRIDGAP,
		ROWHEIGHT,
		ULTRANSLATE,
		GRIDCOLUMNS,
	},
	GRIDONE,
};

const StyledProjectsGrid = styled(ImageList)`
	display: grid;
	grid-gap: ${GRIDSTYLES.general.GRIDGAP}vw;
	height: auto;
	grid-template-columns: repeat(
		${GRIDSTYLES.general.GRIDCOLUMNS.amount},
		${GRIDSTYLES.general.GRIDCOLUMNS.fraction}fr
	);

	${({ rowAmounts }) => {
		return (
			rowAmounts &&
			rowAmounts.map(amount => {
				return `
					&:nth-of-type(${amount.id}) {
						grid-template-rows: repeat(${amount.amount}, ${GRIDSTYLES.general.ROWHEIGHT}vw);
						
					}
					
					`;
			})
		);
	}};

	:not(:first-of-type) {
		transform: translateY(-${GRIDSTYLES.general.ULTRANSLATE}vw);
	}

	@media only screen and (max-width: ${deviceSize.mobileL}px) {
		grid-column: 1/13 !important;
		grid-row: repeat(10, 200px);
		transform: none !important;
	}

	li {
		width: auto;
		height: auto;
	}

	&:nth-of-type(odd) {
	}

	li {
		width: auto;
		height: auto;

		${GRIDSTYLES.GRIDONE.ITEMS.map(item => {
			return `
				&:nth-of-type(${item.id}) {
					grid-column: ${item.columnArea};
					grid-row: ${item.rowArea};
					${item.height && `height: ${item.height}`};
					${item.offset && `transform: translateY(${item.offset})`};
				}
				`;
		})};

		// &:nth-of-type(1) {
		// 	grid-column: 7/13;
		// 	grid-row: 1/2;
		// }

		// &:nth-of-type(2) {
		// 	grid-column: 1/7;
		// 	grid-row: 2/3;
		// 	transform: translateY(-${GRIDSTYLES.general.GRIDOFFSET}vw);
		// }

		// &:nth-of-type(3) {
		// 	grid-column: 7/13;
		// 	grid-row: 3/4;
		// 	height: 50%;
		// 	transform: translateY(-${GRIDSTYLES.general.GRIDOFFSET * 2}vw);
		// 	z-index: 3;
		// }

		// &:nth-of-type(4) {
		// 	grid-column: 2/8;
		// 	grid-row: 3/4;
		// 	transform: translateY(-100%});
		// }

		// &:nth-of-type(5) {
		// 	height: 60%;
		// 	grid-column: 7/13;
		// 	grid-row: 4/5;
		// }
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
			<Container padding={"5vw"} height='auto'>
				<StyledProjectsGrid listItems={projects} rowAmounts={rowAmount} />
			</Container>
		</Section>
	);
}

export default Projects;
