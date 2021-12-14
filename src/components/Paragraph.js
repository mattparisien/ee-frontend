import React, { useRef, forwardRef } from "react";
import classNames from "classnames";
import { StyledParagraph } from "./styles/StyledParagraph";

function Paragraph(props) {
	const {
		small,
		medium,
		large,
		classes,
		width,
		indent,
		left,
		right,
		marginTop,
		addToRefs,
		myRef,
	} = props;

	const splitRef = useRef(null);

	// useEffect(() => {
	// 	const splitText = new SplitText(splitRef.current, {
	// 		type: "lines",
	// 		linesClass: "fade-up-line"
	// 	})
	// }, [])

	return (
		<StyledParagraph className='styled-paragraph-wrapper' $size={props.size} $indent={props.indent}>
			<p className='paragraph' ref={addToRefs}>
				{props.children}
			</p>
		</StyledParagraph>
	);
}

export default Paragraph;
