import React, { useEffect, useRef } from "react";
import useMouseMove from "../../helpers/hooks/useMouseMove";
import classNames from "classnames";
import gsap from "gsap";

function DragCursor({ cursor }) {
	const classes = classNames("c-cursor", {
		"is-normal": cursor === "normal",
		"is-drag": cursor === "drag",
	});

	const cursorRef = useRef(null);

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
				scale: 0,
				duration: 0.5,
				ease: "power2.out",
				opacity: 0,
			});
		}
	}, [cursor]);

	const location = useMouseMove();

	return (
		<div
			className={classes}
			style={{ left: location.pageX, top: location.pageY, transform: `translate(-50%, -50%)` }}
			ref={cursorRef}
		>
			Drag
		</div>
	);
}

export default DragCursor;
