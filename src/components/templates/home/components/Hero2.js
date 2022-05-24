import React from "react";
import Section from "../../../Containers/Section";
import MyVideo from "../../../Media/Video";

function Hero2() {
	return (
		<Section>
			<div className='Hero2_Bg h-screen relative w-full after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-30'>
				<MyVideo
					width='100%'
					height='100%'
					src={
						"https://res.cloudinary.com/eyes-ears/video/upload/v1651606075/Sizzle_Reel_bf0e3b5a63.mov"
					}
					noControls
					autoplay={true}
				/>
			</div>
		</Section>
	);
}

export default Hero2;
