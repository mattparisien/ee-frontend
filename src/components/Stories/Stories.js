import { Typography, useMediaQuery, Box } from "@mui/material";
import React, { useRef } from "react";
import "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import ArrowButton from "../Button/ArrowButton";
import Container from "../Containers/ContainerFluid";
import QuoteBlock from "../Pages/SingleProject/Blocks/QuoteBlock";

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
			marginTop: "2rem",
			"> button": {
				width: "6rem",
				height: "6rem",
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

	console.log('slide', slides)

	return (
		<Container disableGutters>
			<Box sx={{ height: "100%", height: "100%", position: "relative" }}>
				<Box className='content-container' sx={contentContainer}>
					<Swiper
						slidesPerView={1}
						spaceBetween={30}
						style={swiperStyle}
						autoplay={{ delay: 9000 }}
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
										data={{
											quote: slide.quote,
											author: slide.author
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
