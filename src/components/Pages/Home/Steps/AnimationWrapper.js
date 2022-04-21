import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import $ from "jquery";

function AnimationWrapper({ children }) {
	const { ref, inView, entry } = useInView();
	const hasPassedViewport = useRef(false);
	const scroll = useLocomotiveScroll();

	useEffect(() => {
		if (inView && !hasPassedViewport.current && scroll.isReady) {
      console.log('hellot this is being called')
			//Animate circles
			const circles = [
				...document.querySelectorAll(".circles-wrapper .circle-wrapper"),
			];
      const windowHeight = window.innerHeight;
			console.log(circles);

			const handleScroll = e => {
				const { top } = entry.target.getBoundingClientRect();
				const scrollTop = e.scroll.y;
				const translateVal = top - scrollTop / 30

				circles.forEach(circle => {
					circle.style.transform = `translateY(${translateVal}px)`
				});
			};

			scroll.scroll.on("scroll", handleScroll);

			hasPassedViewport.current = true;
		}
	}, [inView, scroll]);

	return (
		<Box ref={ref} position='relative'>
			{children}
		</Box>
	);
}

export default AnimationWrapper;
