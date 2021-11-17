import $ from "jquery";
import { gsap } from "gsap";

export function animateMenuIn() {
	gsap.to($(".viewport-nav"), {
		y: 0,
		duration: 0.3,
		ease: "circ.out",
		
	});
};

export function animateMenuOut() {
	gsap.to($(".viewport-nav"), {
		y: '-100%',
		duration: 0.3,
		ease: "circ.out",
		
	});
}

export function animateTopBarIn() {
	gsap.to($(".bg-dynamic"), {
		y: '0',
		duration: 0.5,
		ease: "power2.in",
		delay: 0.1
	});
}

export function animateTopBarOut() {
	gsap.to($(".bg-dynamic"), {
		y: '-100%',
		duration: 0.5,
		ease: "power2.in",
		delay: 0.1
	});
}
