import React from "react";
import CarouselImage from "./CarouselImage";
import CarouselItemInfo from "./CarouselItemInfo";
import convertToSlug from "../../helpers/convertToSlug";
import Link from "next/link";

function Carouseltem({ FeatureImage, Title, Subtitle }) {
	return (
		<div className='CarouselItem'>
			<Link href={`/projects/${convertToSlug(Subtitle)}`}>
				<a href={`/projects/${convertToSlug(Subtitle)}`}>
					<CarouselImage
						image={{
							src: FeatureImage.data.attributes.url,
							alt: FeatureImage.data.attributes.alternativeText,
						}}
					/>
					<CarouselItemInfo title={Title} subtitle={Subtitle} />
				</a>
			</Link>
		</div>
	);
}

export default Carouseltem;
