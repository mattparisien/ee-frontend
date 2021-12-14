import React, { useRef, useState, useEffect } from "react";
import classNames from "classnames";
import { StyledParagraph } from "./styles/StyledParagraph";
import useResize from "../helpers/hooks/useResize";
import { style } from "@mui/system";

function Paragraph(props) {
	const getWidth = el => {
		return el.getBoundingClientRect().width;
	};

	const { addToRefs } = props;
	const styledParagraph = useRef(null);

	return (
		<StyledParagraph
			className='styled-paragraph-wrapper'
			$size={props.size}
			$indent={props.indent}
			ref={styledParagraph}
		>
			<p className='paragraph' ref={addToRefs}>
				{props.children}
			</p>
		</StyledParagraph>
	);
}

export default Paragraph;
