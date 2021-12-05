import React, { useRef, forwardRef, useEffect } from "react";
import classNames from "classnames";
import SplitText from "gsap/SplitText";



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
		
		myRef
	} = props;

	const splitRef = useRef(null);

	const paragraphStyle = {
		width: width,
		marginTop: marginTop,
		marginRight: left && "auto",
		marginLeft: right && "auto",
	};

	const paragraphClass = classNames("paragraph-wrapper", {
		"-pg-large": large,
		"-pg-medium": medium,
		"-pg-small": small,
		"-indent": indent,
		classes,
	});

	// useEffect(() => {
	// 	const splitText = new SplitText(splitRef.current, {
	// 		type: "lines",
	// 		linesClass: "fade-up-line"
	// 	})
	// }, [])

	return (
		<div
			className='paragraph-wrapper'
			className={paragraphClass}
			style={paragraphStyle}
		>
			<p ref={splitRef}>{props.children}</p>
		</div>
	);
}

export default forwardRef(Paragraph);
