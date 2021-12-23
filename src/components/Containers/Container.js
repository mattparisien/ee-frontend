import React from "react";
import classNames from "classnames";
import { StyledContainer } from "./StyledContainer.styled";

export default function Container(props) {
	const containerClass = classNames("styled-object-container", props.classes);

	return (
		<StyledContainer
			ref={props.addToRefs}
			padding={props.padding}
			$height={props.height}
			$width={props.width}
			$centerInner={props.centerInner}
			$paddingVerticalNone={props.paddingVerticalNone}
			className={containerClass}
			isBelow={props.isBelow}
			isAbove={props.isAbove}
			isAbsolute={props.isAbsolute}
			clipTo={props.clipTo}
			isCustomBg={props.isCustomBg}
		>
			{props.children}
		</StyledContainer>
	);
}
