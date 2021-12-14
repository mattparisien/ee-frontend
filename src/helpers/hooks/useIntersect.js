import { useEffect, useState } from "react";
import useAppData from "./useAppData";
import rgbToHex from "../rgbToHex";

// function useIntersection(arrayOfRefs, callback, options) {
// 	const [isIntersecting, setIntersecting] = useState(false);
// 	const [target, setTarget] = useState(false);

// 	useEffect(() => {
// 		//Handle possible errors
// 		if (!arrayOfRefs || !options) {
// 			console.error("useIntersection: You are either missing refs or options");
// 			return;
// 		} else if (!Array.isArray(arrayOfRefs)) {
// 			console.error("useIntersection: you must provide an array of refs");
// 			return;
// 		}
// 		const handleIntersection = entries => {
// 			entries.forEach(entry => {
// 				const isIntersecting = entry.isIntersecting;

// 				if (isIntersecting) {
// 					setIntersecting(true);
// 					setTarget(entry.target);
// 				}
// 			});
// 		};

// 		const observer = new IntersectionObserver(handleIntersection, options);

// 		arrayOfRefs.forEach(item => {
// 			observer.observe(item);
// 		});

// 		return () => {
// 			observer.disconnect();
// 		};
// 	}, [arrayOfRefs]);

// 	return [isIntersecting, target];
// }

export default function useIntersect(refs, setState) {
	const { themes } = useAppData();
	console.log('refs...', refs)

	useEffect(() => {
		const header = refs.current["side-header"];
		const sections = refs.current["sections"];

		const setHeaderColor = sectionColor => {
			const light = themes.colors["light"].toLowerCase();

			setState(prev => ({
				...prev,
				headerColor: sectionColor === light ? "dark" : "light",
			}));
		};

		const handleIntersection = entries => {
			console.log('hi in here!')
			entries.forEach(entry => {
				const isIntersecting = entry.isIntersecting;
				let sectionBg = "";
				let sectionHex = "";

				if (isIntersecting) {
					sectionBg = window.getComputedStyle(entry.target).backgroundColor;
					if (sectionBg !== "rgba(0, 0, 0, 0)") {
						sectionHex = rgbToHex(sectionBg);
						setHeaderColor(sectionHex);
					} else {
						return;
					}
				}
			});
		};

		const options = {
			threshold: 0,
			rootMargin: `0px 0px -95%`,
		};

		const observer = new IntersectionObserver(handleIntersection, options);

		sections.forEach(section => {
			console.log(section)
			observer.observe(section);
		});
	}, [refs]);
}

export { useIntersect };
