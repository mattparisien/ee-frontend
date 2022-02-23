import { useRef, useState, useEffect } from "react";
import useResize from "./useResize";
import { useLocation } from "react-router-dom";
import { useTransition } from "../../animations";
import locomotiveScroll from "locomotive-scroll";
import axios from "axios";
import { formatPosts, formatSteps, formatAbout } from "../formatData";

export default function useAppData(scrollRef) {
	//Themes
	const themes = {
		colors: {
			light: "#FCFCF0",
			dark: "#010201",
			lighterDark: "#111111",
			red: "#DF181F",
			green: "#039924s",
			blue: "#1E70DD",
			yellow: "#F1DA0A",
			grey: "#AFAFAF",
		},
		typography: {
			paragraph: {
				scale: {
					mobile: {
						fontSize: "4.9",
						lineHeight: "5.9",
					},
				},
			},
		},
		components: {
			container: {
				gutter: {
					mobile: "4vw",
				},
			},
			imageList: {
				gutter: {
					mobile: "12vw",
				},
			},
		},
	};

	const [windowWidth, isResized] = useResize();
	const location = useLocation();
	const appRefs = useRef({});
	appRefs.current = {};

	//App state

	const [pending, setPending] = useState(true);

	const [state, setState] = useState({
		user: {
			isVisitor: true,
		},
		scroller: null,
		headerColor: "dark",
		sidebar: {
			showSidebar: false,
			hasShown: false,
		},
		menuOffset: "-101%",
		isScrollLock: false,
		data: {},
	});

	//Update menu offset on resize
	useEffect(() => {
		setState(prev => ({ ...prev, menuOffset: `-${windowWidth}px` }));
	}, [windowWidth]);

	//Fetch essential data
	useEffect(() => {
		const basePath = process.env.REACT_APP_API_URL;

		const fetchURL = url => axios.get(url);

		const urls = [
			`${basePath}/projects?populate=*`,
			`${basePath}/steps`,
			`${basePath}/about`,
		];

		const promiseArray = [...urls].map(fetchURL);

		Promise.all(promiseArray)
			.then(data => {
				const formattedPosts = formatPosts([...data[0].data.data]);
				const formattedSteps = formatSteps([...data[1].data.data]);
				const formattedAbout = formatAbout(data[2].data.data);

				setState(prev => ({
					...prev,
					data: {
						...state.data,
						about: formattedAbout,
						posts: formattedPosts,
						steps: formattedSteps,
					},
				}));
			})
			.catch(err => console.log(err))
			.finally(() => setPending(false));
	}, []);

	return { appRefs, state, setState, pending, themes };
}
