import React from "react";
import classNames from "classnames";

function Container(props) {
	const classes = classNames("o-container", { [props.classes]: props.classes });

	return <div className={classes}>{props.children}</div>;
}

export default Container;
