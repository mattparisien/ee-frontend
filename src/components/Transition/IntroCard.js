import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ContainerFluid from "../Containers/ContainerFluid";
import $ from "jquery";
import { DrawnLogo } from "../Vector/Svg";
import { split } from "lodash";

function IntroCard({ toggleDomAnimationReady }) {
	gsap.registerPlugin(SplitText);
	const splitText = useRef(null);

	const background = useRef(null);
	const container = useRef(null);
	const text = useRef(null);
	const tl = useRef(gsap.timeline());

	useEffect(() => {
		if (splitText.current) {
			// tl.current
			// 	.set(text.current, { opacity: 1 })
			// 	.to($(text.current).find(".c-char"), {
			// 		y: 0,
			// 		opacity: 1,
			// 		stagger: 0.05,
			// 		duration: 1,
			// 		ease: "power3.out",
			// 	});

			// splitText.current = splitText.current.revert().split();

			gsap.set(background.current, { transformOrigin: "top" });
			gsap.set(text.current, { opacity: 1 }).then(() => {
				let delay = 0;

				const lines = $(text.current).find(".c-line");

				for (let i = 0; i < lines.length; i++) {
					gsap.to(
						$(lines[i]).find(".c-char"),
						{
							y: 0,
							opacity: 1,
							duration: 1,
							ease: "power3.out",
							stagger: 0.03,
						},
						delay
					);

					setTimeout(() => {
						gsap
							.to(background.current, {
								scaleY: 0,
								duration: 1,
								ease: "circ.inOut",
							})
							.then(() => {
								gsap.set(container.current, { display: "none" });
							});
						gsap.to(text.current, {
							opacity: 0,
							onComplete: () => toggleDomAnimationReady()
						});
					}, 2200);

					delay += 0.5;
				}
			});
		}

		if (!splitText.current) {
			splitText.current = new SplitText(text.current, {
				type: "chars",
				charsClass: "c-char",

				wordsClass: "c-word",
			});
		}
	}, [splitText.current]);

	return (
		<div className='o-introCard' ref={container}>
			<div className='o-introCard_inner -relative -flex -align-center -justify-center -stretchX -stretchY'>
				<div className='o-introCard_text -text-center' ref={text}>
					<div className='c-line'>Creating social & environmental change</div>{" "}
					<div className='c-line'>by harnessing the power of music</div>
				</div>
				<div
					className='o-introCard_bg -stretchX -stretchY  -absolute -top -left'
					ref={background}
				></div>
			</div>
		</div>
	);
}

export default IntroCard;
