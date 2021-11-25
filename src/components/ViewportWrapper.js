import React, { forwardRef, ForwardRef } from "react";
import Section from "./Section";
import { StyledViewportWrapper } from "./styles/StyledViewportWrapper";
import Container from "./Container";

function ViewportWrapper(props, ref) {
	const { sections, id, label } = props;

	return (
		<StyledViewportWrapper
			data-viewport-id={id}
			className={label}
			className={"viewport-wrapper"}
			ref={ref}
		>
			{props.children}
		</StyledViewportWrapper>
	);
}

export default forwardRef(ViewportWrapper);
