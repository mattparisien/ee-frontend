import classNames from "classnames";
import React, { forwardRef } from "react";
import { StyledContainer } from "./StyledContainer.styled";

function Container(props, ref) {
	const containerClass = classNames("Container", props.classes);

	return (
		<StyledContainer
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
			hasPaddingBottom={props.hasPaddingBottom}
			hasPaddingTop={props.hasPaddingTop}
			isOverflowVisible={props.isOverflowVisible}
		>
			{props.children}
		</StyledContainer>
	);
}

export default forwardRef(Container);
