import React, { forwardRef } from "react";
import classNames from "classnames";
import { Box } from "@mui/material";
import { useMediaQuery } from "@mui/material";

function Section(props, ref) {
	const classes = classNames("Section c-section", {
		[props.classes]: props.classes,
	});
	const mobile = useMediaQuery('(max-width: 600px)');

	const gutter = mobile ? 8 : 10;

	return (
		<>
			<Box
				component='section'
				className={classes}
				data-theme={props["data-theme"]}
				ref={ref}
				mb={props.noGutter ? 0 : gutter}
				mt={props.noGutter || props.noGutterTop ? 0 : gutter}
			>
				{props.children}
			</Box>
		</>
	);
}

export default forwardRef(Section);
