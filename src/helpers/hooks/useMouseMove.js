import { useState, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function useMouseMove() {
	const [location, setLocation] = useState({});
	

	useEffect(() => {
		const handleMouseMove = (e, index) => {
			
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

	return location;
}
