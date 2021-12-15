import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useResize from "../helpers/hooks/useResize";
import useScroll from "../helpers/hooks/useScrollDir";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";


import StyledMarquee from "./styles/StyledMarquee";

import $ from "jquery";

function CustomMarquee(props) {
	const { text, triggerRef } = props;
	const [isScrolling, scrollDirection] = useScroll();
	const container = useRef(null);
	const box = useRef(null);
	const [reset, setReset] = useState(false);
	const boxWidth = box.current && box.current.offsetWidth;

	useEffect(() => {
		if (reset.isReset) {
			gsap.killTweensOf(reset.resetEl);
			gsap.set(reset.resetEl, {
				left: -boxWidth,
				x: 0
			});
		}
	}, [reset.isReset]);

	useEffect(() => {
		const marqueeContainer = container.current;
		const q = gsap.utils.selector(marqueeContainer);
		let titles = q(".marquee-title");

		const boxRight = titles[0].getBoundingClientRect().right;

		const containerWidth = marqueeContainer.getBoundingClientRect().width;

		const scrollOffset =
			window.innerWidth - titles[0].getBoundingClientRect().left;

		const initMarquee = () => {
			const scroller = gsap.to(titles, {
				x: scrollOffset,
				duration: 5,
				ease: "none",

				onUpdate: () => {
					for (let title of titles) {
						if (
							title.getBoundingClientRect().left >= window.innerWidth &&
							!reset.isReset
						) {
							setReset({
								isReset: true,
								resetEl: title,
							});
						}
					}
				},
			});
		};

		initMarquee();

		return () => {};
	}, []);

	return (
		<StyledMarquee className='styled-marquee-wrapper' ref={container} $boxWidth={boxWidth}>
			<div className='marquee-inner-relative'>
				<div className='marquee-title' ref={box}>
					<h2>{text}</h2>
				</div>
				<div className='marquee-title'>
					<h2>{text}</h2>
				</div>
				<div className='marquee-title'>
					<h2>{text}</h2>
				</div>
			</div>
		</StyledMarquee>
	);
}

export default CustomMarquee;
