import styled from "styled-components";

export const StyledUnorderedList = styled.ul`
	text-align: ${props => props.textAlign && props.textAlign};
	display: flex;
	flex-direction: ${props => props.stacked ? 'column' : props.side && 'row'};
	align-items: ${props => props.alignCenter && 'center'};
	justify-content: ${props => props.justifyCenter && 'center'};
	width: 100%;

	li, li a {
		font-size: ${props => props.baseFontSize};
	}

`;
