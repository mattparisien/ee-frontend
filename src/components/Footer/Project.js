import React, { useRef, useEffect, useState } from "react";
import Heading from "../Heading";
import { Link } from "react-router-dom";
import Line from "../Line";
import gsap from "gsap";

function Project() {
	const marqueePartOne = useRef(null);
	const marqueePartTwo = useRef(null);
	const marqueeFirstAnim = useRef(gsap.timeline());
	const marqueeSecondAnim = useRef(gsap.timeline({ paused: true }));
	const [hasRepeat, setRepeat] = useState(false);
	const [hasReset, setReset] = useState(false);

	useEffect(() => {
		const initMarquee = () => {
			const animOne = marqueeFirstAnim.current;
			const animTwo = marqueeSecondAnim.current;
			const partOne = marqueePartOne.current;
			const partTwo = marqueePartTwo.current;
			const windowWidth = window.innerWidth;

			const getRightEdge = el => {
				const rightEdge = el.getBoundingClientRect().right;
				return rightEdge;
			};

			const animateSecondPart = () => {
				animTwo.play();
				animTwo.to(partTwo, {
					x: "-100%",
					ease: "linear",
					duration: 20,
					delay: 0.56,
					onUpdate: () => {
						if (getRightEdge(partTwo) <= windowWidth && !hasReset) {
							reset();
							setReset(true);
						}
					},
				});
			};

			const reset = () => {
				gsap.set(partOne, { x: window.innerWidth });
				setRepeat(false);
				animatePartOne();
			};

			const animatePartOne = () => {
				console.log(hasRepeat)
				animOne.progress(0).play();
				animOne.to(partOne, {
					x: "-100%",
					ease: "linear",
					duration: 20,
					onUpdate: () => {
						//If right end of marquee hits the right side of viewport, call the next animation to begin
						if (getRightEdge(partOne) <= windowWidth && !hasRepeat) {
							animateSecondPart();
							setRepeat(true);
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
			<Link to='/'>
				<div className='footer-next-btn-wrapper'>
					<h2>Next</h2>
				</div>
				<Line color={"light"} />
				<div className='footer-next-title-wrapper'>
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
