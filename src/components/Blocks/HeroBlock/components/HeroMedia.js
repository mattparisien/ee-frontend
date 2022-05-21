import React from "react";
import MyImage from "../../../Media/MyImage";

function HeroMedia({ image }) {
	return (
		<div className='HeroBlock_Media w-[45vw] md:w-[30%] h-full pt-[59%] md:pt-[40%] relative border-box md:ml-[12%] accent accent-image accent-multiply'>
			<div className='HeroBlock_Media__inner absolute top-0 left-0 w-full h-full'>
				<MyImage
					src={image.attributes.url}
					alt={image.attributes.alternativeText}
					width='100%'
					height='100%'
					layout='fill'
					objectFit={"cover"}
				/>
			</div>
		</div>
	);
}

export default HeroMedia;
