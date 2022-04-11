import { gsap } from "gsap";
import $ from "jquery";

const introAnimation = (timeline, onCompleteCb) => {
	const headerLogo = document.querySelector(".c-header_logo");
	const characters = $(headerLogo).find(".chars path");
	const listItems = $(".c-header li");
	const subtitle = $(headerLogo).find(".the");
	const subtitle2 = $(headerLogo).find(".agency");
	const subtitles = [...subtitle, ...subtitle2];
	const header = document.querySelector("header");
	const burger = document.querySelector(".c-header_nav-btn");
	const drawnLogo = document.querySelector(".o-page_home .o-hero .c-drawnLogo");
	const card = document.querySelector(".intro-card");
	const heroChars = document.querySelectorAll(".o-hero .c-char");

	const windowHeight = window.innerHeight;
	gsap.set(headerLogo, {
		y: windowHeight / 2,
	});
	gsap.set(subtitles, {
		opacity: 0,
	});

	setTimeout(() => {
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
					width: "140px",
					duration: 2,
					ease: "expo.inOut",
				},
				2.4
			)
			.to(header, { boxShadow: "3px 4px 30px -12px rgba(0, 0, 0, 0.2)" }, 4)
			.to(card, { opacity: 0, duration: 1 })
			.to(
				subtitles,
				{
					opacity: 1,
					duration: 1,
				},
				2
			)
			.to(
				drawnLogo,
				{
					opacity: 1,

					ease: "power3.out",
					duration: 1,
				},
				4
			)
			.to(
				burger,
				{
					opacity: 1,
					duration: 1,
				},
				4
			)
			.to(
				listItems,
				{
					opacity: 1,
					duration: 1,
					stagger: 0.1,
				},
				4
			)
			.to(
				heroChars,
				{
					opacity: 1,
					y: 0,
					duration: 1,
					stagger: 0.05,
					ease: "power3.out",
					onComplete: () => {
						onCompleteCb(prev => !prev);
						gsap.set(card, { display: "none" });
					},
				},
				4
			);
		// .to($(".o-page_home .o-hero").find(".c-char"), {
		// 	y: 0,
		// 	opacity: 1,
		// 	stagger: 0.03,
		// 	ease: "power3.out",
		// });
	}, 500);
};

export { introAnimation };
