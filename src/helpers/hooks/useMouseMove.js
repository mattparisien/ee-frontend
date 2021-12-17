import { useState, useEffect } from "react";

export default function useMouseMove() {
	const [isMoving, setMoving] = useState(false);
	const [location, setLocation] = useState({
		pageX: null,
		pageY: null,
	});

	useEffect(() => {
		const handleMouseMove = e => {
			setLocation({
				pageX: e.clientX,
				pageY: e.clientY,
			});
		};

		window.addEventListener("mousemove", e => handleMouseMove(e));

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return [location];
}
