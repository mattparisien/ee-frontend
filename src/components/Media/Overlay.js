import React, { useRef, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { Box } from "@mui/material";

function Overlay({ color }) {
	const ref = useRef(null);
	const overlayRef = useRef(null);
	const windowHeight = useRef(window.innerHeight);
	const scroll = useLocomotiveScroll();

	const animateOverlayOpacityIn = (overlay, top) => {
		const offset = windowHeight.current - top;
		const opacityValue = 1 - offset / (windowHeight.current / 2);
		overlay.style.opacity = opacityValue;
	};

	const handleScroll = () => {
		const bounds = overlayRef.current.getBoundingClientRect();
		const itemTop = bounds.top;

		if (itemTop - 300 < windowHeight.current) {
			//If is entering viewport, fade overlay opacity
			animateOverlayOpacityIn(overlayRef.current, itemTop);
		}
	};

	const hasRegisteredScroll = useRef(false);

	useEffect(() => {
		if (scroll && scroll.scroll && !hasRegisteredScroll.current)
			hasRegisteredScroll.current = true;
		{
			scroll.scroll.on("scroll", handleScroll);
		}
	}, [scroll]);

	const overlay = {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		left: 0,
		backgroundColor: color,
	};
	return <Box className='overlay' sx={overlay} ref={overlayRef}></Box>;
}

export default Overlay;
