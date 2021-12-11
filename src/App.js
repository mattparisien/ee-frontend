import React, { useRef, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import ProjectItem from "./components/Pages/ProjectItem";
import Footer from "./components/Footer";
import ViewportNav from "./components/ViewportNav";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import gsap from "gsap";
import $ from "jquery";
import TransitionMask from "./components/Transition";
import rgb2hex from "./helpers/rgbToHex";
import useIntersect from "./helpers/hooks/useIntersect";
import CustomEase from "gsap/CustomEase";
import useResize from "./helpers/hooks/useResize";

let isFirstRender = true;

function App() {
	const location = useLocation();

	//Nav visibility state
	// const [headercolor, setHeaderColor] = useState("");
	// const [menuShow, setMenuShow] = useState(false);
	// const [hoverState, setHoverState] = useState(false);

	const [state, setState] = useState({
		isHovering: false,
		headerColor: null,
		menuIsShow: false,
	});

	const [windowWidth, isResized] = useResize();

	const [menuOffset, setMenuOffset] = useState("-101%");
	const sectionRefs = useRef(null);
	const burgerRef = useRef(null);
	const buttonRef = useRef(null);
	const topPattyRef = useRef(null);
	const bottomPattyRef = useRef(null);
	const circleRef = useRef(null);
	const [viewportNavColor, setViewportNavColor] = useState("dark");
	const [headerColor, setHeaderColor] = useState("dark");
	const transitionRef = useRef(null);
	const transitionTimeline = useRef(gsap.timeline());
	const linkRefs = useRef([]);
	const headerRef = useRef(null);
	const appRefs = useRef({});

	appRefs.current = {};

	const addToRefs = function (el) {
		if (el && !appRefs.current[el]) {
			let elClass = "";
			let links = [];

			//Take last of classList (avoid styled components classes)
			//Spread DOMTokenList into array
			if (el.classList) {
				elClass = [...el.classList].splice(elClass.length - 1, 1).join("");

				if ([...el.classList].includes("menu-link")) {
					links.push(el);
					appRefs.current['menu-links'] = links;
				}
			}

		

			el.id !== ""
				? (appRefs.current[el.id] = el)
				: (appRefs.current[elClass] = el);
		}
	};

	useEffect(() => {
		console.log(appRefs);
	}, [appRefs]);

	const [isIntersect, target] = useIntersect(sectionRefs, { threshold: 1 });

	const toggleMenu = () => {
		setState(prev => ({ ...prev, menuIsShow: !state.menuIsShow }));
	};

	const reverseComplete = () => {
		console.log(sideMenuAnim.current);
	};

	const sideMenuAnim = useRef(
		gsap.timeline({
			onReverseComplete: () => reverseComplete(),
		})
	);

	const sideMenuRef = useRef(null);
	const headerLogoRef = useRef(null);

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

	// useEffect(() => {
	// 	console.log("current....", animRefs.current);
	// 	let direction = "up";
	// 	let prevYPosition = 0;

	// 	const setScrollDirection = () => {
	// 		if (window.scrollTop > prevYPosition) {
	// 			direction = "down";
	// 		} else {
	// 			direction = "up";
	// 		}

	// 		prevYPosition = window.scrollTop;
	// 	};

	// 	const getTargetSection = target => {
	// 		if (direction === "up") return target;

	// 		if (target.nextElementSibling) {
	// 			return target.nextElementSibling;
	// 		} else {
	// 			return target;
	// 		}
	// 	};

	// 	const shouldUpdate = entry => {
	// 		if (direction === "down" && !entry.isIntersecting) {
	// 			return true;
	// 		}

	// 		if (direction === "up" && entry.isIntersecting) {
	// 			return true;
	// 		}

	// 		return false;
	// 	};

	// function handleIntersection(entries) {
	// 	entries.forEach(entry => {
	// 		setScrollDirection();

	// 		if (!shouldUpdate(entry)) return;

	// 		const target = getTargetSection(entry.target);
	// 		const sectionColor = rgb2hex(
	// 			window.getComputedStyle(target).backgroundColor
	// 		);
	// 		if (sectionColor === "#f9f9ea") {
	// 			setTimeout(() => {
	// 				setHeaderColor(themes.colors.dark);
	// 			}, 400);
	// 		} else {
	// 			setTimeout(() => {
	// 				setHeaderColor(themes.colors.light);
	// 			}, 400);
	// 		}
	// 	});
	// }

	// const observer = new IntersectionObserver(handleIntersection, {
	// 	rootMargin: headerRef.current.offsetHeight * -1 + "px",
	// 	threshold: 0,
	// });

	// sectionRefs.current.forEach(section => {
	// 	observer.observe(section);
	// });

	// function handleScroll() {
	// 	sectionRefs.current.forEach((section, i) => {
	// 		const sectionPoint = section.getBoundingClientRect().top;

	// 		const headerHeight = headerRef.current.clientHeight;
	// 		const sectionColor = rgb2hex(
	// 			window.getComputedStyle(section).backgroundColor
	// 		);

	// 		if (sectionPoint <= headerHeight && sectionPoint > -headerHeight) {
	// 			if (sectionColor === "#f9f9ea") {
	// 				setHeaderColor(themes.colors.dark);
	// 			} else {
	// 				setHeaderColor(themes.colors.light);
	// 			}
	// 		}
	// 	});
	// }

	// if (sectionRefs.current) {
	// 	window.addEventListener("scroll", handleScroll);
	// }

	// return () => {
	// 	window.removeEventListener("scroll", handleScroll);
	// };
	// }, [sectionRefs]);

	//Side nav animation
	useEffect(() => {
		const refs = appRefs.current;

		console.log("apprefs,", appRefs);
		const reset = node => {
			if (isResized) {
				setMenuOffset(prev => prev);
			}
		};

		if (state.menuIsShow) {
			const e = CustomEase.create(
				"custom",
				"M0,0,C-0.066,1,0.578,1,0.864,1,1.01,1,0.818,1.001,1,1"
			);

			sideMenuAnim.current.play();
			sideMenuAnim.current
				.to(
					refs["viewport-nav"],
					{
						x: +menuOffset,
						duration: 1.5,
						ease: "Expo.easeInOut",
					},
					0
				)
				.to(
					refs["menu-active-circle"],
					{
						scale: 1,
						y: "-50%",
						x: "-50%",
						opacity: 1,
						ease: "back.out(1)",
						fill: themes.colors.light,
						duration: 0.5,
					},
					0.2
				)
				.to(
					refs["burger-top"],
					{
						transformOrigin: "center",
						margin: 0,
						rotation: "45",
						x: 0,
						duration: 0.4,
						y: "-50%",

						ease: "Expo.easeInOut",
					},
					0
				)
				.to(
					refs["header-burger"],
					{
						rotation: "360",
						duration: 1,
						ease: "Expo.easeInOut",
					},
					0
				)
				.to(
					refs["burger-bottom"],
					{
						transformOrigin: "center",
						margin: 0,
						x: 0,
						rotation: "-45",
						y: "-50%",
						duration: 0.4,
						ease: "Expo.easeInOut",
					},
					0
				)
				.to(
					refs["header-logo"],
					{
						fill: themes.colors.light,
						duration: 0.3,
						ease: "linear",
					},
					0
				)
				.to(
					$(linkRefs.current).find(".line .char"),
					{
						opacity: 1,
						y: 0,
						duration: 1.5,
						stagger: 0.1,
						ease: e,
					},
					0.15
				);

			isFirstRender = false;
		} else if (!state.menuIsShow && !isFirstRender) {
			sideMenuAnim.current.reverse();
			reset();
		}
	}, [state.menuIsShow, appRefs]);

	const updateHoverState = function () {
		setState(() => ({ ...state, isHovering: !state.isHovering }));
		return state;
	};

	const transitionAnim = useRef(gsap.timeline());
	const transitionMask = useRef(null);

	useEffect(() => {
		transitionAnim.current.to(transitionMask.current, {
			width: "50%",
			duration: 2,
		});
	});

	//Update menu offset on resize
	useEffect(() => {
		if (isResized) {
			console.log("hi");
			setMenuOffset(prev => prev);
		}
	});

	const onEnterHandler = () => {
		transitionTimeline.current.play(0);

		transitionTimeline.current
			.to(transitionRef.current, {
				duration: 1,
				x: "0",
				ease: "Expo.easeInOut",
			})
			.to(transitionRef.current, {
				duration: 1,
				y: "-100%",
				ease: "Expo.easeInOut",
				onComplete: () => {
					$(transitionRef.current).css({
						x: "-100%",
						y: "0",
					});
				},
			});
	};

	return (
		<div className='App'>
			<ThemeProvider theme={themes}>
				<GlobalStyles />

				{/* <ModalWrapper hoverState={hoverState} /> */}

				<Header
					toggleMenu={toggleMenu}
					viewportNavColor={viewportNavColor}
					menuState={state.menuIsShow}
					logoRef={headerLogoRef}
					burgerRef={addToRefs}
					addToRefs={addToRefs}
					headerColor={headerColor}
				/>

				<ViewportNav
					isVisible={state.menuIsShow}
					sideMenuRef={sideMenuRef}
					linkRefs={linkRefs}
					addToRefs={addToRefs}
					offset={menuOffset}
				/>

				<main>
					<TransitionGroup className='transition-group'>
						<Transition
							timeout={{
								appear: 500,
								enter: 500,
								exit: 500,
							}}
							key={location.pathname}
							onEnter={onEnterHandler}
						>
							<Routes location={location} key={location.pathname}>
								<Route
									path='/'
									element={
										<Home
											hoverState={state.isHovering}
											sectionRefs={sectionRefs}
										/>
									}
								/>
								<Route path='/contact' element={<Contact />} />
								<Route
									path='/projects'
									element={<Projects updateHoverState={updateHoverState} />}
								/>
								<Route path='/projects/:id' element={<ProjectItem />} />
							</Routes>
						</Transition>
					</TransitionGroup>
				</main>

				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
