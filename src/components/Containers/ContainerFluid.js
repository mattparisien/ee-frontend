import classNames from "classnames";
import React from "react";

function Container(props) {
	const classes = classNames(
		"Container max-w-screen-xl mx-auto px-5 sm:px-10 md:px-20 w-full",
		{ [props.classes]: props.classes }
	);


	return <div className={classes}>{props.children}</div>;
}

export default Container;
