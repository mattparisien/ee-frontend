import { gsap } from "gsap";
import $ from "jquery";

const introAnimation = onCompleteCb => {
	const timeline = gsap.timeline();
	const headerLogo = document.querySelector(".HeaderLogo");
	const characters = $(headerLogo).find(".chars path");
	const subtitle = $(headerLogo).find(".the");
	const subtitle2 = $(headerLogo).find(".agency");
	const subtitles = [...subtitle, ...subtitle2];
	const card = document.querySelector(".IntroCard");

	const windowHeight = window.innerHeight;
	gsap.set(headerLogo, {
		y: windowHeight / 2,
		scale: 2,
	});
	gsap.set(subtitles, {
		opacity: 0,
	});

	timeline
		.from(characters, {
			y: "-100px",
			stagger: 0.08,
			ease: "expo.inOut",
			duration: 2.6,
		})
		.to(headerLogo, { opacity: 1 }, 0.1)
		.to(
			headerLogo,
			{
				y: "0%",
				scale: 1,
				duration: 2,
				ease: "expo.inOut",
			},
			2.4
		)
		.to(card, { opacity: 0, duration: 1 })
		.to(
			subtitles,
			{
				opacity: 1,
				duration: 1,
				onComplete: () => {
					setTimeout(() => {
						onCompleteCb();
					}, 400);
				},
			},
			2
		);
};

export { introAnimation };
