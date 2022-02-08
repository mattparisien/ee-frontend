import { useRef, useEffect } from "react";
import gsap from "gsap";
import $ from "jquery";
import useSplit from "../helpers/hooks/useSplit";
import useResize from "../helpers/hooks/useResize";
import { deviceSize } from "../components/styles/device";

export default function useHoverEffect(container) {

	
	
	const [windowWidth] = useResize();
	const q = gsap.utils.selector(container);
	const links = q("a");
	const [isSplit, chars] = useSplit(links);

	useEffect(() => {
		const handleMouseEnter = e => {
			const linkChars = $(e.target).find(".char");
			const tl = gsap.timeline();
			let delay = 0;

			linkChars.each((i, char) => {
				const tl = gsap.timeline();
				tl.timeScale(1.2).to(char, {
					y: "-50%",
					stagger: 0.1,
					ease: "power1.in",
					duration: 0.45,
					opacity: 0,
					delay: (delay += 0.1),
					onComplete: () => {
						gsap.set(char, {
							y: "50",
						});
						tl.to(char, {
							ease: "power1.out",
							duration: 0.4,
							opacity: 1,
							y: 0,
							stagger: 0.1,
						});
					},
				});
			});
		};

		//Remove on mobile
		if (windowWidth > deviceSize.mobileL) {
			links.forEach(link => {
				link.addEventListener("mouseenter", e => handleMouseEnter(e));
			});
		}

		if (windowWidth < deviceSize.mobileL) {
			
			links.forEach(link => {
				link.removeEventListener("mouseenter", handleMouseEnter);
			});
		}

		return () => {
			links.forEach(link => {
				link.removeEventListener("mouseenter", handleMouseEnter);
			});
		};
	}, [links, windowWidth]);
}
