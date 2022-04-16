import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function InstaCarousel({ items, image, video }) {
	SwiperCore.use([Autoplay, Navigation, Pagination]);

	const wrapper = {
		height: "100%",
		width: "100%",
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
