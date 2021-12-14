import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useResize from "../helpers/hooks/useResize";
import useScroll from "../helpers/hooks/useScrollDir";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";

function Marquee(props) {
	const { text } = props;
	const [isScrolling, scrollDirection] = useScroll();
	const [speed, setSpeed] = useState();

	const [windowWidth, isResized] = useResize();
	const marqueePartOne = useRef(null);
	const marqueePartTwo = useRef(null);
	const marqueeFirstAnim = useRef(gsap.timeline());
	const marqueeSecondAnim = useRef(gsap.timeline({ paused: true }));

	useEffect(() => {
		if (isScrolling && scrollDirection) {
			setSpeed(prev => (prev += 200));
		}
	}, [isScrolling]);

	useEffect(() => {
		const animOne = marqueeFirstAnim.current;
		const animTwo = marqueeSecondAnim.current;
		const partOne = marqueePartOne.current;
		const partTwo = marqueePartTwo.current;
		const windowWidth = window.innerWidth;
		const partWidth = partOne.getBoundingClientRect().width;
		const duration = Math.ceil(partWidth / 100);
		let hasReset = false;
		let hasRepeat = false;

		const delay = 0.56;

		const getRightEdge = el => {
			const rightEdge = el.getBoundingClientRect().right;
			return rightEdge;
		};

		const animateSecondPart = () => {
			hasReset = false;
			gsap.set(partTwo, { x: windowWidth });
			animTwo.progress(0).play();
			animTwo.to(partTwo, {
				x: "-100%",
				ease: "linear",
				duration: duration,
				delay: delay,

				onUpdate: () => {
					if (getRightEdge(partTwo) <= windowWidth && !hasReset) {
						reset();
						hasReset = true;
					}
				},
			});
		};

		const reset = () => {
			gsap.set(partOne, { x: windowWidth });

			animatePartOne();
		};

		const animatePartOne = () => {
			hasRepeat = false;
			animOne.progress(0).play();
			animOne.to(partOne, {
				x: "-100%",
				ease: "linear",
				duration: duration,
				delay: delay,
				onUpdate: () => {
					//If right end of marquee hits the right side of viewport, call the next animation to begin
					if (getRightEdge(partOne) <= windowWidth && !hasRepeat) {
						animateSecondPart();
						hasRepeat = true;
					}
				},
			});
		};
		animatePartOne();
	}, []);

	return (
		<div className='marquee-wrapper'>
			<div className='marquee-inner'>
				<div
					className='marquee-part'
					ref={marqueePartOne}
					style={{ marginRight: "100px" }}
				>
					<div className='marquee-part__title'>
						<h2>{text} </h2>
					</div>
					<div className='marquee-part__title'>
						<h2>{text}</h2>
					</div>
				</div>
				<div
					className='marquee-part'
					ref={marqueePartTwo}
					style={{ marginRight: "100px" }}
				>
					<div className='marquee-part__title'>
						<h2>{text} </h2>
					</div>
					<div className='marquee-part__title'>
						<h2>{text}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Marquee;
