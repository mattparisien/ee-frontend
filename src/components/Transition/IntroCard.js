import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";

function IntroCard() {
	gsap.registerPlugin(SplitText);
	const splitText = useRef(null);

	const background = useRef(null);
	const container = useRef(null);
	const text = useRef(null);
	const timeline = useRef(gsap.timeline());

	useEffect(() => {
		if (splitText.current) {
			timeline.current
				.set(text.current, { opacity: 1 })
				.set(background.current, { transformOrigin: "top" })
				.to($(text.current).find(".c-char"), {
					y: 0,
					opacity: 1,
					ease: "power3.inOut",
					stagger: 0.03,
					duration: 1,
				})
				.to($(text.current).find(".c-char"), {
					y: "-100%",
					opacity: 0,
					ease: "power3.inOut",
					stagger: 0.03,
					duration: 1,
				})
				.to(
					background.current,
					{
						scaleY: 0,
						duration: 1.5,
						ease: "circ.inOut",
					},
					2.1
				)
				.set(container.current, { display: "none" });
		}

		if (!splitText.current) {
			splitText.current = new SplitText(text.current, {
				type: "lines, chars",
				charsClass: "c-char",
			});
		}
	}, [splitText.current]);

	return (
		<div className='o-introCard' ref={container}>
			<div className='o-introCard_inner -relative -flex -align-center -justify-center -stretchX -stretchY'>
				<div className='o-introCard_text o-h2' ref={text}>
					Social impact for the better
				</div>
				<div
					className='o-introCard_bg -stretchX -stretchY -bg-yellow -absolute -top -left'
					ref={background}
				></div>
			</div>
		</div>
	);
}

export default IntroCard;
