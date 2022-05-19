import classNames from "classnames";
import React from "react";

function Heading({
	level,
	className,
	children,
	wrapperClasses,
	disableMargin,
}) {

	const commonClasses = "tracking-tight ";

	const headingClasses = {
		1: "text-6xl md:text-8xl",
		2: "text-5xl md:text-6xl",
		3: "text-3xl md:text-4xl",
		5: "text-md md:text-xl",
		6: `text-1xl md:text-2xl font-semibold ${!disableMargin ? "mb-4" : ""}`,
	};

	const wrapper = classNames("Heading", {
		[wrapperClasses]: wrapperClasses,
	});

	return (
		<div className={wrapper}>
			{React.createElement(`h${level}`, {
				className: commonClasses + headingClasses[level],
				children: children,
				style: level < 2 ? { fontFamily: "Kobe Bold" } : {},
			})}
		</div>
	);
}

export default Heading;
