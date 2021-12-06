import React from "react";

import classNames from "classnames";

function Heading({ small, medium, large, xl, children }) {
	const headingClass = classNames("heading-wrapper", {
		"-heading-small": small,
		"-heading-medium": medium,
		"-heading-large": large,
		"-heading-xl": xl,
	});

	return (
		<div className={headingClass}>
			{small && <h4>{children}</h4>}
			{medium && <h3>{children}</h3>}
			{large && <h2>{children}</h2>}
			{xl && <h1>{children}</h1>}
		</div>
	);
}

export default Heading;
