import classNames from "classnames";
import React from "react";

function Container(props) {
	const classes = classNames("Container w-full", {
		[props.classes]: props.classes,
		"max-w-[1290px] mx-auto": !props.disableMaxWidth,
		"px-5 sm:px-10 lg:px-20": !props.disableGutters,
	});

	return <div className={classes}>{props.children}</div>;
}

export default Container;
