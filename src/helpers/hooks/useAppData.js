import { useRef, useState, useEffect } from "react";
import useResize from "./useResize";
import { useLocation } from "react-router-dom";
import { useTransition } from "../../animations";

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

	const [windowWidth, isResized] = useResize();
	const location = useLocation();
	const appRefs = useRef({});

	appRefs.current = {};
	const links = [];
	let currentPage = "";

	//App state
	const [state, setState] = useState({
		location: location.pathname,
		isHovering: false,
		headerColor: "dark",
		menuIsShow: false,
		menuOffset: "-101%",
		isTransitioning: false,
		currentPage: null,
	});

	//Detect location changes
	useEffect(() => {
		setState(prev => ({ ...prev, location: location.pathname }));
	}, [location]);

	//Update menu offset on resize
	useEffect(() => {
		setState(prev => ({ ...prev, menuOffset: `-${windowWidth}px` }));
	}, [windowWidth]);

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

	return { appRefs, addToRefs, state, setState, themes };
}
