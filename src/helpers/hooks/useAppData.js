import { useRef, useState, useEffect } from "react";
import useResize from "./useResize";

export default function useAppData() {
	//Themes
	const themes = {
		colors: {
			light: "#F9F9EA",
			dark: "#010201",
			red: "#E32127",
			green: "#3F855C",
			blue: "#2057A0",
			yellow: "#F0D549",
		},
	};

	const appRefs = useRef({});
	appRefs.current = {};
	const links = [];
	const sections = [];

	//App state
	const [state, setState] = useState({
		isHovering: false,
		headerColor: "dark",
		menuIsShow: false,
		menuOffset: "-101%",
	});

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
				} else if ([...el.classList].includes("styled-object-container")) {
					sections.push(el);
					appRefs.current["sections"] = sections;
					return;
				}
			}

			el.id !== ""
				? (appRefs.current[el.id] = el)
				: (appRefs.current[elClass] = el);
		}
	};



	return { appRefs, addToRefs, state, setState, themes };
}
