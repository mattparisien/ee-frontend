import classNames from "classnames";
import React from "react";

function Heading({
	level,
	className,
	children,
	wrapperClasses,
	disableMargin,
}) {
	const headingClasses = {
		1: "text-6xl md:text-8xl",
		2: "text-5xl md:text-6xl",
		3: "text-2xl md:text-3xl",
		6: `text-1xl md:text-2xl font-semibold ${!disableMargin ? "mb-4" : ""}`,
	};

	const wrapper = classNames("Heading", {
		[wrapperClasses]: wrapperClasses,
	});

	return (
		<div className={wrapper}>
			{React.createElement(`h${level}`, {
				className: headingClasses[level],
				children: children,
				style: level < 2 ? { fontFamily: "Kobe Bold" } : {},
			})}
		</div>
	);
}

export default Heading;
