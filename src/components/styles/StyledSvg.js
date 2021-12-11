import styled from "styled-components";

const StyledSvg = styled.div`
	svg {
		${({ $svgStyles, theme }) => {
			return `
				position: ${$svgStyles.position};
				transform: ${$svgStyles.transform};
				width: ${$svgStyles.width};
				height: ${$svgStyles.height};
				fill: ${theme.colors[$svgStyles.fill]};
				`;
		}}
	}

	#trumpet {
		transform: translate(-10vw, 10vw)scale(-1, -1)rotate(-30deg);
	}
`;
export { StyledSvg };
