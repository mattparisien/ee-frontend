import styled from "styled-components";
import { device } from "../styles/device";
import { CONTAINERMAXWIDTH } from "../styles/Global";
import { themes } from "../../helpers/hooks/useAppData";
import { map } from "lodash";
import { render } from "react-three-fiber";

const StyledContainer = styled.div`
	overflow: visible;
	max-width: ${CONTAINERMAXWIDTH};
	margin: 0 auto;
	position: ${props => (props.isAbsolute ? "absolute" : "relative")};
	top: ${props => (props.isAbsolute ? "0" : "")};
	left: ${props => (props.isAbsolute ? "0" : "")};
	z-index: ${props => (props.isBelow ? "-1" : props.isAbove ? "1" : "")};
	clip-path: ${props => (props.clipTo ? `url(${props.clipTo})` : "")};

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

	${({ $centerInner, flexDirection }) => {
		return `
 ${
		$centerInner
			? `
			display: flex;
			flex-direction: ${flexDirection && flexDirection};
			align-items: center;
			justify-content: center;
 `
			: `display: block`
 }
`;
	}};
`;

export { StyledContainer };
