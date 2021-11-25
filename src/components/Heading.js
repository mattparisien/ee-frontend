import React from "react";

import classNames from "classnames";

function Heading({ medium, regular, bold, black, large, small, xl, type, children }) {
	const headingClass = classNames("heading-wrapper", {
		"-heading-medium": regular,
		"-heading-bold": bold,
		"-heading-black": black,
		"-heading-large": large,
		"-xl": xl,
	});

	return (
		<div className={headingClass}>
			{children}
		</div>
	);
}

export default Heading;
