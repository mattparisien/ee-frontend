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
const ROWHEIGHTREPEAT = 50;
const ROWHEIGHTLAST = 30;
const GRIDOFFSET = 8;
const GRIDGAP = 4;

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
			columnArea: "7/13",
			rowArea: "3/4",
			offset: `-${GRIDOFFSET * 2}vw`,
			height: "50%",
		},
		{
			id: 4,
			columnArea: "2/8",
			rowArea: "3/4",
			offset: null,
		},
		{
			id: 5,
			columnArea: "7/13",
			rowArea: "4/5",
			offset: null,
			height: null,
		},
	],
};
const GRIDTWO = {
	ITEMS: [
		{
			id: 1,
			columnArea: "1/7",
			rowArea: "1/2",
			offset: null,
			height: null,
		},
		{
			id: 2,
			columnArea: "7/13",
			rowArea: "2/3",
			offset: `-${GRIDOFFSET}vw`,
			height: null,
		},
		{
			id: 3,
			columnArea: "1/7",
			rowArea: "3/4",
			offset: `-${GRIDOFFSET * 2}vw`,
			height: "50%",
		},
		{
			id: 4,
			columnArea: "6/13",
			rowArea: "3/4",
			offset: null,
		},
		{
			id: 5,
			columnArea: "1/7",
			rowArea: "4/5",
			offset: null,
			height: null,
		},
	],
};

const GRIDSTYLES = {
	general: {
		GRIDOFFSET,
		GRIDGAP,
		ROWHEIGHTREPEAT,
		ROWHEIGHTLAST,

		GRIDCOLUMNS,
	},
	GRIDONE,
	GRIDTWO,
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
						grid-template-rows: repeat(${
							amount.amount !== 1 ? amount.amount - 1 : amount.amount
						}, ${GRIDSTYLES.general.ROWHEIGHTREPEAT}vw) 30vw ;
						
					};

					${
						amount.amount === 1
							? `
				&:nth-of-type(${amount.id}) {
					li:nth-of-type(2) {
						margin-bottom: -${GRIDOFFSET}vw;
					}
				}
					`
							: ""
					};
					
					`;
			})
		);
	}};

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
		li {
			width: auto;
			height: auto;

			${GRIDSTYLES.GRIDONE.ITEMS.map(item => {
				return `
					&:nth-of-type(${item.id}) {
						grid-column: ${item.columnArea};
						grid-row: ${item.rowArea};
						${item.height ? `height: ${item.height}` : ""};
						${item.offset ? `transform: translateY(${item.offset})` : ""};
						
					};

					
					`;
			})};
		}
	}

	&:nth-of-type(even) {
		li {
			width: auto;
			height: auto;

			${GRIDSTYLES.GRIDTWO.ITEMS.map(item => {
				return `
					&:nth-of-type(${item.id}) {
						grid-column: ${item.columnArea};
						grid-row: ${item.rowArea};
						${item.height ? `height: ${item.height}` : ""};
						${item.offset ? `transform: translateY(${item.offset})` : ""};
					}
					`;
			})};
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

	useEffect(() => {
		console.log(rowAmount);
	}, [rowAmount]);

	return (
		<Section bg={"light"}>
			<Container padding={"5vw"} height='auto'>
				<StyledProjectsGrid listItems={projects} rowAmounts={rowAmount} />
			</Container>
		</Section>
	);
}

export default Projects;
