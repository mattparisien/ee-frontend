import React, { forwardRef } from "react";
import classNames from "classnames";
import { StyledContainer } from "./StyledContainer.styled";

function Container(props, ref) {
	const containerClass = classNames("styled-object-container", props.classes);

	return (
		<StyledContainer
			ref={props.addToRefs}
			padding={props.padding}
			$height={props.height}
			$width={props.width}
			$centerInner={props.centerInner}
			noGutter={props.noGutter}
			className={containerClass}
			isBelow={props.isBelow}
			isAbove={props.isAbove}
			isAbsolute={props.isAbsolute}
			clipTo={props.clipTo}
			isCustomBg={props.isCustomBg}
			flexDirection={props.flexDirection}
			ref={ref}
			hasMarginTop={props.hasMarginTop}
			hasMarginBottom={props.hasMarginBottom}
		>
			{props.children}
		</StyledContainer>
	);
}

export default forwardRef(Container);
