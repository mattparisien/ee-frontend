import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useResize from "../helpers/hooks/useResize";
import useScroll from "../helpers/hooks/useScrollDir";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";

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

	const n = 5;

	return (
		<StyledMarquee>
		<Marquee velocity='12'>
			{[...Array(n)].map((el, i) => (
				<div className='marquee-item' key={i}>
					<h2>hiiii</h2>
				</div>
			))}
		</Marquee>
		</StyledMarquee>
	);
}

export default SlidingText;
