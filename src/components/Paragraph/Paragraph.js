import React from "react";
import classNames from "classnames";

function Paragraph({
	children,
	size,
	wrapperClasses,
	textCenter,
	textLeft,
	textRight,
	disableMargin,
}) {
	const classes = {
		large: `max-w-[709px] text-md md:text-xl leading-[1.9] md:leading-[1.7] ${!disableMargin ? `mb-5 md:mb-6` : ""}`,
		small: `text-md leading-7 ${!disableMargin ? "mb-2.5 md:mb-3" : ""}`,
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
