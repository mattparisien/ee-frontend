import { useEffect, useRef, useState, useLayoutEffect } from "react";
import $, { Tween } from "jquery";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import { useFirstRender } from "./helpers/hooks/useFirstRender";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import { reverse } from "lodash";
import { isCompositeComponentWithType } from "react-dom/cjs/react-dom-test-utils.production.min";




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
