import styled from "styled-components";

const StyledSection = styled.section`
	min-height: ${({ isFullHeight }) => isFullHeight && "100vh"};
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
