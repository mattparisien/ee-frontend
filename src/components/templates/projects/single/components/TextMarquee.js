import { Box } from "@mui/material";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import Heading from "../../../../Heading/Heading";

function TextMarquee({ direction, words }) {
	const ref = useRef(null);

	return (
		<Box className='MarqueeText'>
			<Box className='marquee-scroll-wrap' ref={ref}>
				<Marquee gradient={false} direction={direction || "right"}>
					{words && words.map((word, i) => <MarqueeItem text={word} key={i} />)}
				</Marquee>
			</Box>
		</Box>
	);
}

function MarqueeItem({ text }) {
	return <Heading level={2} wrapperClasses="mr-4">{text}</Heading>;
}

export default TextMarquee;
