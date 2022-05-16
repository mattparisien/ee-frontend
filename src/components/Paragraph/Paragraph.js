import React from "react";
import classNames from "classnames";

function Paragraph({ children, size, wrapperClasses }) {
	const classes = {
		large: "text-xl md:text-3xl mb-2.5 md:mb-5",
		small: "text-xl",
	};

	const wrapperClass = classNames("Paragraph", {
		[wrapperClasses]: wrapperClasses,
	});

	return (
		<div className={wrapperClass}>
			<p className={classes[size]}>{children}</p>
		</div>
	);
}

export default Paragraph;
