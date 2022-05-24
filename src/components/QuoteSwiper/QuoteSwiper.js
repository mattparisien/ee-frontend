import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import Container from "../Containers/ContainerFluid";
import Controls from "./Controls";
import QuoteSvg from "./QuoteSvg";
import Slider from "./Slider";

function QuoteSwiper({ slides }) {
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	return (
		<div className='QuoteSwiper relative my-40'>
			<Container disableGutters>
				<div className='content-wrapper w-[80%] h-full my-0 mx-auto'>
					<Slider slides={slides} />
				</div>
				<Controls />
				<QuoteSvg type='left' />
			</Container>
		</div>
	);
}

export default QuoteSwiper;
