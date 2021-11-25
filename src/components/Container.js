import React, { Components, forwardRef } from "react";
import Paragraph from "./Paragraph";
import Heading from "./Heading";
import { StyledContainer } from "./styles/StyledContainer.styled";
import classNames from "classnames";

function Container(props, ref) {
	const {
		width,
		height,
		flex,
		isStretched,
		sectionTheme,
		justifyCenter,
		alignCenter,
		column,
		paddingSmall,
		paddingMedium,
		paddingLarge,
		absolute,
		isBelow,
		isAbove,
	} = props;

	const containerClass = classNames("object-container", {
		"-flex": flex,
		"-justify-center": justifyCenter,
		"-align-center": alignCenter,
		"-column": column,
		"-pd-sm": paddingSmall,
		"-pd-md": paddingMedium,
		"-pd-lg": paddingLarge,
		"-absolute": absolute,
	});

	return (
		<StyledContainer
			$width={width}
			$height={height}
			$isStretched={isStretched}
			className={containerClass}
			$sectionTheme={sectionTheme}
			$isAbove={isAbove}
			$isBelow={isBelow}
			ref={ref}
		>
			
			{props.children}
		</StyledContainer>
	);
}

export default forwardRef(Container);
