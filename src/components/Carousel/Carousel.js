import { useMediaQuery } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselItem from "./Carouseltem";
import CarouselControls from "./CarouselControls";

function Carousel({ items }) {
	const matches = useMediaQuery(`(min-width: 769px)`);

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: matches ? 3 : 2,
		slidesToScroll: 1,
	};

	return (
		<>
			<Slider className={"Carousel mb-4"} {...settings}>
				{items.map((item, i) => (
					<CarouselItem key={i} {...item} />
				))}
			</Slider>
			<CarouselControls />
		</>
	);
}

export default Carousel;
