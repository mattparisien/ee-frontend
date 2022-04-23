import { Box } from "@mui/material";
import React, { createContext, useState, useContext, useEffect } from "react";
import { BLOCKS } from ".";
import Container from "../../../Containers/ContainerFluid";
import Section from "../../../Containers/Section";
import { ProjectContext } from "../SingleProjectPage";

export const BlockContext = createContext();

function Block(props) {
	const { projectColor } = useContext(ProjectContext);

	const [state, setState] = useState({
		container: {
			disablePadding: false,
			maxWidth: "lg",
		},
		options: {
			theme: null,
			maxWidth: "lg",
			margin: {
				top: true,
				bottom: true,
			},
			padding: {
				x: true,
			},
		},
	});
	const padding = props.name === "FullBleedMediaBlock" ? 0 : 10;

	useEffect(() => {
		if (props.data.data && props.data.data.options) {
			const options = props.data.data.options;

			setState(prev => ({
				...prev,
				options: {
					...prev.options,
					theme: options[`${props.name.toLowerCase()}theme`],
					maxWidth: !options.fullBleed ? prev.options.maxWidth : false,
					margin: {
						top: !options.disableguttertop ? prev.options.margin.top : false,
						bottom: !options.disablegutterbottom
							? prev.options.margin.top
							: false,
					},
					padding: {
						x: true,
					},
				},
			}));
		} else if (props.name === "FullBleedMediaBlock") {
			setState(prev => ({
				...prev,
				options: {
					...prev.options,
					padding: {
						x: false,
					},
				},
			}));
		}
	}, []);

	// const setFullBleed = () => {
	// 	setState(prev => ({
	// 		...prev,
	// 		options: {
	// 			...prev.options,
	// 			maxWidth: false,
	// 			padding: {
	// 				...prev.options.padding,
	// 				x: false,
	// 			},
	// 		},
	// 	}));
	// };

	// const disableHorizontalPadding = () => {
	// 	setState(prev => ({
	// 		...prev,
	// 		options: {
	// 			...prev.options,
	// 			padding: {
	// 				...prev.options.padding,
	// 				x: false,
	// 			},
	// 		},
	// 	}));
	// };

	// const setFlippedLayout = () => {
	// 	setState(prev => ({
	// 		...prev,
	// 		container: {
	// 			...prev.container,
	// 			disablePadding: true,
	// 		},
	// 		blocks: {
	// 			...prev.blocks,
	// 			split: {
	// 				...prev.blocks.split,
	// 				flip: true,
	// 			},
	// 		},
	// 	}));
	// };

	// const setInset = () => {
	// 	setState(prev => ({
	// 		...prev,
	// 		container: {
	// 			...prev.container,
	// 			disablePadding: true,
	// 		},
	// 		blocks: {
	// 			...prev.blocks,
	// 			split: {
	// 				...prev.blocks.split,
	// 				inset: true,
	// 			},
	// 		},
	// 	}));
	// };

	// const controls = {
	// 	setFullBleed,
	// 	disableHorizontalPadding,
	// 	setFlippedLayout,
	// 	setInset,
	// };

	const blockStyles = { ...state.options };

	const verticalPaddingStyles = theme => ({
		padding: `${theme.spacing(10)} 0`,
		[theme.breakpoints.up("sm")]: {
			padding: `${theme.spacing(15)} 0`,
		},
		[theme.breakpoints.up("md")]: {
			padding: `${theme.spacing(20)} 0`,
		},
	});

	return (
		<BlockContext.Provider value={blockStyles}>
			<Section
				sectionTheme={
					state.options.theme === "currentColor"
						? projectColor
						: state.options.theme
				}
			>
				<Container
					disableGutters={state.container.disablePadding}
					maxWidth={state.options.maxWidth}
					sx={{
						padding:
							state.options && !state.options.padding.x && "0 !important",
					}}
				>
					<Box sx={verticalPaddingStyles}>
						{props.data &&
							React.createElement(BLOCKS[props.name], {
								key: props.id,
								data: props.data,
							})}
					</Box>
				</Container>
			</Section>
		</BlockContext.Provider>
	);
}

export default Block;
