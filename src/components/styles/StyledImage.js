import React, { forwardRef } from "react";
import styled from "styled-components";

const StyledImage = styled.div`
	position: relative;
	width: ${props => (props.$width ? props.$width : "100%")};
	height: ${props => (props.$height ? props.$height : "100%")};
	overflow: "hidden";

	.image {
		background-image: url(${({ $props }) =>
			$props.url
				? $props.url
				: "https://images.pexels.com/photos/9876016/pexels-photo-9876016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"});
		background-position: 50% 50%;
		background-repeat: "no-repeat";
		background-size: 200%;
		width: 100%;
		height: 100%;
	}

	.image-overlay {
		opacity: ${({ $props }) => {
			return $props.device === "desktop" && $props.isHovered
				? "1"
				: $props.device === "mobile"
				? "1"
				: "0";
		}};
		transition: 300ms ease;
	}
`;

export default StyledImage;
