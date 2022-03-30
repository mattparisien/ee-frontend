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
		} else {
			gsap.to(cursorRef.current, {
				scale: 0.2,
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
