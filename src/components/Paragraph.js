import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import { StyledParagraph } from "./styles/StyledParagraph";
import useResize from "../helpers/hooks/useResize";
import { style } from "@mui/system";

function Paragraph(props) {
	const { addToRefs, indent, indentTitle, size } = props;
	const styledParagraph = useRef(null);
	const paragraph = useRef(null);
	const [windowWidth, isResized] = useResize();

	const [indentStyles, setIndentStyles] = useState({
		fontSize: null,
		height: null,
		title: indentTitle,
		isIndent: indent,
	});

	useEffect(() => {
		const textHeight = paragraph.current.getBoundingClientRect().height;
		const fontSize = window
			.getComputedStyle(paragraph.current, null)
			.getPropertyValue("font-size");
		const fontSizeVal = fontSize.substr(0, fontSize.indexOf("p"));
		const height = paragraph.current.getBoundingClientRect().height;
		const indentHeight = height / fontSizeVal;
		const indentFontSize = fontSizeVal / 2;

		setIndentStyles(prev => ({
			...prev,
			fontSize: indentFontSize,
			height: indentHeight,
		}));
	}, []);

	return (
		<StyledParagraph
			className='styled-paragraph-wrapper'
			$size={size}
			$indentStyles={{
				...indentStyles,
			}}
			ref={styledParagraph}
		>
			{indentTitle && (
				<div className='indent-title'>
					<span>{indentTitle}</span>
				</div>
			)}
			<p className='paragraph' ref={paragraph}>
				{props.children}
			</p>
		</StyledParagraph>
	);
}

export default Paragraph;
