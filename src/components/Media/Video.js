import React from "react";

function MyVideo({ src, width, height, objectFit }) {
	return (
		<div className='MyVideo w-full h-full relative'>
			<video
				src={src}
				controls
				playsInline
				muted
				style={{
					width: width,
					height: height,
					objectFit: objectFit || "cover",
					objectPosition: "center",
				}}
			/>
		</div>
	);
}

export default MyVideo;
