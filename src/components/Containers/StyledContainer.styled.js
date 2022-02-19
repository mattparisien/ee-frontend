import React, { forwardRef } from "react";
import styled from "styled-components";
import { device } from "../styles/device";
import { CONTAINERMAXWIDTH } from "../styles/Global";

const verticalGutter = {
	desktopL: {
		padding: "14vw",
	},
	desktop: {
		padding: "10vw",
	},
	laptopL: {
		padding: "15vw",
	},
	laptop: {
		padding: "12vw",
	},
	tablet: {
		padding: "9vw",
	},
	mobileL: {
		padding: "6vw",
	},
	mobileM: {
		padding: "4rem",
	},
	mobileS: {
		padding: "4rem",
	},
};

const horizontalGutter = {
	desktopL: {
		padding: "14vw",
	},
	desktop: {
		padding: "10vw",
	},
	laptopL: {
		padding: "15vw",
	},
	laptop: {
		padding: "12vw",
	},
	tablet: {
		padding: "9vw",
	},
	mobileL: {
		padding: "6vw",
	},
	mobileM: {
		padding: "4rem",
	},
	mobileS: {
		padding: "4rem",
	},
};

export const responsiveGutter = {
	horizontal: horizontalGutter,
	vertical: verticalGutter,
};

const StyledContainer = styled.div`
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
	}}

	${({ noGutter, hasPaddingVertical }) => {
		return !noGutter
			? Object.keys(device).map(deviceName => {
					return `@media ${device[deviceName]} {
											padding: ${
												hasPaddingVertical
													? responsiveGutter["horizontal"][deviceName][
															"padding"
													  ]
													: `0 ${responsiveGutter["horizontal"][deviceName]["padding"]}`
											};
											
										}`;
			  })
			: "";
	}}

	${({ isAbsoluteCenter }) => {
		return isAbsoluteCenter
			? `
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			`
			: "";
	}}
`;

export { StyledContainer };
