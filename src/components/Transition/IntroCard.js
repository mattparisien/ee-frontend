import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";

function IntroCard({ toggleDomAnimationReady }) {
	gsap.registerPlugin(SplitText);

	const [percentage, setPercentage] = useState(0);
	const [ease, setEase] = useState(200);
	const background = useRef(null);
	const container = useRef(null);
	const text = useRef(null);
	const timeline = useRef(gsap.timeline());

	const useInterval = (callback, delay) => {
		const savedCallback = useRef(null);

		useEffect(() => {
			savedCallback.current = callback;
		}, [callback]);

		useEffect(() => {
			let id = setInterval(() => {
				savedCallback.current();
			}, delay);
			return () => clearInterval(id);
		}, [delay]);
	};

	useInterval(() => {
		percentage < 100 && setPercentage(prev => prev + 1);
	}, ease);

	useEffect(() => {
		percentage < 80 ? setEase(prev => prev - 2) : setEase(prev => prev + 1);
	}, [percentage]);

	useEffect(() => {
		const chars = $(".o-hero_word .c-char");
		const logo = $(".o-hero .c-drawnLogo");
		gsap.set(background.current, { transformOrigin: "top" });
		gsap.set(chars, { y: "100%", opacity: 0 });

		if (percentage === 100) {
			timeline.current
				.to(text.current, {
					opacity: 0,
					duration: 1,
				})
				.to(
					background.current,
					{
						scaleY: 0,
						duration: 2.5,
						ease: "expo.inOut",
						onComplete: () => gsap.set(container.current, { display: "none" }),
					},
					0.6
				)
				.to(
					chars,
					{
						y: 0,
						opacity: 1,
						stagger: 0.05,
						ease: "expo.inOut",
						duration: 2,
					},
					1
				)
				.to(logo, { opacity: 1, x: 0 }, 1.3);
		}
	}, [percentage]);

	return (
		<div className='o-introCard' ref={container}>
			<div className='o-introCard_inner -relative -flex -align-center -justify-center -stretchX -stretchY'>
				<div className='o-introCard_text -text-center' ref={text}>
					{percentage}
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
