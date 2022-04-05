import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";

function IntroCard({ toggleDomAnimationReady, pending }) {
	gsap.registerPlugin(SplitText);

	const background = useRef(null);
	const container = useRef(null);

	const timeline = useRef(gsap.timeline());

	useEffect(() => {
		const chars = $(".o-hero_word .c-char");
		const logo = $(".o-hero .c-drawnLogo");
		gsap.set(background.current, { transformOrigin: "top" });
		gsap.set(chars, { y: "100%", opacity: 0 });

		!pending &&
			setTimeout(() => {
				timeline.current

					.to(
						background.current,
						{
							scaleY: 0,
							duration: 2.5,
							ease: "expo.inOut",
							onComplete: () =>
								gsap.set(container.current, { display: "none" }),
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
			}, 200);
	}, [pending]);

	return (
		<div className='o-introCard' ref={container}>
			<div
				className='o-introCard_bg -stretchX -stretchY  -absolute -top -left'
				ref={background}
			></div>
		</div>
	);
}

export default IntroCard;
