import { Typography, useMediaQuery } from "@mui/material";
import React, { useRef } from "react";
import Carousel from "react-material-ui-carousel";
import "swiper";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import ArrowButton from "../Button/ArrowButton";

function Stories({ slides }) {
	const mobile = useMediaQuery("(max-width: 600px)");

	const stories = useRef([]);
	stories.current = [];

	const carouselStyles = theme => ({
		paddingLeft: 20,
		paddingRight: 20,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		[theme.breakpoints.down("md")]: {
			paddingLeft: 10,
			paddingRight: 10,
		},
		[theme.breakpoints.down("sm")]: {
			paddingLeft: 0,
			paddingRight: 0,
		},

		".MuiButtonBase-root": {
			backgroundColor: "transparent",
			"button:hover": {
				backgroundColor: "black",
				filter: "brightness(120%)",
				opacity: "1",
			},
		},
		".MuiTouchRipple-root": {
			display: "none",
			opacity: 1,
		},
	});



	return (
		<>
			<Carousel
				NextIcon={<NextButton />}
				PrevIcon={<PrevButton />}
				fullHeightHover={false}
				navButtonProps={{
					style: {
						backgroundColor: "blue",
					},
				}}
				navButtonsWrapperProps={{
					style: {
						bottom: mobile && "0",
						top: mobile && "unset",
					},
				}}
				p={4}
				sx={carouselStyles}
				animation={"fade"}
				autoPlay={false}
				navButtonsAlwaysVisible
			>
				{slides &&
					slides.map(slide => (
						<Item author={slide.author} quote={slide.quote} />
					))}
			</Carousel>
		</>
	);
}

const PrevButton = () => {
	return <ArrowButton />;
};

const NextButton = () => {
	return <ArrowButton flip={true} rotation={180} />;
};

function Item({ author, quote }) {
	return (
		<>
			<Typography variant='h6' component='p' textAlign='center'>
				{quote}
			</Typography>

			<Typography
				variant='h4'
				textAlign='center'
				component='p'
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
