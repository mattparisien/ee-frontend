import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useResize from "../helpers/hooks/useResize";
import useScroll from "../helpers/hooks/useScrollDir";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";

import StyledMarquee from "./styles/StyledMarquee";

import $ from "jquery";
import { rest } from "lodash";

function CustomMarquee(props) {
	const { text, triggerRef } = props;
	const [isScrolling, scrollDirection] = useScroll();
	const container = useRef(null);
	const box = useRef(null);
	const [reset, setReset] = useState({
		isReset: false,
		resetEl: null
	});
	const boxWidth = box.current && box.current.offsetWidth;

	useEffect(() => {
		const marqueeContainer = container.current;
		const q = gsap.utils.selector(marqueeContainer);
		let titles = q(".marquee-title");

		const boxRight = titles[0].getBoundingClientRect().right;

		const containerWidth = marqueeContainer.getBoundingClientRect().width;

		const scrollOffset = window.innerWidth + titles[1].offsetWidth;

		const resetToLeft = () => {

			console.log(reset)
			if (reset.isReset) {
				setReset(false);
				gsap.killTweensOf(reset.resetEl);
				gsap.set(reset.resetEl, {
					left: -boxWidth,
					x: 0,
				});
				gsap.to(reset.resetEl, {
					x: scrollOffset,
					duration: 10,
					ease: "none",
					onUpdate: () => {
						if (reset.resetEl.getBoundingClientRect().left >= window.innerWidth) {
							resetToLeft();
						}
					},
				});
			}
		}

		resetToLeft();

		
	}, [reset.isReset]);

	useEffect(() => {
		const marqueeContainer = container.current;
		const q = gsap.utils.selector(marqueeContainer);
		let titles = q(".marquee-title");

		const boxRight = titles[0].getBoundingClientRect().right;

		const containerWidth = marqueeContainer.getBoundingClientRect().width;

		const scrollOffset = window.innerWidth + titles[1].offsetWidth;

		const initMarquee = () => {
			const scroller = gsap.to(titles, {
				x: scrollOffset,
				duration: 10,
				ease: "none",

				onUpdate: () => {
					for (let title of titles) {
						if (
							title.getBoundingClientRect().left >= window.innerWidth 
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
		<StyledMarquee
			className='styled-marquee-wrapper'
			ref={container}
			$boxWidth={boxWidth}
		>
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
