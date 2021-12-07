import React, { useRef, useEffect, forwardRef } from "react";
import classNames from "classnames";
import { grid } from "@mui/system";

function GridItem(props, ref) {
	const gridItemClass = classNames("grid-item-wrapper", props.classes);




	return (
		<div className={gridItemClass} ref={ref}>
			{props.children}
		</div>
	);
}

export default forwardRef(GridItem);
