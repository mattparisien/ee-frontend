import React from "react";
import Accent from "../../../Media/Accent";
import Media from "../../../Media/Media";

function HeroMedia({ image }) {
	return (
		<div className='HeroBlock_Media w-[45vw] mt-10 md:mt-0 md:w-[30%] h-full relative border-box md:ml-[12%]'>
			<Media
				url={image.attributes.url}
				alt={image.attributes.alternativeText}
				caption={image.attributes.caption}
				width='100%'
				height='100%'
				layout='fill'
				objectFit={"cover"}
				resource_type='image'
				cloudinaryId={image.attributes.provider_metadata.public_id}
				aspect='portrait'
			/>
			<Accent />
		</div>
	);
}

export default HeroMedia;
