import React from "react";

function ImageOverlay({ overlayInfo }) {
	return (
		<div className='image-overlay -w-100 -h-100 -position-absolute-center'>
			<div className='title'>{overlayInfo.title.substr(0, 40)}</div>
			<div className='subtitle'>{overlayInfo.subtitle}</div>
			<div className="bg"></div>
		</div>
	);
}

export default ImageOverlay;
