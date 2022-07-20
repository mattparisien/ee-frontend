import React from "react";
import HeroMedia from "./components/HeroMedia";
import HeroTitle from "./components/HeroTitle";

function HeroBlock({ data }) {


	console.log('hi', data);

	return (
		<div className='split-layout flex-col md:flex-row flex items-center justify-center'>
			<HeroTitle title={data.Title} subtitle={data.Subtitle} />
			<HeroMedia image={{ ...data.FeatureImage.data }} />
		</div>
	);
}

export default HeroBlock;
