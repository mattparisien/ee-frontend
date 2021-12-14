import React, { useRef, useEffect, useState } from "react";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import ViewportNav from "./components/ViewportNav";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { useSideMenu, useTransition } from "./animations";
import useAppData from "./helpers/hooks/useAppData";
import SiteTransition from "./components/Transition";
import useIntersect from "./helpers/hooks/useIntersect";

import SiteRoutes from "./Routes";

function App() {
	const location = useLocation();
	const sectionRefs = useRef(null);

	const { addToRefs, appRefs, state, setState, themes } = useAppData();
	const [toggleMenu] = useSideMenu(appRefs, state, setState, themes);
	const transitioner = useTransition(appRefs, state, setState);

	const intersector = useIntersect(appRefs, setState);

	const handleTransition = () => {
		setState(prev => ({
			...prev,
			isTransitioning: true,
		}));
	};

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
						<Transition
							classNames='enter'
							onExit={handleTransition}
							key={location.pathname}
						>
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
