import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import SplitText from "../../../HOC/SplitText";

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
	return (
		<Typography variant='h1' mr={12}>
			<SplitText>{text}</SplitText>
		</Typography>
	);
}

export default TextMarquee;
