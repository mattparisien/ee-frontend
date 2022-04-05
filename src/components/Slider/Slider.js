import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import Figure from "../Figure/Figure";
import Link from "../Link/Link";

function Slider({ items }) {
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	console.log(items);

	return (
		<div className='o-slider'>
			<Swiper spaceBetween={50} slidesPerView={4}>
				{items &&
					items.map(item => (
						<SwiperSlide key={item.id}>
							<Item projectId={item.id} />
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
}

function Item({ src, projectId }) {
	return (
		<Link
			classes='o-slider_item'
			isRouterLink
			href={`/projects/${projectId}`}
		>
			<img
				src={
					"https://images.pexels.com/photos/11240206/pexels-photo-11240206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
				}
			></img>
		</Link>
	);
}

export default Slider;
