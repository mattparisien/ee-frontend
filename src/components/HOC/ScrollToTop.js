import React, { useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function ScrollToTop({ children, watch }) {
	const scroll = useLocomotiveScroll();

	useEffect(() => {
		if (scroll && scroll.scroll) {
			setTimeout(() => {
				scroll.scroll.scrollTo(0, 0);
			}, 760);
		}
	}, [watch]);

	return children;
}

export default ScrollToTop;
