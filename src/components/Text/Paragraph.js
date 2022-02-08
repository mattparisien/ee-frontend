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
		offsetTop,
	} = props;
	const styledParagraph = useRef(null);
	const paragraph = useRef(null);
	const paragraphWrapper = useRef(null);
	const [windowWidth, isResized] = useResize();

	const paragraphClass = classNames("paragraph", {
		"fade-up-lines": fadeUp && fadeUp === "lines",
		"fade-up-blcok": fadeUp && fadeUp === "block",
	});

	const [indentStyles, setIndentStyles] = useState({
		fontSize: null,
		height: null,
		title: indentTitle,
		isIndent: indent,
	});

	useEffect(() => {
		const calculateIndentStyles = () => {
			const paragraph = $(paragraphWrapper.current).find(".paragraph")[0];

			const textHeight = paragraph.getBoundingClientRect().height;

			const fontSize = window
				.getComputedStyle(paragraph, null)
				.getPropertyValue("font-size");
			const fontSizeVal = fontSize.substr(0, fontSize.indexOf("p"));
			const height = paragraph.getBoundingClientRect().height;

			setIndentStyles(prev => ({
				...prev,
				fontSize: fontSizeVal / 2,
				height: fontSizeVal,
			}));
		};

		calculateIndentStyles();

		if (isResized) {
			calculateIndentStyles();
		}
	}, [windowWidth]);

	return (
		<StyledParagraph
			ref={paragraphWrapper}
			className={"styled-paragraph-wrapper"}
			size={size}
			margin={margin}
			padding={padding}
			offsetTop={offsetTop}
			$indentStyles={{
				...indentStyles,
			}}
		>
			{indentTitle && <div className='indent-title'>{indentTitle}</div>}
			<p className={paragraphClass} ref={addToRefs}>
				{props.children}
			</p>
		</StyledParagraph>
	);
}

export default Paragraph;
