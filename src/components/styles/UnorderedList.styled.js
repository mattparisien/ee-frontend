import styled from "styled-components";

const StyledUnorderedList = styled.ul`
	${({ $styles }) => {
		return `
      text-align:  ${$styles.textAlign && $styles.textAlign};
      display: flex;
      flex-direction: ${$styles.layout === "stacked" ? "column" : "row"};
      width: 100%;
    `;
	}}
`;

export { StyledUnorderedList };
