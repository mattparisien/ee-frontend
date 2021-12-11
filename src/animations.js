import { useEffect, useRef } from "react";
import $ from "jquery";
import { gsap } from "gsap";
import CustomEase from "gsap/CustomEase";
import useResize from "./helpers/hooks/useResize";
import { useFirstRender } from "./helpers/hooks/useFirstRender";

export function useSideMenu(appRefs, state, setState, themes) {
	const [windowWidth, isResized] = useResize();
	const [isFirstRender] = useFirstRender();
	const sideMenuAnim = useRef(gsap.timeline());

	//Toggle Menu Animation
	const toggleMenu = () => {
		setState(prev => ({ ...prev, menuIsShow: !state.menuIsShow }));
	};

	//Update menu offset on resize
	useEffect(() => {
		if (isResized) {
			setState(prev => ({ ...prev, menuOffset: "-101%" }));
		}
	}, [isResized]);

	//Side nav animation
	useEffect(() => {
		const refs = appRefs.current;

		if (state.menuIsShow) {
			const e = CustomEase.create(
				"custom",
				"M0,0,C-0.066,1,0.578,1,0.864,1,1.01,1,0.818,1.001,1,1"
			);

			sideMenuAnim.current.play();
			sideMenuAnim.current
				//Menu
				.to(
					refs["viewport-nav"],
					{
						x: +state.menuOffset,
						duration: 1.5,
						ease: "Expo.easeInOut",
					},
					0
				)
				//Circle
				.to(
					refs["menu-active-circle"],
					{
						scale: 1,
						y: "-50%",
						x: "-50%",
						opacity: 1,
						ease: "back.out(1)",
						fill: themes.colors.light,
						duration: 0.2,
					},
					1
				)
				//Burger top
				.to(
					refs["burger-top"],
					{
						transformOrigin: "center",
						margin: 0,
						rotation: "45",
						x: 0,
						duration: 0.4,
						y: "-50%",

						ease: "Expo.easeInOut",
					},
					0
				)
				//Burger
				.to(
					refs["header-burger"],
					{
						rotation: "360",
						duration: 1,
						ease: "Expo.easeInOut",
					},
					0
				)
				//Burger bottom
				.to(
					refs["burger-bottom"],
					{
						transformOrigin: "center",
						margin: 0,
						x: 0,
						rotation: "-45",
						y: "-50%",
						duration: 0.4,
						ease: "Expo.easeInOut",
					},
					0
				)
				//Logo
				.to(
					refs["header-logo"],
					{
						fill: themes.colors.light,
						duration: 0.3,
						ease: "linear",
					},
					0
				)
				//Links
				.to(
					$(refs["menu-links"]).find(".line .char"),
					{
						opacity: 1,
						y: 0,
						duration: 1.5,
						stagger: 0.1,
						ease: e,
					},
					0.15
				);
		} else if (!state.menuIsShow && !isFirstRender) {
			sideMenuAnim.current.reverse();
		}
	}, [state.menuIsShow, appRefs]);

	return [toggleMenu];
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
