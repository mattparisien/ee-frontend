import React from "react";
import Media from "../../Media/Media";

function LayoutRight({ media, mediaRatio }) {
	return (
		<div className='TextWrapBlock_LayoutRight w-[50vw] sm:w-[300px] mt-[-10vw] sm:mt-0 mx-auto mb-0 relative pb-10 sm:float-right sm:pl-10'>
			<Media
				aspect={mediaRatio}
				resource_type='image'
				frame
				url={media.url}
				alt={media.alt}
			/>
		</div>
	);
}

export default LayoutRight;
