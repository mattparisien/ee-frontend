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

export function animateBurgerToX() {
	const top = $(".header-burger").find(".top");
	const bottom = $(".header-burger").find(".bottom");

	const tl = gsap.timeline();

	tl.to(top, {
		transformOrigin: 'center',
		rotation: '30deg',
		width: '100%',
		duration: 0.5
	})
	tl.to(bottom, {
		transformOrigin: 'center',
		rotation: '-30deg',
	}, 0)

}

export function animateXToBurger() {
	const top = $(".header-burger").find(".top");
	const bottom = $(".header-burger").find(".bottom");

	gsap.to(top, {
		rotation: '0deg'
	})

}
