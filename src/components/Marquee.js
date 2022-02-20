import gsap from "gsap";
import React, { useRef } from "react";
import Marquee from "react-marquee-slider";
import StyledMarquee from "./styles/StyledMarquee";



function SlidingText(props) {
	const { text } = props;
	const wrapper = useRef(null);
	const q = gsap.utils.selector(wrapper);
	const marqueeItem = useRef(null);

	const velocity = 10;
	const reactMarquees = 3;
	const marqueeItems = 5;

	

	return (
		<StyledMarquee className='marquee-wrapper' ref={wrapper}>
			{[...Array(reactMarquees)].map((el, i) => (
				<Marquee velocity={velocity} className='react-marquee' key={i}>
					{[...Array(marqueeItems)].map((el, i) => (
						<div className='marquee-item' key={i} ref={marqueeItem}>
							<h2 className="marquee-text">{text}</h2>
						</div>
					))}
				</Marquee>
			))}
			;
		</StyledMarquee>
	);
}

export default SlidingText;
