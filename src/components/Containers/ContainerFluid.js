import React from "react";
import classNames from "classnames";
import { Container as MuiContainer } from "@mui/material";

function Container(props) {
	const classes = classNames("container", { [props.classes]: props.classes });

	return (
		<MuiContainer
			className={classes}
			{...props}
			disableGutters={props.fullBleed}
			maxWidth={props.fullBleed || props.maxWidth === false ? false : "lg"}
		>
			{props.children}
		</MuiContainer>
	);
}

export default Container;
