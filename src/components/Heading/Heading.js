import React from "react";
import classNames from "classnames";

function Heading({ level, className, children, wrapperClasses }) {
	const headingClasses = {
		1: "text-6xl md:text-8xl",
		2: "text-5xl md:text-6xl",
		6: "text-1xl md:text-2xl mb-3",
	};

	const wrapper = classNames("Heading", {
		[wrapperClasses]: wrapperClasses,
	});

	return (
		<div className={wrapper}>
			{React.createElement(`h${level}`, {
				className: headingClasses[level],
				children: children,
				style: level < 3 ? { fontFamily: "Kobe Bold" } : {},
			})}
		</div>
	);
}

export default Heading;
