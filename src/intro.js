import $ from "jquery";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";

export default function introAnimation() {
	gsap.registerPlugin(CSSRulePlugin);

	const logo = $(".logo-wrapper");
	const letters = $("#header-logo").find("path");
	const burgerLines = $(".header-burger").find("span");
	const tl = gsap.timeline();

	console.log(burgerLines);

	tl.from(letters, {
    opacity: 0,
		y: "-100%",
		ease: "expo.out",
		duration: 1,
		stagger: 0.1,
	});
	tl.fromTo(
		logo,
		{
			y: 500,
		},
		{
			ease: "circ.inOut",
			y: 0,
			duration: 1.5,
		},
		1.3
	);
	tl.fromTo(
		burgerLines,
		{
      opacity: 0,
			scaleX: 0,
      transformOrigin: 'right',
		},
		{
      opacity: 1,
			scaleX: 1,
			duration: 0.9,
      stagger: 0.1,
      ease: 'circ.out'
		},
		1.8
	);
}
