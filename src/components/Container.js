import React from "react";
import classNames from "classnames";
import { useEffect } from "react/cjs/react.development";
import $ from "jquery";
import { StyledContainer } from "./styles/StyledContainer.styled.js";

export default function Container(props) {
	const containerClass = classNames("styled-object-container", props.classes);

	return (
		<StyledContainer
			$padding={props.padding}
			$height={props.height}
			$width={props.width}
			$bg={props.bg}
			className={containerClass}
		>
			{props.children}
		</StyledContainer>
	);
}
