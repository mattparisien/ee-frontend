import { useMediaQuery } from "@mui/material";
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useMouseEnter from "../../helpers/hooks/useMouseEnter";
import CarouselButton from "./CarouselButton";
import CarouselItem from "./Carouseltem";

function Carousel({
	items,
	linkable,
	slidesPerView,
	wrapperClasses,
	grayscale,
}) {
	const { ref, isEnter } = useMouseEnter();
	const [slideIndex, setSlideIndex] = useState(0);
	const matches = useMediaQuery(`(min-width: 769px)`);
	const slideRefs = useRef([]);
	slideRefs.current = [];

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: matches ? slidesPerView || 1 : 1,
		slidesToScroll: 1,
		fade: false,
		autoplay: false,
		prevArrow: <CarouselButton isPrev isVisible={isEnter} />,
		nextArrow: <CarouselButton isVisible={isEnter} />,
	};

	return (
		<div className='Carousel' ref={ref}>
			<>
				<Slider
					className={`mb-4 ${wrapperClasses ? wrapperClasses : ""}`}
					{...settings}
				>
					{items.map((item, i) => (
						<CarouselItem
							key={i}
							{...item}
							linkable={linkable}
							classes={item.itemClasses}
							opacity={slideIndex === i ? 1 : 0}
						/>
					))}
				</Slider>
			</>
		</div>
	);
}

export default Carousel;
