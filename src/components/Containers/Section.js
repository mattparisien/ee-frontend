import React, { forwardRef } from "react";
import classNames from "classnames";
import { Box } from "@mui/material";

function Section(props, ref) {
	const classes = classNames("Section c-section", {
		[props.classes]: props.classes,
	});

	const gutter = 20;

	return (
		<>
			<Box
				component='section'
				className={classes}
				data-theme={props["data-theme"]}
				ref={ref}
				mb={props.noGutter ? 0 : 20}
				mt={props.noGutter ? 0 : 20}
			>
				{props.children}
			</Box>
		</>
	);
}

export default forwardRef(Section);
