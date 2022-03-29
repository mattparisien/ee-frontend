import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ContainerFluid from "../Containers/ContainerFluid";
import $ from "jquery";
import { DrawnLogo } from "../Vector/Svg";

function IntroCard() {
	gsap.registerPlugin(SplitText);
	const splitText = useRef(null);

	const background = useRef(null);
	const container = useRef(null);
	const text = useRef(null);
	const timelines = useRef([]);
	timelines.current = [];

	// useEffect(() => {
	// 	if (splitText.current) {
	// 		$(container.current)
	// 			.find(".c-line")
	// 			.each((i, el) =>
	// 				timelines.current.push(
	// 					gsap
	// 						.timeline({
	// 							paused: true,
	// 						})
	// 						.to($(el).find(".c-char"), {
	// 							y: 0,
	// 							opacity: 1,
	// 							ease: "expo.inOut",
	// 							stagger: 0.03,
	// 							duration: 2,
	// 						})
	// 						.to($(el).find(".c-char"), {
	// 							y: "-100%",
	// 							opacity: 0,
	// 							ease: "expo.inOut",
	// 							stagger: 0.03,
	// 							duration: 2,
	// 						})
	// 				)
	// 			);
	// 	}

	// 	if (!splitText.current) {
	// 		splitText.current = new SplitText(text.current, {
	// 			type: "lines, chars, words",
	// 			charsClass: "c-char",
	// 			linesClass: "c-line",
	// 		});
	// 	}

	// 	if (timelines.current.length === splitText.current.lines.length) {
	// 		gsap.set(text.current, { opacity: 1 });
	// 		gsap.set(background.current, { transformOrigin: "top" });

	// 		timelines.current.forEach((timeline, index) => {
	// 			if (index !== timelines.current.length - 1) {
	// 				timeline.play()
	// 			}
	// 		});

	// 		// gsap.set(container.current, { display: "none" });
	// 		// .to(
	// 		// 	background.current,
	// 		// 	{
	// 		// 		scaleY: 0,
	// 		// 		duration: 1.5,
	// 		// 		ease: "circ.inOut",
	// 		// 	},
	// 		// 	2.1
	// 		// )
	// 	}
	// }, [splitText.current, timelines.current]);

	return (
		<div className='o-introCard' ref={container}>
			<div className='o-introCard_inner -relative -flex -align-center -justify-center -stretchX -stretchY'>
				<div className='o-introCard_text o-h2 -text-center' ref={text}>
					<ContainerFluid>
						Creating social & environmental change by harnessing the power of
						music
					</ContainerFluid>
				</div>
				<div
					className='o-introCard_bg -stretchX -stretchY -bg-dark -absolute -top -left'
					ref={background}
				></div>
			</div>
		</div>
	);
}

export default IntroCard;
