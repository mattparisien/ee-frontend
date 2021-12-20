import React, { forwardRef } from "react";
import styled from "styled-components";
import { deviceSize } from "./device";

const StyledImage = styled.div`
	width: ${props => (props.$width ? props.$width : "100%")};
	height: ${props => (props.$height ? props.$height : "100%")};
	overflow: hidden;
	position: relative;
	.image {
		overflow: hidden;
		background-image: url(${({ $props }) =>
			$props.url.startsWith("http")
				? $props.url
				: process.env.REACT_APP_API_URL + $props.url});
		background-position: 50% 50%;
		background-repeat: "no-repeat";
		background-size: 200%;
		width: 100%;
		height: 100%;
		transition: 300ms ease;
	}

	.image-overlay {
		opacity: ${({ $props }) => {
			return $props.windowWidth > deviceSize.laptop && $props.isHovered
				? "1"
				: $props.windowWidth <= deviceSize.laptop
				? "1"
				: "0";
		}};
		transition: 300ms ease;

		.title,
		.subtitle {
			color: white;
			z-index: 2;
		}

		.bg {
			background-color: black;
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			opacity: 0.5;
			z-index: -1;
		}
	}
`;

export default StyledImage;
