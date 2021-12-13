import React, { useRef, useEffect, useState } from "react";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import Line from "../Line";
import gsap from "gsap";
import { Arrow } from "../Svg";

function Project() {
	const marqueePartOne = useRef(null);
	const marqueePartTwo = useRef(null);
	const marqueeFirstAnim = useRef(gsap.timeline());
	const marqueeSecondAnim = useRef(gsap.timeline({ paused: true }));

	useEffect(() => {
		const initMarquee = () => {
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
				gsap.set(partTwo, { x: window.innerWidth });
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
				gsap.set(partOne, { x: window.innerWidth });

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

			//Init
			animatePartOne();
		};

		initMarquee();
	}, []);

	return (
		<>
			<Line color={"light"} />
			<Link to='/' className={"footer-next-project-clickable"}>
				<div className='footer-next-btn-wrapper footer-horiz-band'>
					<h2>Next</h2>
					<Arrow color={"light"} />
				</div>
				<Line color={"light"} />
				<div className='footer-next-title-wrapper footer-horiz-band'>
					<div className='marquee-wrapper'>
						<div className='marquee-inner'>
							<div
								className='marquee-part'
								ref={marqueePartOne}
								style={{ marginRight: "100px" }}
							>
								<h2>This is a marquee</h2>
							</div>

							<div className='marquee-part' ref={marqueePartTwo}>
								<h2>This is a marquee</h2>
							</div>
						</div>
					</div>
				</div>

				<Line color={"light"} />
			</Link>
		</>
	);
}

export default Project;
