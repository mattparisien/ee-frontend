import React from "react";
import classNames from "classnames";
import { useEffect } from "react/cjs/react.development";

function GridItem(props) {
	const gridItemClass = classNames("grid-item-wrapper", props.classes);

	useEffect(() => {
		console.log(props.isHovered)
	})


	return (
		<div className={gridItemClass} style={{ border: "1px solid black" }}>
			{props.children}
		</div>
	);
}

export default GridItem;
