import classNames from "classnames";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

const StyledContainer = styled(Container)`
	height: ${({height}) => height ? height : "100vh"};
	
	width: 100%;
`;

const StyledVerticalGutterContainer = styled(Box)`
	${({ theme, headerOffset }) => theme.spacing(4, "padding-top")}
	${({ theme, headerOffset }) => theme.spacing(4, "padding-bottom")}
`;

function ContainerFluid(props, ref) {
	const containerClass = classNames("Container", props.classes);

	return (
		<StyledContainer {...props} maxWidth='xl' className='Container'>
			{!props.noVerticalGutter ? (
				<StyledVerticalGutterContainer className='vertical-gutter-container'>
					{props.children}
				</StyledVerticalGutterContainer>
			) : props.children}
		</StyledContainer>
	);
}

export default forwardRef(ContainerFluid);
