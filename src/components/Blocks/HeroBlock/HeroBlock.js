import React from "react";
import Heading from "../../Heading/Heading";
import HeroMedia from "./components/HeroMedia";

function HeroBlock({ data }) {
	return (
		<div className='split-layout flex-col md:flex-row flex items-center justify-center'>
			{/* <h1>{data.Title}</h1>
			<h1>{data.Subtitle}</h1> */}
			{/* <HeroTitle title={data.Title} subtitle={data.Subtitle} /> */}
			<div className='HeroBlock_Title flex-1 relative'>
				<Heading
					level={1}
					wrapperClasses='text-center md:text-left mb-2 md:mb-5'
				>
					{data.Title}
				</Heading>
				<Heading level={3} wrapperClasses='inline relative text-center md:text-left'>
					{data.Subtitle}
				</Heading>
			</div>
			<HeroMedia image={{ ...data.FeatureImage.data }} />
		</div>
	);
}

export default HeroBlock;
