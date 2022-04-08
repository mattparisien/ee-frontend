import React from "react";
import { Typography } from "@mui/material";

function SectionHeading(props) {
	return (
		<Typography variant='h1' className='section-heading -splitHeading' {...props}>
			{props.text}
		</Typography>
	);
}

export default SectionHeading;
