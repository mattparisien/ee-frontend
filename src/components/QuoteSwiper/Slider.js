import React from "react";
import "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import QuoteBlock from "../Blocks/QuoteBlock";

function Slider({ slides }) {
	const swiperStyle = {
		height: "300px",
		width: "100%",
		overflow: "hidden",
		position: "relative",
	};

	return (
		<div className='QuoteSwiper_Slider'>
			<Swiper
				loop={true}
				slidesPerView={1}
				spaceBetween={30}
				style={swiperStyle}
				centeredSlides={true}
				navigation={{
					nextEl: ".button-next",
					prevEl: ".button-prev",
				}}
			>
				{slides &&
					slides.map((slide, i) => (
						<SwiperSlide key={i}>
							<QuoteBlock
								paragraphSize='small'
								data={{
									quote: slide.quote,
									author: slide.author,
								}}
							/>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}

export default Slider;
