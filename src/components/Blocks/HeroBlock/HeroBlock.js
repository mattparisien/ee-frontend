import React from "react";
import HeroMedia from "./components/HeroMedia";
import HeroTitle from "./components/HeroTitle";
import ScrollDownCta from "./components/ScrollDownCta";

function HeroBlock({ data }) {
	return (
		<div className='split-layout flex-col md:flex-row flex items-center justify-center'>
			<HeroTitle title={data.Title} subtitle={data.Subtitle} />
			<HeroMedia image={{ ...data.FeatureImage.data }} />
			<ScrollDownCta />
		</div>
	);
}

export default HeroBlock;
