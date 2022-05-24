import React from "react";
import MyImage from "../Media/MyImage";

function CarouselImage({ image }) {
	const dimensions =
		"w-[45vw] h-[calc(45vw*1.25)] md:w-[25vw] md:h-[calc(25vw*1.25)]";

	return (
		<div className={`CarouselImage ${dimensions} `}>
			<MyImage
				src={image.src}
				smallSrc={image.formats.thumbnail.url}
				alt={image.alt}
				width={"100%"}
				height={"100%"}
				objectFit={"cover"}
				layout='fill'
				grayscale
			/>
		</div>
	);
}

export default CarouselImage;
