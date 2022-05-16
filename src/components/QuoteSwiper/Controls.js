import React from "react";
import ArrowButton from "../Button/ArrowButton";

function Controls() {
	return (
		<div className='QuoteSwiper_Controls absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-between w-full'>
			<ArrowButton classes='button-prev' color='dark' />
			<ArrowButton classes='button-next' rotation={"180"} color='dark' />
		</div>
	);
}

export default Controls;
