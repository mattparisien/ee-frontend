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
import ScrollToTop from "./helpers/ScrollToTop";
import { useSideMenu, useTransition } from "./animations";
import useAppData from "./helpers/hooks/useAppData";
import rgbToHex from "./helpers/rgbToHex";
import TransitionMask from "./components/Transition";
import SplitText from "gsap/SplitText";
import gsap from "gsap/all";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";
import gsapCore from "gsap/gsap-core";

function App() {
	const location = useLocation();
	const sectionRefs = useRef(null);

	const updateHoverState = function () {
		setState(() => ({ ...state, isHovering: !state.isHovering }));
		return state;
	};

	const { addToRefs, appRefs, state, setState, themes } = useAppData();
	const [toggleMenu] = useSideMenu(appRefs, state, setState, themes);

	useEffect(() => {
		const header = appRefs.current["side-header"];
		const sections = appRefs.current["sections"];

		const setHeaderColor = sectionColor => {
			const light = themes.colors["light"].toLowerCase();

			setState(prev => ({
				...prev,
				headerColor: sectionColor === light ? "dark" : "light",
			}));
		};

		const handleIntersection = entries => {
			entries.forEach(entry => {
				const isIntersecting = entry.isIntersecting;
				let sectionBg = "";
				let sectionHex = "";

				if (isIntersecting) {
					sectionBg = window.getComputedStyle(entry.target).backgroundColor;
					if (sectionBg !== "rgba(0, 0, 0, 0)") {
						sectionHex = rgbToHex(sectionBg);
						setHeaderColor(sectionHex);
					} else {
						return;
					}
				}
			});
		};

		const options = {
			threshold: 0,
			rootMargin: `0px 0px -95%`,
		};

		const observer = new IntersectionObserver(handleIntersection, options);
		sections.forEach(section => {
			observer.observe(section);
		});
	}, [appRefs]);

	const transitioner = useTransition(appRefs, state, setState);

	const handleTransition = () => {
		const transitionEnter = { isPlaying: true, direction: "enter" };

		setState(prev => ({
			...prev,
			transition: transitionEnter,
		}));
	};

	useEffect(() => {
		console.log(state)
	}, [state])

	return (
		<div className='App' ref={addToRefs}>
			<ThemeProvider theme={themes}>
				<GlobalStyles />

				{/* <ModalWrapper hoverState={hoverState} /> */}

				<Header
					toggleMenu={toggleMenu}
					menuState={state.menuIsShow}
					addToRefs={addToRefs}
					headerColor={state.headerColor}
					appRefs={appRefs}
				/>

				<ViewportNav
					isVisible={state.menuIsShow}
					appRefs={appRefs}
					addToRefs={addToRefs}
					offset={state.menuOffset}
					toggleMenu={toggleMenu}
				/>
				<TransitionMask
					addToRefs={addToRefs}
					appRefs={appRefs}
					themes={themes}
				/>
				<main>
					<TransitionGroup className='transition-group'>
						<Transition onExited={handleTransition} key={location.pathname}>
							<Routes location={location} key={location.pathname}>
								<Route
									path='/'
									element={
										<Home hoverState={state.isHovering} addToRefs={addToRefs} />
									}
								/>
								<Route path='/contact' element={<Contact />} />
								<Route
									path='/projects'
									element={<Projects updateHoverState={updateHoverState} />}
									key={location.pathname}
								/>
								<Route path='/projects/:id' element={<ProjectItem />} />
							</Routes>
						</Transition>
					</TransitionGroup>
				</main>

				<Footer addToRefs={addToRefs} />
			</ThemeProvider>
		</div>
	);
}

export default App;
