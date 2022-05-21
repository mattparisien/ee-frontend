import React, { createContext, useEffect, useState } from "react";
import { BLOCKS } from ".";
import ConditionalWrapper from "../Containers/ConditionalWrapper";
import Container from "../Containers/ContainerFluid";
import Section from "../Containers/Section";

export const BlockContext = createContext();

function Block(props) {
	console.log(props);

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

		if (
			props.component.startsWith("FullBleed") &&
			props.data.Options &&
			!props.data.Options.Inset
		) {
			container = false;
		}

		setState(() => ({
			container: container,
			theme:
				props.data.Options && props.data.Options.Theme
					? props.data.Options.Theme
					: null,
			marginTop: props.data.Options
				? !props.data.Options.DisableGutterTop
				: true,
			marginBottom: props.data.Options
				? !props.data.Options.DisableGutterBottom
				: true,
			paddingX: props.component.startsWith("SplitTextMedia") ? false : true,
		}));
	}, []);

	const padding = props.component === "FullBleedMediaBlock" ? 0 : 10;

	return (
		<BlockContext.Provider value={{ ...state }}>
			<Section
				sectionTheme={state.theme}
				disableMarginTop={!state.marginTop}
				disableMarginBottom={!state.marginBottom}
				blockName={props.__component}
			>
				<div className={`Block Block_${props.component}`}>
					<ConditionalWrapper
						condition={state.container}
						wrapper={children => (
							<Container
								disableGutters={!state.paddingX}
								disablePaddingY={!state.paddingY}
								maxWidth="small"
							>
								{children}
							</Container>
						)}
					>
						<div
							className={`${
								props.component !== "FullBleedMediaBlock"
									? "py-5 md:py-10 lg:py-14"
									: ""
							}`}
						>
							{/* <ConditionalWrapper
						wrapper={children => (
							<Box sx={verticalPaddingStyles}>{children}</Box>
						)}
						condition={props.name !== "FullBleedMediaBlock"}
					> */}
							{props.data &&
								React.createElement(BLOCKS[props.component], {
									data: props.data,
								})}
						</div>
					</ConditionalWrapper>
					{/* </ConditionalWrapper> */}
				</div>
			</Section>
		</BlockContext.Provider>
	);
}

export default Block;
