import React from "react";
import { StyledHeading } from "./styles";
import classNames from "classnames";

function Heading(props) {
	const {small, medium, large, xl, color, children, size} = props;

	const headingClass = classNames("heading-wrapper", {
		"-heading-small": small,
		"-heading-medium": medium,
		"-heading-large": large,
		"-heading-xl": xl,
	});


	const headingStyles = {
		color: color,
		size: size === 'xl' && '60vw'
	}

	return (
		<StyledHeading className="styled-heading-wrapper" $headingStyles={headingStyles}>
			{small && <h4>{children}</h4>}
			{medium && <h3>{children}</h3>}
			{large && <h2>{children}</h2>}
			{xl && <h1>{children}</h1>}
		</StyledHeading>
	);
}

export default Heading;
