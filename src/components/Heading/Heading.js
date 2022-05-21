import classNames from "classnames";
import React from "react";

function Heading({
	level,
	className,
	children,
	wrapperClasses,
	disableMargin,
}) {

	const commonClasses = "font-bold ";

	const headingClasses = {
		1: "text-6xl md:text-8xl font-adieu",
		2: "text-5xl md:text-6xl font-adieu",
		3: "text-xl md:text-2xl font-adieu",
		5: "text-md md:text-xl",
		6: `text-lg md:text-lg  ${!disableMargin ? "mt-5 md:mt-6" : ""}`,
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
