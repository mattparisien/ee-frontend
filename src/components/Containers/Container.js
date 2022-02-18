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
			isAbsoluteCenter={props.isAbsoluteCenter}
			isRelative={props.isRelative}
			clipTo={props.clipTo}
			isCustomBg={props.isCustomBg}
			flexDirection={props.flexDirection}
			ref={ref}
			hasPaddingVertical={props.hasPaddingVertical}
		>
			{props.children}
		</StyledContainer>
	);
}

export default forwardRef(Container);
