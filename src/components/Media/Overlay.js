import React, { useEffect, useRef } from "react";

function Overlay() {
	const overlayRef = useRef(null);

	const animateOverlayOpacityIn = (overlay, top) => {
		const offset = window.innerHeight - top;
		const opacityValue = 1 - offset / (window.innerHeight / 2);
		overlay.style.opacity = opacityValue;
	};

	const handleScroll = e => {
		const bounds = overlayRef.current.getBoundingClientRect();
		const itemTop = bounds.top;

		if (itemTop - 300 < window.innerHeight) {
			//If is entering viewport, fade overlay opacity
			animateOverlayOpacityIn(overlayRef.current, itemTop);
		}
	};

	useEffect(() => {
		if (window !== "undefined") {
			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (window !== "undefined") {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, [overlayRef]);

	return (
		<div
			className='Overlay w-full h-full absolute left-0 top-0 z-50 bg-yellow-custom pointer-events-none opacity-0'
			ref={overlayRef}
		></div>
	);
}

export default Overlay;
