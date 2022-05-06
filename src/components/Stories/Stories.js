import { Box, useMediaQuery } from "@mui/material";
import React, { useRef } from "react";
import "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import QuoteBlock from "../Blocks/QuoteBlock";
import ArrowButton from "../Button/ArrowButton";
import Container from "../Containers/ContainerFluid";

function Stories({ slides }) {
	SwiperCore.use([Autoplay, Navigation, Pagination]);
	const mobile = useMediaQuery("(max-width: 600px)");

	const stories = useRef([]);
	stories.current = [];

	const swiperStyle = {
		height: "300px",

		width: "100%",
		overflow: "hidden",
		position: "relative",
	};

	const buttons = theme => ({
		position: "absolute",
		top: "50%",
		transform: "translateY(-50%)",
		left: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		[theme.breakpoints.down("md")]: {
			top: "100%",
			justifyContent: "center",
			marginTop: "3rem",
			"> button": {
				width: "4rem",
				height: "4rem",
			},
			".button-next": {
				marginLeft: "1rem",
			},
			".button-prev": {
				marginRight: "1rem",
			},
		},
	});

	const contentContainer = theme => ({
		width: "80%",
		height: "100%",
		margin: "0 auto",
		[theme.breakpoints.down("md")]: {
			width: "100%",
		},
	});

	return (
		<Container disableGutters>
			<Box sx={{ height: "100%", height: "100%", position: "relative" }}>
				<Box className='content-container' sx={contentContainer}>
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
										fontSize='body2'
										data={{
											quote: slide.quote,
											author: slide.author,
										}}
									/>
								</SwiperSlide>
							))}
					</Swiper>
				</Box>
				<Box className='swiper-controls' sx={buttons}>
					<ArrowButton classes='button-prev' color='dark' />
					<ArrowButton classes='button-next' rotation={"180"} color='dark' />
				</Box>
			</Box>
		</Container>
	);
}

export default Stories;
