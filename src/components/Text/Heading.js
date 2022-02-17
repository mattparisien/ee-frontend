import React from "react";
import { StyledHeading } from "./styles";
import classNames from "classnames";
import { capitalize } from "lodash";

function Heading(props) {
	const {
		small,
		medium,
		large,
		xl,
		color,
		children,
		size,
		weight,
		capitalize,
		width
	} = props;

	const headingStyles = {
		color: color,
		weight: weight,
		capitalize: capitalize,
		width: width
	};

	return (
		<StyledHeading
			className='styled-heading-wrapper'
			$headingStyles={headingStyles}
		>
			{small && <h4>{children}</h4>}
			{medium && <h3>{children}</h3>}
			{large && <h2>{children}</h2>}
			{xl && <h1>{children}</h1>}
		</StyledHeading>
	);
}

export default Heading;
