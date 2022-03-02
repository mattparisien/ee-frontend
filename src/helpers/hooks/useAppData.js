import { useRef, useState, useEffect } from "react";
import useResize from "./useResize";
import { useLocation } from "react-router-dom";
import { useTransition } from "../../animations";
import locomotiveScroll from "locomotive-scroll";
import axios from "axios";
import { formatPosts, formatSteps, formatAbout } from "../formatData";
import { device } from "../../components/styles/device";
import { createTheme } from "@mui/material";

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

	//Themes

	const theme = createTheme({
		palette: {
			primary: {
				dark: "#191919",
				light: "#F9F8F4",
				main: "#FDD20A",
			},
			secondary: {
				main: "#FDD20A",
			},
		},
		typography: {
			fontFamily: [
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
		},

		components: {
			MuiTypography: {
				defaultProps: {
					variantMapping: {
						h1: "h2",
						h2: "h2",
						h3: "h2",
						h4: "h2",
						h5: "h2",
						h6: "h2",
						subtitle1: "h2",
						subtitle2: "h2",
						body1: "span",
						body2: "span",
					},
				},
			},
		},
	});

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
		isScrollLocked: location.pathname === "/" ? true : false,
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

	return { appRefs, state, setState, pending, theme };
}
