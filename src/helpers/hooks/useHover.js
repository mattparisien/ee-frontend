import React, { useEffect, useState, useRef } from "react";

export default function useHover(ref) {
	const [value, setValue] = useState(false);

	const handleMouseOver = () => setValue(true);
	const handleMouseOut = () => setValue(false);
	useEffect(
		() => {
			if (ref.current) {
				ref.current.forEach(el => {
					el.addEventListener("mouseenter", handleMouseOver);
					el.addEventListener("mouseleave", handleMouseOut);
				});
			}

			return () => {
				if (ref.current) {
					ref.current.forEach(el => {
						el.removeEventListener("mouseenter", handleMouseOver);
						el.removeEventListener("mouseleave", handleMouseOut);
					});
				}
			};
		}
		// Recall only if ref changes
	);
	return [ref, value];
}
