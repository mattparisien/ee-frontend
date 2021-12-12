import React, { useRef, forwardRef } from "react";
import classNames from "classnames";

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
			<p className="paragraph" ref={addToRefs}>{props.children}</p>
		</div>
	);
}

export default forwardRef(Paragraph);
