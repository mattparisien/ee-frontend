import React, { forwardRef } from "react";
import classNames from "classnames";

function GridItem(props, ref) {
	const gridItemClass = classNames("grid-item-wrapper", props.classes);

	return (
		<div className={gridItemClass} ref={ref}>
			{props.children}
		</div>
	);
}

export default forwardRef(GridItem);
