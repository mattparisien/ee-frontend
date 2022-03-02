import React, { useEffect, useState } from "react";
import { Heading, Section } from "../..";
import ContainerFluid from "../../Containers/ContainerFluid";
// import styled from "styled-components";
import ImageList from "../../ImageList/ImageList";
import { useContext } from "react";
import { DataContext } from "../../Containers/Temp/Authenticated";
import { formatImageList } from "../../../helpers/formatData";
import { device } from "../../styles/device";
import divideArray from "../../Grid/helpers/divideArray";
import { MOBILEIMAGELISTITEMHEIGHT } from "../../styles/Global";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import styled from "styled-components";
import InView from "react-intersection-observer";
import gsap from "gsap";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import Paragraph from "../../Text/Paragraph";
import { shuffleColors } from "../../../helpers/shuffleColors";

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

li {
	background-color: ${({theme}) => theme.colors.light};
}





@media ${device.mobileL} {
	display: grid;
	grid-gap: ${GRIDSTYLES.general.GRIDGAP}vw;
	height: auto;

	${({ rowAmounts }) => {
		return (
			rowAmounts &&
			rowAmounts.map(amount => {
				return `

				&:nth-of-type(${amount.id}) {
					grid-template-rows: repeat(${amount.amount}, ${MOBILEIMAGELISTITEMHEIGHT});
				};


					@media ${device.mobileL} {

					&:nth-of-type(${amount.id}) {
						grid-template-rows: repeat(${
							amount.amount !== 1 ? amount.amount - 1 : amount.amount
						}, ${GRIDSTYLES.general.ROWHEIGHTREPEAT}vw) 30vw ;
					};

					}


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

	li {
		width: auto;
		height: auto;
	}

	@media ${device.mobileL} {

		grid-template-columns: repeat(
			${GRIDSTYLES.general.GRIDCOLUMNS.amount},
			${GRIDSTYLES.general.GRIDCOLUMNS.fraction}fr
		);
	
		

		&:nth-of-type(odd) {
			li {
		
	
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
		}
	}
	}

	
`;

function Card({ data: { id, title, subtitle, image } }) {
	return (
		<div>
			<img src={image.src}></img>
		</div>
	);
}

const Title = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	text-transform: uppercase;
	${({ theme }) => theme.spacing(2, "padding")};
	${({ theme }) => theme.typography.setSize(2)};

	.Title__inner {
		width: 100%;
		height: 100%;
		position: relative;

		&::after {
			position: absolute;
			content: "";
			left: 0;
			bottom: 0;
			width: 100%;
			height: 1px;
			background-color: ${({ theme }) => theme.colors.dark};
			transform-origin: left;
			transform: scaleX(0);
			transition: 500ms ease;
		}
	}
`;

const Item = styled.div`
	position: relative;
	height: 50vw;

	color: ${({ theme }) => theme.colors.dark};

	.Item__link {
		display: flex !important;
		align-items: center;
		justify-content: center;

		&:hover .Title__inner::after {
			transform: scaleX(1);
		}

		&:hover .image-wrapper img {
			transform: scale(1.1);
		}

		&:hover .image-wrapper {
			filter: brightness(100%);
		}

		&:hover .item-background {
			filter: brightness(100%);
		}
	}

	.item-background {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		z-index: -1;
		background-color: ${({ color }) => color};
		filter: brightness(75%);
		transition: 800ms ease;
	}

	.image-wrapper {
		width: 100%;
		height: 100%;
		overflow: hidden;
		transition: 800ms ease;
		filter: brightness(60%);
		transform: scale(0.5);

		img {
			object-fit: cover;
			transition: 800ms ease;
		}
	}
`;

const PreviewText = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 50%;
	${({ theme }) => theme.spacing(2, "padding-left")};
`;

const GridWrapper = styled(Grid)``;

function Projects(props) {
	const { posts } = useContext(DataContext);
	const [projects, setProjects] = useState(null);
	const [masonryProjects, setMasonryProjects] = useState(null);
	const [rowAmount, setRowAmount] = useState([]);
	const [delay, setDelay] = useState(0.1);
	const [intersecting, setIntersecting] = useState(false);
	const theme = useTheme();

	// useEffect(() => {
	// 	if (intersecting) {
	// 		if (delay === 0.1) {
	// 			setDelay(0.2);
	// 		}

	// 		if (delay === 0.2) {
	// 			setDelay(0.1);
	// 		}

	// 		gsap.to($(intersecting).parent(), {
	// 			y: 0,
	// 			opacity: 1,
	// 			duration: 1,
	// 		});
	// 	}
	// }, [intersecting]);
	const [itemColors, setItemColors] = useState(null);

	useEffect(() => {
		if (!itemColors && posts) {
			const array = [];
			for (let i = 0; i < posts.length; i++) {
				array.push(shuffleColors(theme));
			}

			setItemColors(array);
		}

		if (posts) {
			console.log(itemColors);
			const formattedProjects = formatImageList(posts);
			const dividedGridItems = divideArray(formattedProjects, 5);

			setMasonryProjects(formattedProjects);
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
		<>
			<StyledProjectsGrid
				listItems={projects}
				rowAmounts={rowAmount}
				direction='vertical'
			/>
		</>
	);
}

export default Projects;
