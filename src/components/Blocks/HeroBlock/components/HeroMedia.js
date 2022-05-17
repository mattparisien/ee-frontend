import React from "react";
import Media from "../../../Media/Media";

function HeroMedia({ image }) {
	return (
		<div className='HeroBlock_Media w-[50vw] sm:w-[30vw] max-w-[300px]'>
			<Media
				zoom
				aspect='portrait'
				width='100%'
				items={[
					{
						media_type: "image",
						...image,
					},
				]}
				options={{
					displayCaption: true,
				}}
				accent
			/>
		</div>
	);
}

export default HeroMedia;
