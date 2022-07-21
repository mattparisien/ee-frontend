import { DriveEtaOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import Heading from "../../../../Heading/Heading";
import classNames from "classnames";

function TextMarquee({ direction, words, isScaledText, textColor }) {
	const ref = useRef(null);

	const wrapperClasses = classNames(`MarqueeText transition-transform ease-[0.86, 0, 0.07, 0.995] duration-0.6 text-${textColor || "dark"}`);

	return (
		<div className={wrapperClasses}>
			<Box className='marquee-scroll-wrap' ref={ref}>
				<Marquee gradient={false} direction={direction || "right"}>
					{words && words.map((word, i) => <MarqueeItem text={word} key={i} />)}
				</Marquee>
			</Box>
		</div>
	);
}

function MarqueeItem({ text }) {
	return (
		<Heading level={2} wrapperClasses=' mr-10'>
			{text}
		</Heading>
	);
}

export default TextMarquee;
