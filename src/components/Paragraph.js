import React from "react";
import classNames from "classnames";

function Paragraph(props) {
	const { small, medium, large } = props;

	const paragraphClass = classNames("paragraph-wrapper", {
		"-large": large,
		"-medium": medium,
		"-small": small,
	});

	return (
		<div
			className='paragraph-wrapper'
			style={{ width: "100%" }}
			className={paragraphClass}
		>
			<p>{props.children}</p>
		</div>
	);
}

export default Paragraph;
