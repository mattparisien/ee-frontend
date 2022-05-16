import React from "react";

function HeroWord({ word, index }) {
	const wordStyles = {};

	return (
		<div
			className={`HeroWord HeroWord_${
				index + 1
			} md:text-8xl lg:text-9xl hidden md:block`}
			style={wordStyles}
		>
			{word}
		</div>
	);
}

export default HeroWord;
