import classNames from "classnames";
import React from "react";
import { Fade } from "react-reveal";

function Heading({ level, children, wrapperClasses }) {
	const commonClasses = " ";

	const headingClasses = {
		1: "font-bold text-4xl md:text-5xl font-adieu",
		2: "text-5xl md:text-6xl font-adieu",
		3: "text-xl md:text-2xl font-adieu",
		5: "font-semibold text-md md:text-xl",
		6: `font-semibold text-lg md:text-lg`,
	};

	const wrapper = classNames("Heading", {
		[wrapperClasses]: wrapperClasses,
	});

	return (
		<div className={wrapper}>
			{React.createElement(`h${level}`, {
				className: commonClasses + headingClasses[level],
				children: children,
			})}
		</div>
	);
}

export default React.memo(Heading);
