import { Box } from "@mui/material";
import classNames from "classnames";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";

function TextMarquee({ direction, words, isScaledText, textColor, fontSize }) {
	const ref = useRef(null);

	const wrapperClasses = classNames(`MarqueeText transition-transform ease-[0.86, 0, 0.07, 0.995] duration-0.6 text-${textColor || "dark"}`);

	return (
		<div className={wrapperClasses}>
			<Box className='marquee-scroll-wrap' ref={ref}>
				<Marquee gradient={false} direction={direction || "right"}>
					{words && words.map((word, i) => <MarqueeItem fontSize={fontSize} text={word} key={i} />)}
				</Marquee>
			</Box>
		</div>
	);
}

function MarqueeItem({ text, fontSize }) {
	return (
		<div className={`mr-5 md:mr-10 font-walsheim font-bold ${fontSize ? `text-${fontSize}` : `text-4xl md:text-6xl`}`}>
			{text}
		</div>
	);
}

export default TextMarquee;
