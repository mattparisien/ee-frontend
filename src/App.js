import React, { useRef, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import ProjectItem from "./components/Pages/ProjectItem";
import Footer from "./components/Footer/Footer";
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
import { useSideMenu, useTransition } from "./animations";
import useAppData from "./helpers/hooks/useAppData";
import SiteTransition from "./components/Transition";
import { useIntersection } from "./helpers/hooks/useIntersect";
import SiteRoutes from "./Routes";
import { shuffleColors } from "./helpers/shuffleColors";

function App() {
	const location = useLocation();
	const sectionRefs = useRef(null);

	const { addToRefs, appRefs, state, setState, themes } = useAppData();
	const [toggleMenu] = useSideMenu(appRefs, state, setState, themes);
	const transitioner = useTransition(appRefs, state, setState);

	const handleTransition = () => {
		const transitionEnter = { isPlaying: true, direction: "enter" };

		setState(prev => ({
			...prev,
			transition: transitionEnter,
		}));
	};

	useEffect(() => {
		console.log(shuffleColors(themes))
	}, [themes])

	return (
		<div className='App' ref={addToRefs}>
			<ThemeProvider theme={themes}>
				<GlobalStyles />

				{/* <ModalWrapper hoverState={hoverState} /> */}
				<SiteTransition
					addToRefs={addToRefs}
					appRefs={appRefs}
					themes={themes}
				/>
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

				<main>
					<TransitionGroup className='transition-group'>
						<Transition onExited={handleTransition} key={location.pathname}>
							<SiteRoutes location={location} addToRefs={addToRefs} />
						</Transition>
					</TransitionGroup>
				</main>

				<Footer addToRefs={addToRefs} location={state.location} />
			</ThemeProvider>
		</div>
	);
}

export default App;
