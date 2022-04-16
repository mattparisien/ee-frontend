import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";

function InstaCarousel({ items, image, video }) {
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	const wrapper = {
		height: "100%",
		width: "100%",
		overflow: "hidden",
	};

	return (
		<Swiper
			className='insta-carousel'
			style={wrapper}
			slidesPerView={1}
			pagination={{
				clickable: true,
			}}
		>
			{items.map(item => (
				<SwiperSlide>
					<Item
						key={item.id}
						type={item.media_type}
						url={item.media_url}
						permalink={item.permalink}
						image={image}
						video={video}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
}

function Item({ type, url, permalink, image, video }) {
	const itemWrapper = {};

	return (
		<Box sx={itemWrapper} className='item-wrapper'>
			{type === "IMAGE" && image(url)}
			{type === "VIDEO" && video(url)}
		</Box>
	);
}

export default InstaCarousel;
