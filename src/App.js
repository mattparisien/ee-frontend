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

	const burgerRef = useRef(null);
	const buttonRef = useRef(null);
	const topPattyRef = useRef(null);
	const bottomPattyRef = useRef(null);
	const circleRef = useRef(null);
	const [viewportNavColor, setViewportNavColor] = useState("dark");
	const [headerColor, setHeaderColor] = useState("dark");
	const transitionRef = useRef(null);
	const transitionTimeline = useRef(gsap.timeline());

	const sections = useRef([]);

	const toggleMenu = () => {
		setState(prev => ({ ...prev, menuIsShow: !state.menuIsShow }));
	};

	const sideMenuAnim = useRef(gsap.timeline());
	const sideMenuRef = useRef(null);
	const headerLogoRef = useRef(null);

	useEffect(() => {
		console.log(state.menuIsShow);
	}, [state.menuIsShow]);

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

	//Side nav animation
	useEffect(() => {
		if (state.menuIsShow) {
			sideMenuAnim.current.play();
			sideMenuAnim.current
				.to(
					sideMenuRef.current,
					{
						x: 0,
						duration: 0.5,
						ease: "Expo.inOut",
					},
					0
				)
				.to(
					circleRef.current,
					{
						scale: 1,
						opacity: 1,
						ease: "back.out(1)",
						fill: themes.colors.light,
					},
					0.2
				)
				.to(
					topPattyRef.current,
					{
						transformOrigin: "center",
						margin: 0,
						rotation: "45",
						left: "50%",
						top: "50%",
						y: "-50%",
						x: "-50%",
						duration: 0.5,
						ease: "linear",
					},
					0
				)
				.to(
					bottomPattyRef.current,
					{
						transformOrigin: "center",
						margin: 0,
						rotation: "-45",
						left: "50%",
						top: "50%",
						y: "-50%",
						x: "-50%",
						duration: 0.5,
						ease: "Expo.inOut",
					},
					0
				)
				.to(
					burgerRef.current,
					{
						rotation: "360",
						duration: 1,
						ease: "Expo.easeOut",
					},
					0
				)
				.to(
					headerLogoRef.current,
					{
						fill: themes.colors.light,
						duration: 0.3,
						ease: 'linear'
					},
					0
				);

			isFirstRender = false;
		} else if (!state.menuIsShow && !isFirstRender) {
			console.log("also in here!");
			sideMenuAnim.current.reverse();
		}
	}, [state.menuIsShow]);

	const updateHoverState = function () {
		setState(() => ({ ...state, isHovering: !state.isHovering }));
		return state;
	};

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

	// const onExitHandler = () => {
	// 	gsap.killTweensOf(node);
	// 	// Set initial position and styles
	// 	gsap.set(node, {
	// 		position: "absolute",
	// 		left: 0,
	// 	});
	// 	// Create the animation for the incoming component
	// 	gsap.to(node, {
	// 		duration: 0.4,
	// 		autoAlpha: 0,
	// 		x: -100,
	// 	});
	// };

	return (
		<div className='App'>
			<ThemeProvider theme={themes}>
				<GlobalStyles />

				{/* <ModalWrapper hoverState={hoverState} /> */}

				<Header
					toggleMenu={toggleMenu}
					viewportNavColor={viewportNavColor}
					menuState={state.menuIsShow}
					color={headerColor}
					logoRef={headerLogoRef}
					burgerRef={burgerRef}
					buttonref={buttonRef}
					bottomPattyRef={bottomPattyRef}
					topPattyRef={topPattyRef}
					circleRef={circleRef}
				/>
				<ViewportNav isVisible={state.menuIsShow} sideMenuRef={sideMenuRef} />
				<main>
					<TransitionGroup className='transition-group'>
						<div className='transitioner' ref={transitionRef}></div>
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
											sectionRefs={el => [...sections.current, el]}
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
