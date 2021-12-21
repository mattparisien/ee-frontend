import { useEffect, useState } from "react";
import useAppData from "./useAppData";
import rgbToHex from "../rgbToHex";
import gsap from "gsap";

function useIntersection(arrayOfRefs, options) {
	const [state, setState] = useState({
		isIntersecting: false,
		target: null,
	});

	useEffect(() => {
		//Handle possible errors
		if (!arrayOfRefs || !options) {
			console.error("useIntersection: You are either missing refs or options");
			return;
		} else if (!Array.isArray(arrayOfRefs)) {
			console.error("useIntersection: you must provide an array of refs");
			return;
		}
		const handleIntersection = entries => {
			entries.forEach(entry => {
				const isIntersecting = entry.isIntersecting;

				if (isIntersecting) {
					setState({
						isIntersecting: true,
						target: entry.target,
					});
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersection, options);

		arrayOfRefs.forEach(item => {
			observer.observe(item);
			state.target && observer.unobserve(state.target);
		});

		return () => {
			observer.disconnect();
		};
	}, [arrayOfRefs]);

	return [state.isIntersecting, state.target];
}

// export default function useIntersect(refs, setState) {
// 	const { themes } = useAppData();

// 	useEffect(() => {
// 		const currentPage = refs.current.currentPage;
// 		const q = gsap.utils.selector(currentPage);
// 		const header = refs.current["side-header"];

// 		const setHeaderColor = sectionColor => {
// 			const light = themes.colors["light"].toLowerCase();

// 			setState(prev => ({
// 				...prev,
// 				headerColor: sectionColor === light ? "dark" : "light",
// 			}));
// 		};

// 		const handleIntersection = entries => {
// 			let count = 0;

// 			entries.forEach(entry => {
// 				const isIntersecting = entry.isIntersecting;
// 				let sectionBg = "";
// 				let sectionHex = "";

// 				if (isIntersecting) {
// 					sectionBg = window.getComputedStyle(entry.target).backgroundColor;
// 					if (sectionBg !== "rgba(0, 0, 0, 0)") {
// 						sectionHex = rgbToHex(sectionBg);
// 						setHeaderColor(sectionHex);
// 					} else {
// 						return;
// 					}
// 				}
// 			});
// 		};

// 		const options = {
// 			threshold: 0,
// 			rootMargin: `0px 0px -95% 0px`,
// 		};

// 		const observer = new IntersectionObserver(handleIntersection, options);

// 		q(".c-section").forEach(section => {
// 			observer.observe(section);
// 		});

// 		return () => {
// 			observer.disconnect();
// 		};
// 	}, [refs]);
// }

export { useIntersection };
