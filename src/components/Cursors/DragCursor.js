import React, { useEffect } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import classNames from "classnames";

function DragCursor({ cursorState }) {
	const classes = classNames("c-cursor", {
		"is-normal": cursorState === "normal",
		"is-drag": cursorState === "drag",
	});

	useEffect(() => {
		console.log("cursor stateeeee", cursorState);
	}, [cursorState]);

	// const location = useMouseMove();

	return (
		<div
			className={classes}
			style={{ left: location.pageX, top: location.pageY }}
		></div>
	);
}

export default DragCursor;
