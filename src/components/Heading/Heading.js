import classNames from "classnames";
import React from "react";
import { Fade } from "react-reveal";

function Heading({ level, children, wrapperClasses }) {
	const commonClasses = " ";

	const headingClasses = {
		1: "font-bold text-4xl md:text-5xl font-walsheim",
		2: "font-bold text-5xl md:text-6xl font-walsheim",
		3: "font-medium text-3xl md:text-2xl font-walsheim",
		5: "font-medium text-md md:text-xl font-walsheim",
		6: `font-medium text-lg md:text-lg font-walsheim`,
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
