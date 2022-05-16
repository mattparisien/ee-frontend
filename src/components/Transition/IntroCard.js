import React from "react";

function IntroCard() {
	const card = {
		zIndex: 99999,
		transition: "visibility 300ms ease",
	};

	return (
		<div
			className='IntroCard bg-light fixed top-0 left-0 w-full h-full'
			style={card}
		></div>
	);
}

export default IntroCard;
