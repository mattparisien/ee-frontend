import { useEffect, useState, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

//Registers a scroll event handler with the correct scroll object, depending on whether locomotive scroll is active
function useScrollEvent(handler) {
	if (!handler) {
		throw Error("useScrollEvent: Must pass in a handler as an argument");
	}

	const [scrollContext, setScrollContext] = useState(null);

	const scroll = useLocomotiveScroll();
	const hasLocoSet = useRef(false);
	const hasWindowSet = useRef(false);

	useEffect(() => {
		if (scroll.isReady && !hasLocoSet.current) {
			scroll.scroll.on("scroll", handler);
			hasLocoSet.current = true;
		}

		if (!hasWindowSet.current) {
			window.addEventListener("scroll", handler);
			hasWindowSet.current = true;
		}


		return () => {
			window.removeEventListener("scroll", handler);
			scroll.scroll.destroy();
		}
	}, [scroll.isReady, handler]);

	return { window, scroll };
}

export default useScrollEvent;
