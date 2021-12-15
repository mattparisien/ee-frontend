import { useState, useEffect, useMemo } from "react";
import _, { debounce } from "lodash";

export default function useScroll() {
	const [scrollDirection, setScrollDirection] = useState(null);
	const [prevOffset, setPrevOffset] = useState(0);
	const [lastScroll, setLastScroll] = useState(new Date());
	const [isScrolling, setScrolling] = useState(false);

	const toggleScrollDirection = () => {
		let scrollY = window.scrollY;
		if (scrollY === 0) {
			setScrollDirection(null);
		}
		if (scrollY > prevOffset) {
			setScrollDirection("down");
		} else if (scrollY < prevOffset) {
			setScrollDirection("up");
		}
		setPrevOffset(scrollY);
	};

	const listenForScroll = () => {
		if (lastScroll.getTime() < new Date().getTime() - 300) {
			console.log("has not scrolled!");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleScrollDirection);
		return () => {
			window.removeEventListener("scroll", toggleScrollDirection);
		};
	});

	const handleEndScroll = useMemo(
		() => _.debounce(() => setScrolling(false), 800),
		[]
	);

	const handleScroll = () => {
		setScrolling(true)
		handleEndScroll()
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", listenForScroll);
		};
	});

	return [isScrolling, scrollDirection];
}
