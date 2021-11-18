import $ from "jquery";
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

export function animateMenuIn() {
	gsap.registerPlugin(CSSRulePlugin);

	const rule = CSSRulePlugin.getRule(".viewport-nav__list-item:before");
	console.log(rule);

	const tl = gsap.timeline();

	tl.to($(".viewport-nav"), {
		y: 0,
		duration: 0.9,
		ease: "expo.in",
	});
	tl.to(rule, {
		scale: 0,
	});
}

export function animateMenuOut() {
	gsap.to($(".viewport-nav"), {
		y: "-100%",
		duration: 0.9,
		ease: "expo.in",
	});
}

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
			end: end,
			scrub: 1,	
		},
		transformOrigin: 'center',
		scale: '600',
		ease: 'linear'

	});

	return anim;
}
