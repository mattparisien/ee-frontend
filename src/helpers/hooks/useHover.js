import { useEffect, useState, useRef } from "react";

export default function useHover(ref) {
	const [value, setValue] = useState(false);

	const handleMouseOver = () => setValue(true);
	const handleMouseOut = () => setValue(false);
	useEffect(
		() => {
			if (ref.current && ref.current.length) {
				ref.current.forEach(el => {
					el.addEventListener("mouseenter", handleMouseOver);
					el.addEventListener("mouseleave", handleMouseOut);
				});
			} else if (ref.current) {
				ref.current.addEventListener("mouseenter", handleMouseOver);
				ref.current.addEventListener("mouseleave", handleMouseOut);
			}

			return () => {
				if (ref.current && ref.current.length) {
					ref.current.forEach(el => {
						el.removeEventListener("mouseenter", handleMouseOver);
						el.removeEventListener("mouseleave", handleMouseOut);
					});
				} else if (ref.current) {
					ref.current.addEventListener("mouseenter", handleMouseOver);
					ref.current.addEventListener("mouseleave", handleMouseOut);
				}
			};
		}
		// Recall only if ref changes
	);
	return [value];
}
