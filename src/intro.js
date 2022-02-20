import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import $ from "jquery";

export default function introAnimation() {
	gsap.registerPlugin(CSSRulePlugin);

	const logo = $(".logo-wrapper");
	const letters = $("#header-logo").find("path");
	const burgerLines = $(".header-burger").find("span");
	const tl = gsap.timeline();
	const viewportHeight = $(window).innerHeight();
	const logoOffset = logo.offset().top;
	const centered = viewportHeight / 2 - logoOffset;
	const background = $(".intro-bg");
	const heading = $("#hero-heading");

	//Disable scrolling while intro is being played
	$("body").css("overflow-y", "hidden");

	tl.delay(1);
	tl.from(
		background,
		{
			scaleY: 0,
			transformOrigin: "top",
			duration: 1.5,
			ease: "circ.inOut",
		},
		0
	);
	tl.from(
		letters,
		{
			opacity: 0,
			y: "-100%",
			ease: "expo.out",
			duration: 1,
			stagger: 0.1,
		},
		1.4
	);
	tl.fromTo(
		logo,
		{
			y: centered,
		},
		{
			ease: "circ.inOut",
			y: 0,
			duration: 1.5,
		},
		3
	);
	tl.fromTo(
		burgerLines,
		{
			opacity: 0,
			scaleX: 0,
			transformOrigin: "right",
		},
		{
			opacity: 1,
			scaleX: 1,
			duration: 0.9,
			stagger: 0.1,
			ease: "circ.out",
		},
		3
	);
	tl.from(
		heading,
		{
			autoAlpha: 0,
			onComplete: () => {
				$("body").css("overflow-y", "visible");
			},
		},
		4
	);
}
