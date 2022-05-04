import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Overlay({ color, sx }) {
	const overlayRef = useRef(null);
	const windowHeight = useRef(window.innerHeight);
	const scroll = useLocomotiveScroll();

	const animateOverlayOpacityIn = (overlay, top) => {
		const offset = windowHeight.current - top;
		const opacityValue = 1 - offset / (windowHeight.current / 2);
		overlay.style.opacity = opacityValue;
	};

	const handleScroll = (e, overlays) => {
		overlays.forEach(overlay => {
			const bounds = overlay.getBoundingClientRect();
			const itemTop = bounds.top;

			if (itemTop - 300 < windowHeight.current) {
				//If is entering viewport, fade overlay opacity
				animateOverlayOpacityIn(overlay, itemTop);
			}
		});
	};

	const hasRegisteredScroll = useRef(false);

	useEffect(() => {
		if (scroll && scroll.scroll && !hasRegisteredScroll.current) {
			hasRegisteredScroll.current = true;
			const overlays = document.querySelectorAll(".overlay");
			scroll.scroll.on("scroll", e => handleScroll(e, overlays));
		}
	}, [scroll, overlayRef]);

	return (
		<Box
			className='overlay'
			sx={theme => ({
				width: "100%",
				height: "100%",
				position: "absolute",
				pointerEvents: "none",
				opacity: 0,
				top: 0,
				left: 0,
				zIndex: 9999,
				backgroundColor: color ? color : theme.palette.primary.colorSet.yellow,

				...sx,
			})}
			ref={overlayRef}
		></Box>
	);
}

export default Overlay;
