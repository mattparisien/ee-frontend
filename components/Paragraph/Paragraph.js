import React from "react";
import classNames from "classnames";

function Paragraph({
	children,
	size,
	wrapperClasses,
	textCenter,
	textLeft,
	textRight,
}) {
	const classes = {
		large: "text-xl md:text-3xl mb-2.5 md:mb-3",
		small: "text-xl mb-2.5 md:mb-3",
	};

	const wrapperClass = classNames("Paragraph", {
		[wrapperClasses]: wrapperClasses,
		"text-center": textCenter,
		"text-left": textLeft,
		"text-right": textRight,
	});

	return (
		<div className={wrapperClass}>
			<p className={classes[size]}>{children}</p>
		</div>
	);
}

export default Paragraph;
