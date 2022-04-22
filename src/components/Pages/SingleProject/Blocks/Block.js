import { Box } from "@mui/material";
import React, { createContext, useState, useContext } from "react";
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
		blocks: {
			split: {
				flip: false,
				inset: false,
			},
		},
	});
	const padding = props.name === "FullBleedMediaBlock" ? 0 : 10;

	const setFullBleed = () => {
		setState(prev => ({
			...prev,
			container: {
				...prev.container,
				maxWidth: false,
				disablePadding: true,
			},
		}));
	};

	const disablePadding = () => {
		setState(prev => ({
			...prev,
			container: {
				...prev.container,
				disablePadding: true,
			},
		}));
	};

	const setFlippedLayout = () => {
		setState(prev => ({
			...prev,
			container: {
				...prev.container,
				disablePadding: true,
			},
			blocks: {
				...prev.blocks,
				split: {
					...prev.blocks.split,
					flip: true,
				},
			},
		}));
	};

	const setInset = () => {
		setState(prev => ({
			...prev,
			container: {
				...prev.container,
				disablePadding: true,
			},
			blocks: {
				...prev.blocks,
				split: {
					...prev.blocks.split,
					inset: true,
				},
			},
		}));
	};

	const controls = {
		setFullBleed,
		disablePadding,
		setFlippedLayout,
		setInset,
	};

	const styles = {
		flip: state.blocks.split.flip,
		inset: state.blocks.split.inset,
	};

	const verticalPaddingStyles = theme => ({
		padding: `${theme.spacing(10)} 0`,
		[theme.breakpoints.up("sm")]: {
			padding: `${theme.spacing(15)} 0`
		},
		[theme.breakpoints.up("md")]: {
			padding: `${theme.spacing(20)} 0`
		}
		
	})

	return (
		<BlockContext.Provider value={Object.assign({}, controls, styles)}>
			<Section
				sectionTheme={
					props.data.theme === "currentColor"
						? projectColor
						: props.data.theme
				}
			>
				<Container
					fullBleed={props.name.startsWith("FullBleed")}
					disableGutters={state.container.disablePadding}
					maxWidth={state.container.maxWidth}
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
