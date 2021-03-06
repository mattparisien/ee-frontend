import React from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import "swiper/css";
import "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function Carousel({ items, image, video }) {
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	const wrapper = {
		height: "100%",

		overflow: "hidden",
	};

	const controls = {
		position: "absolute",
		top: "50%",
		left: 0,
		zIndex: 99,
		width: "100%",
		justifyContent: "space-between",
		display: "flex",
		transform: "translateY(-50%)",
	};

	const buttonStyle = {
		padding: 0,
		height: "2.5rem",
		width: "2.5rem",
		margin: 2,
		opacity: 0.5,
		transition: "500ms ease",
		"&:hover": {
			opacity: 1,
		},
	};

	const iconStyle = {
		width: "100%",
		height: "100%",
	};

	return (
		<Swiper
			loop={true}
			className='insta-carousel'
			style={wrapper}
			slidesPerView={1}
			pagination={{
				clickable: true,
			}}
			navigation={{
				prevEl: ".button-prev",
				nextEl: ".button-next",
			}}
		>
			{items.map((item, i) => (
				<SwiperSlide>
					<Item
						key={i}
						type={item.media_type}
						src={item.src || item.url}
						permalink={item.permalink}
						image={image}
						video={video}
					/>
				</SwiperSlide>
			))}
			<Box className='insta-carousel-controls' sx={controls}>
				<IconButton className='button-prev' sx={buttonStyle}>
					<ArrowCircleLeftIcon sx={iconStyle} />
				</IconButton>
				<IconButton className='button-next' sx={buttonStyle}>
					<ArrowCircleRightIcon sx={iconStyle} />
				</IconButton>
			</Box>
		</Swiper>
	);
}

function Item({ type, src, permalink, image, video }) {
	const itemWrapper = {};

	return (
		<Box sx={itemWrapper} className='item-wrapper'>
			{type === "image" && image(src)}
			{type === "video" && video(src)}
		</Box>
	);
}

export default Carousel;
