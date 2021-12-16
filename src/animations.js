import { useEffect, useRef, useState, useLayoutEffect } from "react";
import $, { Tween } from "jquery";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import { useFirstRender } from "./helpers/hooks/useFirstRender";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { reverse } from "lodash";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.production.min";

export function useTransition(appRefs, state, setState) {
	const masterTl = useRef(gsap.timeline({ paused: true }));
	const transitionOutTl = useRef(gsap.timeline({ paused: true }));
	const transitionInTl = useRef(gsap.timeline({ paused: true }));
	const isFirstRender = useFirstRender();
	const tweenInTl = useRef(gsap.timeline());
	const tweenOutTl = useRef(gsap.timeline());

	useEffect(() => {
		gsap.registerPlugin(MorphSVGPlugin);
		const container = appRefs.current["site-transition"];
		const path = appRefs.current["transition-morph-enter"];
		const dur = 0.3;
		const shapes = {
			enter: [
				"M-3.1,1073.81h1920c-723.06,8.48-1221.05,8-1920,0Z",
				"M1920,1080H0C624.14,567.69,1263.74,554.67,1920,1080Z",
				"M1920,895.59V1080H0V916.69C614.63,2.42,1253.61-57.74,1920,895.59Z",
				"M1920,553.35V1080H0V553.35C795.2-178,1231.21,0,1920,553.35Z",
				"M1920,192.36V1080H0V161.11C987.5,9.52,1353.18,53.28,1920,192.36Z",
				"M0,0V1080H1920V0Z",
			],
		};

		//Reset state/path attributes on trans complete
		const reset = () => {
			setState(prev => ({ ...prev, isTransitioning: false }));
			path.setAttribute("d", shapes.enter[0]);
			gsap.set(path, { y: 0 });
			transitionInTl.current.pause();
		};
		//In
		transitionInTl.current
			.set(container, {
				display: "block",
			})
			.to(path, {
				morphSVG: shapes.enter[0],
				ease: "none",
				duration: dur,
			})
			.to(path, {
				morphSVG: shapes.enter[1],
				ease: "none",
				duration: dur,
			})
			.to(path, {
				morphSVG: shapes.enter[2],
				duration: dur,
				ease: "none",
			})
			.to(path, {
				morphSVG: shapes.enter[3],
				duration: dur,
				ease: "none",
			})
			.to(path, {
				morphSVG: shapes.enter[4],
				duration: dur,
				ease: "none",
			})
			.to(path, {
				morphSVG: shapes.enter[5],
				duration: dur,
				ease: "none",
			});

		transitionOutTl.current
			.to(path, {
				morphSVG: "M1920,1080C1263.74,554.67,624.14,567.69,0,1080V0H1920Z",
				duration: dur,
				ease: "none",
			})
			.to(path, {
				morphSVG: "M1920,895.59C1253.61-57.74,614.63,2.42,0,916.69V0H1920Z",
				duration: dur,
				ease: "none",
			})
			.to(path, {
				morphSVG: "M1920,553.35C1231.2,0,795.2-178,0,553.35V0H1920Z",
				duration: dur,
				ease: "none",
			})
			.to(path, {
				morphSVG: "M1920,192.36C1353.18,53.28,987.5,9.52,0,161.11V0H1920Z",
				duration: dur,
				y: "-200px",
				ease: "none",
			})
			.set(container, {
				display: "none",
				onComplete: () => {
					reset();
				},
			});
	}, [appRefs]);

	useEffect(() => {
		const transitionEnter = () => {
			tweenInTl.current.progress(0).play();
			tweenInTl.current.to(
				transitionInTl.current,
				transitionInTl.current.duration(),
				{
					progress: 1,
					ease: "power4.out",
					onComplete: () => transitionLeave(),
				}
			);
		};

		const transitionLeave = () => {
			tweenOutTl.current.progress(0).play();
			tweenOutTl.current.to(
				transitionOutTl.current,
				transitionOutTl.current.duration(),
				{
					progress: 1,
					ease: "power4.out",
				}
			);
		};

		if (state.isTransitioning) {
			transitionEnter();
		}
	}, [state.isTransitioning]);
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
