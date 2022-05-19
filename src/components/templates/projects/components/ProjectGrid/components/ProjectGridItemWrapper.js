import React, { forwardRef } from "react";

function ProjectGridItemWrapper({ gridNumber, children }, ref) {
	return (
		<div
			ref={ref}
			className={`ProjectGridItem ProjectGridItem_${gridNumber} ${
				gridNumber % 2 === 0 ? "md:ml-auto" : ""
			} relative flex flex-col h-full pointer-cursor`}
		>
			{children}
		</div>
	);
}

export default forwardRef(ProjectGridItemWrapper);
