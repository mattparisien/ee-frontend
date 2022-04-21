import React from "react";
import classNames from "classnames";
import { Container as MuiContainer } from "@mui/material";

function Container(props) {
	const classes = classNames("container", { [props.classes]: props.classes });

	return (
		<MuiContainer
			className={classes}
			disableGutters={props.disableGutters}
			maxWidth={props.maxWidth}
		>
			{props.children}
		</MuiContainer>
	);
}

export default Container;
