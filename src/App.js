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
import { useSideMenu } from "./animations";
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

	const transTl = useRef(gsap.timeline({ paused: true }));

	useEffect(() => {
		gsap.registerPlugin(MorphSVGPlugin);
		const container = appRefs.current["site-transition"];
		const path = appRefs.current["transition-morph"];
		const shapes = [
			"M1920,1080H0V0H1920Z",
			"M1920,1080C1263.74,554.67,624.14,567.69,0,1080V0H1920Z",
			"M1920,895.59C1253.61-57.74,614.63,2.42,0,916.69V0H1920Z",
			"M1920,553.35C1231.2,0,795.2-178,0,553.35V0H1920Z",
			"M1920,192.36C1353.18,53.28,987.5,9.52,0,161.11V0H1920Z",
			"M1920,19.54C1223.47,9.74,720.27,0,0,22V0H1920Z",
		];
		transTl.current

			.to(path, {
				morphSVG: shapes[1],
				duration: 0.4,
				ease: "power4.in",
			})
			.to(path, {
				morphSVG: shapes[2],
				duration: 0.4,
				ease: "none",
			})
			.to(path, {
				morphSVG: shapes[3],
				duration: 0.4,
				ease: "none",
			})
			.to(path, {
				morphSVG: shapes[4],
				duration: 0.4,
				ease: "none",
			})
			.to(path, {
				morphSVG: shapes[5],
				duration: 0.4,
				ease: "none",
			})
			.to(path, {
				morphSVG: shapes[5],
				duration: 0.4,
				ease: "none",
				y: "-200px",
			})
			.set(container, {
				display: "none",
			});

		const init = () => {
			gsap.to(transTl.current, {
				time: transTl.current.duration(),
				duration: transTl.current.duration(),
				ease: "expo.easeInOut",
			});
		};

		init();
	}, [appRefs]);

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
						<Transition
							timeout={{
								appear: 500,
								enter: 500,
								exit: 500,
							}}
							key={location.pathname}
							// onEnter={onEnterHandler}
						>
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
