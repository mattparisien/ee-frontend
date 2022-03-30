import React, { useEffect, useRef, useState } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import classNames from "classnames";
import gsap from "gsap";
import MorphSVGPlugin from "gsap/src/MorphSVGPlugin";

function DragCursor({ cursor }) {
	gsap.registerPlugin(MorphSVGPlugin);

	const classes = classNames("c-cursor", {
		"is-normal": cursor === "normal",
		"is-drag": cursor === "drag",
	});

	const location = useMouseMove();

	const [coords, setCoords] = useState({
		currentX: 0,
		currentY: 0,
		prevX: 0,
		prevY: 0,
	});
	const path = useRef(null);
	const morphTl = useRef(
		gsap.timeline({ repeat: -1, repeatDelay: 0, yoyo: true })
	);

	const cursorRef = useRef(null);

	const lerp = (start, end, t) => {
		return start * (1 - t) + end * t;
	};

	useEffect(() => {
		if (cursor === "drag") {
			gsap.to(cursorRef.current, {
				scale: 1,
				duration: 0.5,
				ease: "power2.out",
				opacity: 1,
			});

			morphTl.current
				.to(path.current, {
					morphSVG:
						"M58.1,-58.5C74.3,-41.9,85.7,-20.9,86.1,0.5C86.6,21.9,76.1,43.8,60,59.1C43.8,74.4,21.9,83.2,-0.4,83.5C-22.6,83.9,-45.3,75.9,-61.8,60.6C-78.4,45.3,-88.8,22.6,-89.3,-0.4C-89.7,-23.5,-80.2,-47,-63.6,-63.6C-47,-80.2,-23.5,-89.9,-1.3,-88.6C20.9,-87.3,41.9,-75.1,58.1,-58.5Z",
					duration: 1,
					ease: "linear",
				})
				.to(path.current, {
					morphSVG:
						"M60.6,-61.3C76,-45.3,84,-22.6,83.5,-0.6C82.9,21.5,73.7,43,58.3,59C43,75.1,21.5,85.7,-0.1,85.8C-21.8,85.9,-43.5,75.6,-59.1,59.5C-74.8,43.5,-84.3,21.8,-84,0.3C-83.6,-21.1,-73.5,-42.2,-57.8,-58.2C-42.2,-74.2,-21.1,-85.1,0.8,-85.9C22.6,-86.6,45.3,-77.3,60.6,-61.3Z",
					duration: 1,
				})
				.to(path.current, {
					morphSVG:
						"M59.6,-59.7C74.1,-45,80.7,-22.5,79.7,-0.9C78.8,20.6,70.3,41.3,55.8,57C41.3,72.7,20.6,83.5,-1.3,84.8C-23.2,86.1,-46.4,77.9,-61.2,62.1C-75.9,46.4,-82.1,23.2,-79.7,2.4C-77.3,-18.4,-66.3,-36.8,-51.5,-51.4C-36.8,-66,-18.4,-76.9,2.1,-78.9C22.5,-81,45,-74.3,59.6,-59.7Z",
					duration: 1,
					repeat: -1,
					repeatDelay: 0,
					yoyo: true,
				});
		} else {
			gsap.to(cursorRef.current, {
				scale: 0.1,
				duration: 0.5,
				ease: "power2.out",
			});
		}
	}, [cursor]);

	useEffect(() => {
		setCoords(prev => ({
			currentX: location.pageX,
			currentY: location.pageY,
			prevX: prev.currentX,
			prevY: prev.currentY,
		}));
	}, [location]);

	return (
		<div
			className={classes}
			style={{
				left: location.pageX,
				top: location.pageY,
				transform: `translate(-50%, -50%)`,
			}}
			ref={cursorRef}
		>
			<svg
				viewBox='0 0 200 200'
				xmlns='http://www.w3.org/2000/svg'
				className='c-cursor_svg'
			>
				<path
					ref={path}
					d='M158 42c15.6 15.5 25.4 36.8 26 58.5.5 21.8-8.2 44.2-23.8 59.9-15.5 15.7-37.9 24.7-60.3 24.9-22.5.1-45-8.8-61.2-24.5-16.3-15.7-26.1-38.2-26.1-60.8 0-22.6 9.8-45.1 26.1-60.7 16.2-15.5 38.7-24 60.6-23.3 21.9.6 43.2 10.5 58.7 26Z'
				/>
			</svg>
			{/* {cursor === "drag" && "Drag"} */}
		</div>
	);
}

export default DragCursor;
