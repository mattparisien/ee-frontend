import { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export const useScrollTop = location => {
	const scroll = useLocomotiveScroll();

	useEffect(() => {
		console.clear();
		setTimeout(() => {
			if (scroll && scroll.isReady) {
				console.log("made it in loco");
				scroll.scroll.scrollTo(0, 0);
			} else {
				console.log("made it in window");
				window.scrollTo(0, 0);
			}
		}, 200);
	}, [scroll, location]);

	return null;
};
