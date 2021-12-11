import { useRef } from "react";

export default function useAppData() {
	const appRefs = useRef({});
	appRefs.current = {};
	let links = [];

	const addToRefs = function (el) {
		if (el && !appRefs.current[el]) {
			let elClass = "";

			//Take last of classList (avoid styled components classes)
			//Spread DOMTokenList into array
			if (el.classList) {
				elClass = [...el.classList].splice(elClass.length - 1, 1).join("");

				if ([...el.classList].includes("menu-link")) {
					links.push(el);
					appRefs.current["menu-links"] = links;
					return;
				}
			}

			el.id !== ""
				? (appRefs.current[el.id] = el)
				: (appRefs.current[elClass] = el);
		}
	};

	return { appRefs, addToRefs };
}
