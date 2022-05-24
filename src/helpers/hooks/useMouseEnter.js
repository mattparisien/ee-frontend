import { useState, useRef, useEffect } from "react";

const useMouseEnter = () => {
	const [isEnter, setEnter] = useState(false);

	const ref = useRef(null);

	useEffect(() => {
		const handleMouseEnter = () => {
			setEnter(true);
		};
		const handleMouseLeave = () => {
			setEnter(false);
		};

		if (ref.current) {
			ref.current.addEventListener("mouseenter", handleMouseEnter);
			ref.current.addEventListener("mouseleave", handleMouseLeave);
		}
	}, [ref.current]);

	return { ref, isEnter };
};

export default useMouseEnter;
