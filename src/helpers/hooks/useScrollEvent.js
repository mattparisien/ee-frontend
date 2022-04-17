import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

//Registers a scroll event handler with the correct scroll object, depending on whether locomotive scroll is active
function useScrollEvent(handler) {
	if (!handler) {
		throw Error("useScrollEvent: Must pass in a handler as an argument");
	}

	const [scrollContext, setScrollContext] = useState(null);

	const scroll = useLocomotiveScroll();

	useEffect(() => {
		if (scroll.isReady && !scrollContext) {
			setScrollContext({
				name: "locomotive",
				scroller: scroll.scroll,
			});
		} else if (!scroll.isReady && !scrollContext) {
			setScrollContext({
				name: "window",
				scroller: window,
			});
		}
	}, [scroll]);

	useEffect(() => {
		if (scrollContext && scrollContext.scroller) {
			scrollContext.name === "locomotive"
				? scrollContext.scroller.on("scroll", handler)
				: scrollContext.scroller.addEventListener("scroll", handler);
		}

		return () => {
			if (scrollContext && scrollContext.scroller) {
				scrollContext.name === "locomotive"
					? scrollContext.scroller.destroy()
					: scrollContext.scroller.removeEventListener("scroll", handler);
			}
		};
	}, [scrollContext]);

	return scrollContext;
}

export default useScrollEvent;