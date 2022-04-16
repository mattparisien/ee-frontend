import { Typography, useMediaQuery, Box } from "@mui/material";
import React, { useRef } from "react";
import "swiper";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/modules/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";

function Stories({ slides }) {
	SwiperCore.use([Autoplay, Navigation, Pagination]);
	const mobile = useMediaQuery("(max-width: 600px)");

	const stories = useRef([]);
	stories.current = [];

	// const carouselStyles = theme => ({
	// 	paddingLeft: 20,
	// 	paddingRight: 20,
	// 	display: "flex",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	flexDirection: "column",
	// 	[theme.breakpoints.down("md")]: {
	// 		paddingLeft: 10,
	// 		paddingRight: 10,
	// 	},
	// 	[theme.breakpoints.down("sm")]: {
	// 		paddingLeft: 0,
	// 		paddingRight: 0,
	// 	},

	// 	".MuiButtonBase-root": {
	// 		backgroundColor: "transparent",
	// 		"button:hover": {
	// 			backgroundColor: "black",
	// 			filter: "brightness(120%)",
	// 			opacity: "1",
	// 		},
	// 	},
	// 	".MuiTouchRipple-root": {
	// 		display: "none",
	// 		opacity: 1,
	// 	},
	// });

	const swiperStyle = {
		height: "100%",
	};

	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				style={swiperStyle}
				autoplay={{ delay: 3000 }}
				pagination={{
					clickable: true,
				}}
			>
				{slides &&
					slides.map(slide => (
						<SwiperSlide>
							<Item key={slide.id} author={slide.Author} quote={slide.Quote} />
						</SwiperSlide>
					))}
			</Swiper>
		</>
	);
}

const ArrowIcon = ({ flip }) => {
	const arrow = {
		width: "50px",
		height: "50px",
		transform: flip ? `rotate(180deg)` : 0,

		svg: {
			width: "100%",
			path: {
				fill: "black",
			},
		},
	};

	return (
		<Box sx={arrow}>
			<svg
				class='c-arrow-svg'
				viewBox='0 0 100 101'
				fill='none'
				width='100%'
				height='100%'
				xmlns='http://www.w3.org/2000/svg'
			>
				{" "}
				<path
					d='M42.84 45.3408C42.0133 47.0475 41.24 48.3275 40.52 49.1808L63.84 49.1808V50.8608L40.52 50.8608C41.24 51.7142 42.0133 52.9942 42.84 54.7008H41.44C39.76 52.7542 38 51.3142 36.16 50.3808L36.16 49.6608C38 48.7542 39.76 47.3142 41.44 45.3408L42.84 45.3408Z'
					class='arrow1'
				></path>{" "}
				<path
					d='M42.84 45.3408C42.0133 47.0475 41.24 48.3275 40.52 49.1808L63.84 49.1808V50.8608L40.52 50.8608C41.24 51.7142 42.0133 52.9942 42.84 54.7008H41.44C39.76 52.7542 38 51.3142 36.16 50.3808L36.16 49.6608C38 48.7542 39.76 47.3142 41.44 45.3408L42.84 45.3408Z'
					class='arrow2'
				></path>{" "}
				<circle
					cx='50'
					cy='50.3408'
					r='49'
					transform='rotate(-180 50 50.3408)'
				></circle>
				<circle
					cx='50'
					cy='50.3408'
					r='49'
					transform='rotate(-180 50 50.3408)'
					class='hoverCircle'
				></circle>
			</svg>
		</Box>
	);
};

function Item({ author, quote }) {
	return (
		<>
			<Typography
				variant='h6'
				component='p'
				textAlign='center'
				className='-splitLines'
			>
				{quote}
			</Typography>

			<Typography
				variant='h4'
				textAlign='center'
				component='p'
				className='-splitLines'
				mb={4}
				mt={4}
				sx={{ fontFamily: "Kobe Bold !important" }}
			>
				<strong>{author}</strong>
				{/* <Highlight noDraw /> */}
			</Typography>
		</>
	);
}

export default Stories;
