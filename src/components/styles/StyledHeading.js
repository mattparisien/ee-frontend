import styled from "styled-components";

const StyledHeading = styled.div`
    ${({ $headingStyles, theme }) => {
			return (
				($headingStyles.color &&
					`color: ${theme.colors[$headingStyles.color]};`) ||
				($headingStyles.size && `font-size: ${$headingStyles.size}`)
			);
		}}
  }}
`;

export { StyledHeading };
