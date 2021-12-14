import React, { forwardRef } from "react";
import styled from "styled-components";
import { device } from "./device";

const StyledContainer = styled.div`
	height: ${props => props.$height ? props.$height : '100%'};
	width: ${props => (props.$width ? props.$width : "100vw")};
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
	${({ $isBelow, $isAbove }) => {
		return `position: ${$isBelow ? "absolute" : ""};
			 			bottom: ${$isBelow ? "0" : ""};
						z-index: ${$isBelow ? "-1" : ""}
			`;
	}};

	@media ${device.mobileS} {
	};

	@media ${device.mobileM} {
	
	};

	@media ${device.mobileL} {
	
	};

	@media ${device.tablet} {
	
	};

	@media ${device.laptop} {
		padding: 2rem 10rem;
	};

	@media ${device.laptopL} {
		padding: 2rem 12rem;
	};

	@media ${device.desktop} {
		padding: 10rem;
	};

	@media ${device.desktopL} {
		padding: 10rem;
	} ;
`;

export { StyledContainer };
