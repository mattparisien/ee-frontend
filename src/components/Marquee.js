import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useResize from "../helpers/hooks/useResize";
import useScroll from "../helpers/hooks/useScrollDir";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.development";
import ScrollTrigger from "gsap/ScrollTrigger";

function Marquee(props) {
	const { text, triggerRef } = props;
	const [isScrolling, scrollDirection] = useScroll();
	const [speed, setSpeed] = useState();

	const [windowWidth, isResized] = useResize();
	const marqueePartOne = useRef(null);
	const marqueePartTwo = useRef(null);
	const inner = useRef(null);
	const marqueeFirstAnim = useRef(gsap.timeline());
	const marqueeSecondAnim = useRef(gsap.timeline({ paused: true }));
	const speedUpAnim = useRef(gsap.timeline());
	const itemRefs = useRef([]);
	const speedRef = useRef(null);
	itemRefs.current = [];

	const addToRefs = function (el) {
		if (el && !itemRefs.current[el]) {
			itemRefs.current.push(el);
		}
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const getTweenedElements = tl => {
			const targets = [];
			const children = tl.getChildren();
			for (let i = 0; i < children.length; i++) {
				if (i === 0) {
					return children[i]["_targets"];
				}
			}
		};

		const speedUpOnScroll = (target, playingTl) => {
			speedUpAnim.current.to(playingTl, {
				progress: playingTl.progress() + 0.01,
				ease: "expo.easeOut",
			});
		};

		const firstAnim = marqueeFirstAnim.current;
		const secondAnim = marqueeSecondAnim.current;

		if (firstAnim.isActive() && isScrolling) {
			// const target = getTweenedElements(firstAnim);
			// speedUpOnScroll(target, firstAnim);

			gsap.to(speedRef.current, {
				x: scrollDirection === "down" ? "-=500" : "+=500",
				duration: 1,
				ease: "power4.out",
			});
		}

		// if (marqueeSecondAnim.current.isActive()) {
		// 	console.log('the second one is active!')
		// }

		// if (isScrolling) {
		// 	gsap.to(itemRefs.current, {
		// 		x: "-=540",
		// 		duration: 2,
		// 		scrollTrigger: {
		// 			trigger: triggerRef.current,
		// 			start: "top bottom",
		// 			scrub: 4,
		// 		},
		// 		ease: "Expo.inOut",
		// 	});
		// }
	}, [isScrolling, triggerRef, itemRefs]);

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
					if (getRightEdge(partOne) <= windowWidth && !hasRepeat) {
						animateSecondPart();
						hasRepeat = true;
					}
				},
			});
		};
		animatePartOne();

		return () => {
			marqueeFirstAnim.current.kill();
			marqueeSecondAnim.current.kill();
		};
	}, []);

	return (
		<div className='marquee-wrapper'>
			<div className='marquee-inner' ref={inner}>
				<div className='speed-part' width='100%' height='100%' ref={speedRef}>
					<div
						className='marquee-part'
						ref={marqueePartOne}
						style={{ marginRight: "100px" }}
					>
						<div className='marquee-part__title' ref={addToRefs}>
							<h2>{text} </h2>
						</div>
						<div className='marquee-part__title' ref={addToRefs}>
							<h2>{text}</h2>
						</div>
					</div>
				</div>

				<div
					className='marquee-part'
					ref={marqueePartTwo}
					style={{ marginRight: "100px" }}
				>
					<div className='marquee-part__title' ref={addToRefs}>
						<h2>{text} </h2>
					</div>
					<div className='marquee-part__title' ref={addToRefs}>
						<h2>{text}</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Marquee;
