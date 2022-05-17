import React from "react";
import Media from "../../Media/Media";

function LayoutRight({ media, mediaOptions, mediaRatio }) {
	return (
		<div className='TextWrapBlock_LayoutRight w-[50vw] sm:w-[30vw] mt-[-10vw] sm:mt-0 mx-auto mb-0 relative pb-10 sm:float-right sm:pl-10'>
			<Media
				aspect={mediaRatio}
				frame
				items={media}
				options={{
					...mediaOptions,
				}}
			/>
		</div>
	);
}

export default LayoutRight;
