import React from "react";

function MyVideo({ src, width, height, objectFit, noControls, autoplay }) {
	return (
		<div className='MyVideo w-full h-full relative'>
			<video
				src={src}
				controls={noControls ? false : true}
				playsInline
				autoPlay={autoplay}
				loop={true}
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
