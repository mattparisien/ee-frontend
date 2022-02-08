import gsap from "gsap";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

export const pageTransitionAnimation = (timeline, text, transitionCard, morphPath) => {
	const tl = timeline.current;
	const tagline = text.current;
	const container = transitionCard.current;
	const path = morphPath.current;
	const q = gsap.utils.selector(tagline);
	const chars = q(".line .char");

	tl.set(container, { display: "block" });
	tl.set(path, { attr: { d: "M1031.55,768.1H75.16v-1.24l956.39.39Z" } })
	.to(path, {
		morphSVG: "M1031.55,768.1H75.16V479.45c297.87-290.93,614-328.79,956.39,0Z",
		duration: 0.5,
		ease: "power3.in"
	})
	.to(path, {
		morphSVG: "M1031.55,768.1H75.16V190.8h956.39Z",
		duration: 0.5,
		ease: "power3.out"
	})
	.addLabel(">", "isHalfway")
		.to(chars, {
			y: 0,
			duration: 0.5,
			stagger: 0.01,
			opacity: 1,
			ease: "expo.easeInOut",
		})
		.to(chars, {
			delay: 1,
			y: "-100%",
			duration: 0.5,
			stagger: 0.01,
			opacity: 0,
		})
		.to(path, {
			morphSVG:
				"M1031.55,588.51c-325.63-357-644.29-358.79-956.39,0V190.8h956.39Z",
			duration: 0.5,
			ease: "power3.in",
		})
		.to(path, {
			morphSVG: "M1031.55,192.36c-421.94.1-539.14-.26-956.39,1v-2.6h956.39Z",
			duration: 0.5,
			ease: "power3.out",
			opacity: 0,
		})
		.to(
			container,
			{
				opacity: 0,
				duration: 0.5,
			},
			4.5
		)
		.set(container, {
			display: "none",
		});

	return tl;
};

