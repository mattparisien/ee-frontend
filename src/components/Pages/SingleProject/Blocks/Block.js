import { Box } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";
import { BLOCKS } from ".";
import ConditionalWrapper from "../../../Containers/ConditionalWrapper";
import Container from "../../../Containers/ContainerFluid";
import Section from "../../../Containers/Section";
import { ProjectContext } from "../SingleProjectPage";

export const BlockContext = createContext();

function Block(props) {
	const { projectColor } = useContext(ProjectContext);
	const [state, setState] = useState({
		container: true,
	});

	useEffect(() => {
		let container = true;

		if (props.name.startsWith("FullBleed")) {
			container = false;
		} else if (props.name.startsWith("SplitTextMedia")) {
			container = false;
		}

		setState(() => ({
			container: container,
			theme: props.theme,
		}));
	}, []);

	const padding = props.name === "FullBleedMediaBlock" ? 0 : 10;

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
		<BlockContext.Provider value={{ theme: state.theme }}>
			<Section sectionTheme={state.theme}>
				<ConditionalWrapper
					condition={state.container}
					wrapper={children => <Container>{children}</Container>}
				>
					<Box sx={verticalPaddingStyles}>
						{props.data &&
							React.createElement(BLOCKS[props.name], {
								key: props.id,
								data: props.data,
							})}
					</Box>
				</ConditionalWrapper>
			</Section>
		</BlockContext.Provider>
	);
}

export default Block;
