import React, { forwardRef } from "react";
import styled from "styled-components";


const StyledContainer = styled.div`
	height: ${props => (props.$height && props.$height)};
	width: ${props => (props.$width ? props.$width : "100vw")};
	padding: ${props  => (props.$padding ? props.$padding : '4rem')};
	background-color: ${({ theme, $sectionTheme }) => {
		return (
			($sectionTheme === "banana" && theme.banana.backgroundColor) ||
			($sectionTheme === "night" && theme.night.backgroundColor) ||
			($sectionTheme === "clean" && theme.clean.backgroundColor)
		);
	}};
	color: ${({ theme, $sectionTheme }) => {
		return (
			($sectionTheme === "banana" && theme.banana.color) ||
			($sectionTheme === "night" && theme.night.color) ||
			($sectionTheme === "clean" && theme.clean.color)
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
