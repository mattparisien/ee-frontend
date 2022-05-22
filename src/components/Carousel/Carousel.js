import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CarouselButton from "./CarouselButton";
import CarouselItem from "./Carouseltem";
import useMouseEnter from "../../helpers/hooks/useMouseEnter";

function Carousel({ items, linkable, slidesPerView, wrapperClasses }) {
	const { ref, isEnter } = useMouseEnter();

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: slidesPerView || 1,
		slidesToScroll: 1,

		prevArrow: <CarouselButton isPrev isVisible={isEnter} />,
		nextArrow: <CarouselButton isVisible={isEnter} />,
	};

	return (
		<div className="Carousel" ref={ref}>
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
						/>
					))}
				</Slider>
			</>
		</div>
	);
}

export default Carousel;
