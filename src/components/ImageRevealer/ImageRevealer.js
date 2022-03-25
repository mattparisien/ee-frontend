import React, { forwardRef } from "react";

function ImageRevealer(props, ref) {
	return <div ref={ref} className='c-image-revealer'></div>;
}

export default forwardRef(ImageRevealer);
