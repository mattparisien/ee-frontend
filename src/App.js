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

import useIntersect from "./helpers/hooks/useIntersect";
import { useSideMenu } from "./animations";
import useResize from "./helpers/hooks/useResize";
import useAppData from "./helpers/hooks/useAppData";

let isFirstRender = true;

function App() {
	const location = useLocation();

	//Nav visibility state
	// const [headercolor, setHeaderColor] = useState("");
	// const [menuShow, setMenuShow] = useState(false);
	// const [hoverState, setHoverState] = useState(false);

	const [windowWidth, isResized] = useResize();
	const sectionRefs = useRef(null);

	const transitionRef = useRef(null);
	const transitionTimeline = useRef(gsap.timeline());

	const [isIntersect, target] = useIntersect(sectionRefs, { threshold: 1 });

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
			setState(prev => ({ ...prev, menuOffset: "-101%" }));
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

	const { addToRefs, appRefs, state, setState, themes } = useAppData();

	const [toggleMenu] = useSideMenu(appRefs, state, setState, themes);

	return (
		<div className='App'>
			<ThemeProvider theme={themes}>
				<GlobalStyles />

				{/* <ModalWrapper hoverState={hoverState} /> */}

				<Header
					toggleMenu={toggleMenu}
					menuState={state.menuIsShow}
					burgerRef={addToRefs}
					addToRefs={addToRefs}
					headerColor={state.headerColor}
				/>

				<ViewportNav
					isVisible={state.menuIsShow}
					appRefs={appRefs}
					addToRefs={addToRefs}
					offset={state.menuOffset}
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
