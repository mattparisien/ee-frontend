import React, { forwardRef } from "react";
import styled from "styled-components";


const StyledContainer = styled.div`
	height: ${props => (props.$height && props.$height)};
	width: ${props => (props.$width ? props.$width : "100vw")};
	padding: ${props  => (props.$padding ? props.$padding : '4rem')};
	background-color: ${({ theme, $bg}) => {
		return (
			($bg === "light" && theme.colors.light) ||
			($bg === "dark" && theme.colors.dark)  
		);
	}};

	${({ $isBelow, $isAbove }) => {
		return `position: ${$isBelow ? "absolute" : ""};
			 			bottom: ${$isBelow ? "0" : ""};
						z-index: ${$isBelow ? '-1' : ''}
			`;
	}}
`;

export { StyledContainer };
