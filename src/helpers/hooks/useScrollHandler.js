import React, { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import useResize from "./useResize";

function useScrollHandler(handler) {
	const scroll = useLocomotiveScroll();
	const [scroller, setScroller] = useState(null);

	useEffect(() => {
		if (!scroll.isReady) {
			setScroller({
				name: "window",
				scroller: window,
			});
		} else {
			setScroller({
				name: "locomotive",
				scroller: scroll.scroll,
			});
		}
	}, [scroll.isReady]);

	useEffect(() => {
		if (scroller && handler) {
			
			if (scroller.name === "locomotive") {
				scroller.scroller.on("scroll", e => handler(e));
			} else {
				scroller.scroller.addEventListener("scroll", e => {
					handler(e);
				});
			}
		}
	}, [scroller, handler]);
}

export default useScrollHandler;
