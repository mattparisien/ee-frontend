import React from "react";
import classNames from "classnames";

function GridItem(props) {

  const gridItemClass = classNames("grid-item-wrapper", props.classes)


	return <div className={gridItemClass} style={{border:'1px solid black'}}>{props.children}</div>;
}

export default GridItem;
