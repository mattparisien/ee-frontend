import React from "react";
import classNames from "classnames";
import { Fade } from "react-reveal";

function Paragraph({
	children,
	size,
	wrapperClasses,
	textCenter,
	textLeft,
	textRight,
}) {
	const classes = {
		large: `max-w-[709px] text-md md:text-xl leading-[1.9] md:leading-[1.7]`,
		small: `text-md leading-7`,
	};

	const wrapperClass = classNames("Paragraph", {
		[wrapperClasses]: wrapperClasses,
		"text-center": textCenter,
		"text-left": textLeft,
		"text-right": textRight,
	});

	return (
		<Fade bottom>
			<div className={wrapperClass}>
				<p className={classes[size]}>{children}</p>
			</div>
		</Fade>
	);
}

export default Paragraph;
