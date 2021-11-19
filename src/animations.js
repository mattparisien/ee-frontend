import $ from "jquery";
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { BlobTwo } from "./components/Svg";

// function animateMenuIn() {
// 	gsap.registerPlugin(CSSRulePlugin);

// 	const rule = CSSRulePlugin.getRule(".viewport-nav__list-item:before");
// 	console.log(rule);

// 	const tl = gsap.timeline();

// 	tl.to($(".viewport-nav"), {
// 		y: 0,
// 		duration: 0.9,
// 		ease: "expo.in",
// 	});
// 	tl.to(rule, {
// 		scale: 0,
// 	});
// }

// function animateMenuOut() {
// 	gsap.to($(".viewport-nav"), {
// 		y: "-100%",
// 		duration: 0.9,
// 		ease: "expo.in",
// 	});
// }

// export function toggleNavVisiblity() {
// 	if ($(".viewport-nav").hasClass("is-active")) {
// 		animateMenuIn();
// 	}
// 	if ($(".viewport-nav").hasClass("is-off")) {
// 		animateMenuOut();
// 	}
// }

export function animateTopBarIn() {
	gsap.to($(".bg-dynamic"), {
		y: "0",
		duration: 0.5,
		ease: "power2.in",
		delay: 0.1,
	});
}

export function animateTopBarOut() {
	gsap.to($(".bg-dynamic"), {
		y: "-100%",
		duration: 0.5,
		ease: "power2.in",
		delay: 0.1,
	});
}

export function setStickySection(end) {
	const tl = gsap.timeline();
	const anim = tl.to($("#blob"), {
		scrollTrigger: {
			trigger: $(".hero-section"),
			start: "top top",
			pin: true,
			pinSpacing: true,
			end: end,
			scrub: 1,
		},
		transformOrigin: "center",
		scale: "600",
		ease: "linear",
	});

	return anim;
}

export function animateHeaderOut() {
	const tl = gsap.timeline();
	const burgerLines = $(".header-burger").find("span");
	const logo = $(".logo-wrapper");

	tl.to(burgerLines, {
		x: "100%",
		opacity: 0,
		stagger: 0.1,
		duration: 0.3,
		ease: "linear",
	});
	tl.to(
		logo,
		{
			y: "-100%",
			opacity: 0,
			duration: 0.3,
			ease: "linear",
			onComplete: () => {
				$("header").fadeOut(200);
			},
		},
		0
	);
}

export function animateHeaderIn() {
	const tl = gsap.timeline();
	const burgerLines = $(".header-burger").find("span");
	const logo = $(".logo-wrapper");
	$("header").css("display", "flex");
	tl.to(burgerLines, {
		x: "0",
		opacity: 1,
		duration: 0.3,
		ease: "linear",
	});
	tl.to(
		logo,
		{
			y: "0",
			opacity: 1,
			duration: 0.3,
			ease: "linear",
		},
		0
	);
}
