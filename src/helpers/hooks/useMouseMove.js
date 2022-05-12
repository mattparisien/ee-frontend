import { useEffect, useState, useRef } from "react";

export default function useMouseMove() {
	const coords = useRef({
		pageX: 0,
		pageY: 0,
	});

	useEffect(() => {
		const handleMouseMove = e => {
			coords.current = {
				pageX: e.pageX,
				pageY: e.pageY,
			};
		};

		window.addEventListener("mousemove", e => handleMouseMove(e));

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return coords;
}
