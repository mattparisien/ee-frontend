import $ from "jquery";
import { gsap } from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { BlobTwo } from "./components/Svg";

function animateMenuIn() {
	gsap.registerPlugin(CSSRulePlugin);

	const rule = CSSRulePlugin.getRule(".viewport-nav__list-item:before");

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

export function toggleNavVisiblity(ref, state) {
	if (state) {
		gsap.to(ref, {
			x: 0,
			duration: 1,
			ease: 'expo.inOut'
		});
		gsap.to($("#header-logo"), {
			autoAlpha: 0,
			duration: 0.3,
		}, 0.5)
	} else {
		gsap.to(ref, {
			x: '-100%',
			duration: 1,
			ease: 'expo.inOut'
		});
		gsap.to($("#header-logo"), {
			autoAlpha: 1,
			duration: 0.3,
			delay: 0.2
		})
	}
	
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

export function animateSlider(el) {
	const trigger = $(el).closest(".-sticky");
	const end = $(el).width() * 2;
	const xOffset = $(el).width();

	const slideAnim = gsap.to(el, {
		scrollTrigger: {
			trigger: trigger,
			pin: true,
			pinSpacing: true,
			start: "top top",
			scrub: 1,
			start: "top",
			end: "+=1000",
		},
		x: -xOffset,
	});
}



export function followCursor(el) {
	$(el).css("visibility", "visible");
	$("body").on("mousemove", function (e) {
		let left = e.clientX;
		let top = e.clientY;

		$(el).css({
			top: top,
			left: left,
		});
	});
}
export function unfollowCursor(el) {
	$(el).css("visibility", "hidden");
	$("body").off("mousemove");
}

export function burgerAnim(state) {

	gsap.registerPlugin(CSSRulePlugin);

	const button = $(".header-burger");
	const top = button.find(".top");
	const bottom = button.find(".bottom");

	if (state) {
		gsap.to(button, {
			css: {
				className: '+= is-x'
			},
			duration: 3,
			ease: 'expo.out'
		})
	} else {
		gsap.to(button, {
			opacity: 1,
			duration: 3,
			ease: 'expo.out'
		})
	}
	

}
