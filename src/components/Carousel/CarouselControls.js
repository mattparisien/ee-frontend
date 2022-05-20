import React from "react";
import CarouselButton from "./CarouselButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function CarouselControls() {
	return (
		<div className='CarouselControls flex ml-auto justify-center'>
			<CarouselButton component={ArrowForwardIcon} isPrev />
			<CarouselButton component={ArrowForwardIcon} />
		</div>
	);
}

export default CarouselControls;
