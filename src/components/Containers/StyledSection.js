import styled from "styled-components";
import { device } from "../styles/device";

const StyledSection = styled.section`
	${({ theme, headerOffset }) =>
		headerOffset && theme.spacing(4, "padding-top")};
	height: ${({ height }) => (height ? height : "auto")};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : "auto")};
	position: ${props => (props.isRelative ? "relative" : "inherit")};

	background-color: ${({ theme, $bg }) => {
		return (
			($bg === "light" && theme.colors.light) ||
			($bg === "dark" && theme.colors.dark)
		);
	}};
	color: ${({ theme, $bg }) => {
		return (
			($bg === "light" && theme.colors.dark) ||
			($bg === "dark" && theme.colors.light)
		);
	}};
`;

export { StyledSection };
