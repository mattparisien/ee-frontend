import React from "react";
import classNames from "classnames";
import { StyledContainer } from "./styles/StyledContainer.styled.js";

export default function Container(props) {
	const containerClass = classNames("styled-object-container", props.classes);

	return (
		<StyledContainer
			ref={props.addToRefs}
			$padding={props.padding}
			$height={props.height}
			$width={props.width}
			$centerInner={props.centerInner}
			$paddingVerticalNone={props.paddingVerticalNone}
			className={containerClass}
		>
			{props.children}
		</StyledContainer>
	);
}
