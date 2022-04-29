import { Box } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";
import { BLOCKS } from ".";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Container from "../Containers/ContainerFluid";
import Section from "../Containers/Section";

export const BlockContext = createContext();

function Block(props) {
	const [state, setState] = useState({
		container: true,
		theme: null,
		marginTop: true,
		marginBottom: true,
		paddingX: true,
		paddingY: true,
	});

	useEffect(() => {
		let container = true;

		if (props.name.startsWith("FullBleed")) {
			container = false;
		}

		setState(() => ({
			container: container,
			theme:
				props.data.options && props.data.options.theme
					? props.data.options.theme
					: null,
			marginTop: props.data.options
				? !props.data.options.DisableGutterTop
				: true,
			marginBottom: props.data.options
				? !props.data.options.DisableGutterBottom
				: true,
			paddingX: props.name.startsWith("SplitTextMedia") ? false : true,
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
			<Section
				sectionTheme={state.theme}
				disableMarginTop={!state.marginTop}
				disableMarginBottom={!state.marginBottom}
				blockName={props.name}
			>
				<ConditionalWrapper
					condition={state.container}
					wrapper={children => (
						<Container
							disableGutters={!state.paddingX}
							disablePaddingY={!state.paddingY}
						>
							{children}
						</Container>
					)}
				>
					<ConditionalWrapper
						wrapper={children => (
							<Box sx={verticalPaddingStyles}>{children}</Box>
						)}
						condition={props.name !== "FullBleedMediaBlock"}
					>
						{props.data &&
							React.createElement(BLOCKS[props.name], {
								key: props.id,
								data: props.data,
							})}
					</ConditionalWrapper>
				</ConditionalWrapper>
			</Section>
		</BlockContext.Provider>
	);
}

export default Block;
