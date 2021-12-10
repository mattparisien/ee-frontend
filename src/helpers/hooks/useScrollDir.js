import { useState, useEffect } from "react";

export default function useScroll() {
	const [isScrolling, setScrolling] = useState(false);
	const [scrollDirection, setScrollDirection] = useState('up');

	useEffect(() => {
		let isCurrentlyScrolling;

		window.addEventListener(
			"scroll",
			function (event) {
				setScrolling(true);
				window.clearTimeout(isCurrentlyScrolling);

				// Set a timeout to run after scrolling ends
				isCurrentlyScrolling = setTimeout(function () {
					setScrolling(false);
				}, 66);
			},
			false
		);
	});

	useEffect(() => {
		let oldValue = 0;
		let newValue = 0;

		const handleScroll = e => {
			newValue = window.pageYOffset;
			if (oldValue < newValue) {
				setScrollDirection("up");
			} else if (oldValue > newValue) {
				setScrollDirection("down");
			}
			oldValue = newValue;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [isScrolling]);

	return [isScrolling, scrollDirection];
}
