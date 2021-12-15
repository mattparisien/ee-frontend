import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useResize from "../helpers/hooks/useResize";
import useScroll from "../helpers/hooks/useScrollDir";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";
import ScrollTrigger from "gsap/ScrollTrigger";

import $ from "jquery";

function Marquee(props) {
	const { text, triggerRef } = props;
	const [isScrolling, scrollDirection] = useScroll();
	const container = useRef(null);

	useEffect(() => {
		const marqueeContainer = container.current;
		const q = gsap.utils.selector(marqueeContainer);
		let titles = q(".marquee-title");
		const boxWidth = titles[0].getBoundingClientRect().width;
		let modulusValue = boxWidth * 3;

	
		return () => {};
	}, []);

	return (
		<div className='marquee-wrapper' ref={container}>
			<div className='marquee-title'>
				<h2>{text}</h2>
			</div>
			<div className='marquee-title'>
				<h2>{text}</h2>
			</div>
			<div className='marquee-title'>
				<h2>{text}</h2>
			</div>
		</div>
	);
}

export default Marquee;
