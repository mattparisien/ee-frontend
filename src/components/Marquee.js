import React, { useEffect, useRef, useState } from "react";

import useResize from "../helpers/hooks/useResize";

import StyledMarquee from "./styles/StyledMarquee";
import Marquee, {
	Scale,
	Motion,
	randomIntFromInterval,
	randomFloatFromInterval,
} from "react-marquee-slider";

import $ from "jquery";
import { rest } from "lodash";

function SlidingText(props) {
	const { text } = props;
	const marqueeItem = useRef(null);
	const [windowWidth, isResized] = useResize();
	const [speed, setSpeed] = useState(null);
	const n = 5;

	useEffect(() => {
		if (marqueeItem.current) {
			let width = marqueeItem.current.offsetWidth * 5;
			let speed = width / 100
			setSpeed(speed);
		}
	}, [windowWidth]);

	return (
		<StyledMarquee>
			<Marquee velocity={speed}>
				{[...Array(n)].map((el, i) => (
					<div className='marquee-item' key={i} ref={marqueeItem}>
						<h2>{text}</h2>
					</div>
				))}
			</Marquee>
		</StyledMarquee>
	);
}

export default SlidingText;
