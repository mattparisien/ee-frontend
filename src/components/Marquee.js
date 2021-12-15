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
	const [speed, setSpeed] = useState(null)
	const n = 5;

	useEffect(() => {

		console.log('is resized!')
		if (marqueeItem.current) {
			let width = marqueeItem.current.offsetWidth;
			let speed = width / (n * 2);
			setSpeed(speed);
			console.log('hi')
		}


	}, [windowWidth])

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
