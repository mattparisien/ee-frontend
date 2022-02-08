import { useRef, useState, useEffect } from "react";
import useResize from "./useResize";
import { useLocation } from "react-router-dom";
import { useTransition } from "../../animations";
import locomotiveScroll from "locomotive-scroll";

export default function useAppData(scrollRef) {
	//Themes
	const themes = {
		colors: {
			light: "#F9F9EA",
			dark: "#010201",
			lighterDark: "#111111",
			red: "#DF181F",
			green: "#039924s",
			blue: "#1E70DD",
			yellow: "#F1DA0A",
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
		scroller: null,
		location: location.pathname,
		isHovering: false,
		headerColor: "dark",
		showSidebar: false,
		sidebar: {
			showSidebar: false,
			hasShown: false,
		},
		menuOffset: "-101%",
		isTransitioning: false,
		currentPage: null,
		isSplit: false,
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
