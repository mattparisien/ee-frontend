import { useMediaQuery } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselItem from "./Carouseltem";
import CarouselControls from "./CarouselControls";
import CarouselButton from "./CarouselButton";

function Carousel({ items, linkable, slidesPerView }) {
	const matches = useMediaQuery(`(min-width: 769px)`);

	console.log(items, 'items')

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: slidesPerView || 1,
		slidesToScroll: 1,

		prevArrow: <CarouselButton isPrev/>,
		nextArrow: <CarouselButton />,
	};

	return (
		<>
			<Slider className={"Carousel mb-4"} {...settings}>
				{items.map((item, i) => (
					<CarouselItem key={i} {...item} linkable={linkable} />
				))}
			</Slider>
		</>
	);
}

export default Carousel;
