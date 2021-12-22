import React, { forwardRef } from "react";
import styled from "styled-components";
import { device } from "../styles/device";

const StyledContainer = styled.div`
	position: ${props => (props.isAbsolute ? "absolute" : "relative")};
	top: ${props => (props.isAbsolute ? "0" : "")};
	left: ${props => (props.isAbsolute ? "0" : "")};
	z-index: ${props => (props.isBelow ? "-1" : props.isAbove ? "1" : "")};
	clip-path: ${props => (props.clipTo ? `url(${props.clipTo})` : "")};
	padding: ${({ $padding }) => $padding === 'small' && '4vw'};

	${({ $paddingVerticalNone }) => {
		return (
			$paddingVerticalNone &&
			`
		 	padding-top: 0px !important;
		 	padding-bottom: 0px !important;
		 `
		);
	}}

	min-height: ${props => (props.$height ? "" : "100vh")};
	height: ${props => props.$height && props.$height};
	width: ${props => (props.$width ? props.$width : "100vw")};
	background-color: ${props => (props.isCustomBg ? props.isCustomBg : "")};
	color: ${({ theme, $bg }) => {
		return (
			($bg === "light" && theme.colors.dark) ||
			($bg === "dark" && theme.colors.light)
		);
	}};
	${({ $isBelow, $isAbove }) => {
		return `position: ${$isBelow ? "absolute" : ""};
			 			bottom: ${$isBelow ? "0" : ""};
						z-index: ${$isBelow ? "-1" : ""}
			`;
	}};

	${({ $centerInner }) => {
		return `
 ${
		$centerInner
			? `
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
 `
			: `display: block`
 }
`;
	}}
`;

export { StyledContainer };
