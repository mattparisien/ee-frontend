import React, { useRef, useState, useEffect } from "react";

import { StyledParagraph } from "./styles/StyledParagraph";
import useResize from "../helpers/hooks/useResize";
import { style } from "@mui/system";
import classNames from "classnames";
import SplitText from "gsap/SplitText";
import styled from "styled-components";

function Paragraph(props) {
	const { addToRefs, indent, indentTitle, size, fadeUp } = props;
	const styledParagraph = useRef(null); 
	const paragraph = useRef(null);
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
		console.log(styledParagraph.current);
	}, [styledParagraph]);

	useEffect(() => {
		const calculateIndentStyles = () => {
			const textHeight = paragraph.current.getBoundingClientRect().height;
			const fontSize = window
				.getComputedStyle(paragraph.current, null)
				.getPropertyValue("font-size");
			const fontSizeVal = fontSize.substr(0, fontSize.indexOf("p"));
			const height = paragraph.current.getBoundingClientRect().height;

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
			className={"styled-paragraph-wrapper"}
			$size={size}
			$indentStyles={{
				...indentStyles,
			}}
			ref={styledParagraph}
		>
			{indentTitle && <div className='indent-title'>{indentTitle}</div>}
			<p className={paragraphClass} ref={paragraph}>
				{props.children}
			</p>
		</StyledParagraph>
	);
}

export default Paragraph;
