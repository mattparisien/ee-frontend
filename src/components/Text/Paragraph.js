import React, { useRef, useState, useEffect } from "react";
import $ from "jquery";
import { StyledParagraph } from "./styles";
import useResize from "../../helpers/hooks/useResize";

import classNames from "classnames";

function Paragraph(props) {
	const {
		addToRefs,
		indent,
		indentTitle,
		size,
		margin,
		fadeUp,
		padding,
		offset,
		className,
	} = props;
	const styledParagraph = useRef(null);
	const paragraph = useRef(null);
	const paragraphWrapper = useRef(null);
	const [windowWidth, isResized] = useResize();

	const paragraphClass = classNames("paragraph", {
		"fade-up-lines": fadeUp && fadeUp === "lines",
		"fade-up-blcok": fadeUp && fadeUp === "block",
		[className]: className,
	});

	return (
		<StyledParagraph
			ref={paragraphWrapper}
			className={"styled-paragraph-wrapper"}
			size={size}
			margin={margin}
			padding={padding}
			offset={offset}
			indent={indent}
		>
			{indentTitle && <div className='indent-title'>{indentTitle}</div>}
			<p className={paragraphClass} ref={addToRefs}>
				{props.children}
			</p>
		</StyledParagraph>
	);
}

export default Paragraph;
