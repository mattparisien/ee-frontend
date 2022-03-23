import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {
	formatAbout,
	formatPosts,
	formatSteps,
	formatStories,
} from "../formatData";
import useResize from "./useResize";

export default function useAppData(scrollRef) {
	const baseSpacing = {
		desktopL: 2,
		desktop: 1.5,
		laptopL: 2,
		laptop: 2,
		tablet: 1,
		mobileL: 1,
		mobileM: 0.5,
		mobileS: 0.4,
	};

	const baseFontSize = {
		desktopL: 1.2,
		desktop: 1.2,
		laptopL: 1,
		laptop: 1,
		tablet: 0.8,
		mobileL: 0.7,
		mobileM: 0.7,
		mobileS: 0.6,
	};

	const navItems = [
		{
			name: "About",
			path: "/",
		},
		{
			name: "Projects",
			path: "/projects",
		},
		{
			name: "Connect",
			path: "/contact",
		},
	];

	//Themes
	const themes = {
		colors: {
			light: "#FCFCF0",
			dark: "#010201",
			lighterDark: "#111111",
			red: "#DF181F",
			green: "#039924",
			blue: "#1E70DD",
			yellow: "#F1DA0A",
			grey: "#AFAFAF",
		},

		transition: {
			easing: "cubic-bezier(.17,.67,.83,.67)",
			timing: "2s",
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
	const appRefs = useRef({});
	appRefs.current = {};

	//App state
	const [transitioning, setTransitioning] = useState(false);

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
			`${basePath}/stories`,
		];

		const promiseArray = [...urls].map(fetchURL);

		Promise.all(promiseArray)
			.then(data => {
				const formattedPosts = formatPosts([...data[0].data.data]);
				const formattedSteps = formatSteps([...data[1].data.data]);
				const formattedAbout = formatAbout(data[2].data.data);
				const formattedStories = formatStories(data[3].data.data);

				setState(prev => ({
					...prev,
					data: {
						...state.data,
						about: formattedAbout,
						posts: formattedPosts,
						steps: formattedSteps,
						stories: formattedStories
					},
				}));
			})
			.catch(err => console.log(err))
			.finally(() => setTransitioning(false));
	}, []);

	return {
		appRefs,
		state,
		setState,
		themes,
		navItems,
		transitioning,
		setTransitioning,
	};
}
