import React, { forwardRef } from "react";
import classNames from "classnames";
import { InView } from "react-intersection-observer";

function GridItem(props, ref) {
	const gridItemClass = classNames("grid-item-wrapper", props.classes);

	return (
		<div className={gridItemClass} ref={ref}>
			<InView
				as='div'
				rootMargin={"-30%"}
				threshold={0}
				className='grid-item-view-wrapper'
				onChange={(inView, entry) =>
					inView &&
					props.setItemInView({
						id: props.id,
						target: entry.target,
					})
				}
			>
				{props.children}
			</InView>
		</div>
	);
}

export default forwardRef(GridItem);
