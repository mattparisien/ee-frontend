import React from "react";
import Section from "../../../Containers/Section";
import MyVideo from "../../../Media/Video";
import Cta from "../../../Link/Cta";

function Hero2() {
	return (
		<Section>
			<div className='Hero relative w-full  h-screen'>
				<div className='Hero_Background absolute w-full h-full after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:opacity-40'>
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
				<div className='Hero_TextContent w-full h-full z-50 sticky text-light font-adieu flex items-center justify-center flex-col'>
					<div className='text-3xl md:text-5xl lg:text-6xl'>Earth Sessions</div>
					<div className="mt-10">
						<Cta
							href={"/projects/intersectional-environmentalist"}
							mixBlend='screen'
							opacity='40'
						>
							Explore our latest event
						</Cta>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Hero2;
