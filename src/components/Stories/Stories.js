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
				<QuoteMark type="left" />
				{/* <QuoteMark  /> */}
			</Box>
			
		</Container>
	);
}

const QuoteMark = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 21.55 17.14'
			{...props}
			style={{
				position: "absolute",
				
				
				left: "4vw",
				top: '-2.5vw',
				transform: props.type !== "left" && `rotate(180deg)`,
				width: "10vw",
				opacity: 0.2,
			}}
		>
			<path
				d='M5.26 17.14C1.69 17.14 0 14.41 0 11.05 0 6.62 3.05 1.05 8.31 0l.1.42C4 1.37 2 5.05 2 9.46c.63-1.04 1.89-1.78 3.26-1.78 2.63 0 4.73 2.1 4.73 4.72s-2.11 4.73-4.73 4.73Zm11.56 0c-3.57 0-5.26-2.73-5.26-6.09 0-4.43 3.05-10 8.31-11.05l.1.42c-4.42.95-6.41 4.63-6.41 9.04.63-1.04 1.89-1.78 3.26-1.78 2.63 0 4.73 2.1 4.73 4.72s-2.11 4.73-4.73 4.73Z'
				style={{
					fill: "#231f20",
				}}
			/>
		</svg>
	);
};

export default Stories;
