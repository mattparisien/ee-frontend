import React, { useEffect, useRef } from "react";

function Overlay({ color, sx }) {
	const overlayRef = useRef(null);

	const animateOverlayOpacityIn = (overlay, top) => {
		const offset = windowHeight.current - top;
		const opacityValue = 1 - offset / (windowHeight.current / 2);
		overlay.style.opacity = opacityValue;
	};

	const handleScroll = (e, overlays) => {
		overlays.forEach(overlay => {
			const bounds = overlay.getBoundingClientRect();
			const itemTop = bounds.top;

			if (itemTop - 300 < window.innerHeight) {
				//If is entering viewport, fade overlay opacity
				animateOverlayOpacityIn(overlay, itemTop);
			}
		});
	};

	useEffect(() => {
		if (window !== "undefined") {
			const overlays = document.querySelectorAll(".overlay");
			window.addEventListener("scroll", e => handleScroll(e, overlays));
		}
	}, [overlayRef]);

	return (
		<div
			className='Overlay w-full h-full absolute left-0 top-0 z-50 bg-yellow-custom pointer-events-none opacity-0'
			ref={overlayRef}
		></div>
	);
}

export default Overlay;
