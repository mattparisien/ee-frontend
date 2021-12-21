import React, {
	useRef,
	useEffect,
	useState,
	useLayoutEffect,
	useMemo,
} from "react";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import { SideMenu } from "./components/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import { useSideMenu, useTransition } from "./animations";
import useAppData from "./helpers/hooks/useAppData";
import SiteTransition from "./components/Transition";
// import useIntersect from "./helpers/hooks/useIntersect";
import useResize from "./helpers/hooks/useResize";
import gsap from "gsap";
import SiteRoutes from "./Routes";
import SplitText from "gsap/SplitText";
import { Helmet } from "react-helmet";
import $ from "jquery";
import locomotiveScroll from "locomotive-scroll";

const isSplit = false;

function App() {
	const scrollRef = useRef(null);
	const location = useLocation();
	const sectionRefs = useRef(null);

	const { addToRefs, appRefs, state, setState, themes } = useAppData();
	const app = useRef(null);
	const q = gsap.utils.selector(app.current);
	const paragraphs = q(".fade-up-lines");
	const transitioner = useTransition(appRefs, state, setState);
	// const intersector = useIntersect(appRefs, setState);
	const [windowWidth, isResized] = useResize();

	useEffect(() => {
		console.log('hi')
		const scroll = new locomotiveScroll({
			el: scrollRef.current,
			smooth: true,
		});
	}, [scrollRef]);

	const toggleMenu = () => {
		setState(prev => ({
			...prev,
			sidebar: {
				showSidebar: !state.sidebar.showSidebar,
				hasShown: !state.sidebar.hasShown ? true : true,
			},
		}));
	};

	const handleTransition = () => {
		setState(prev => ({
			...prev,
			isTransitioning: true,
		}));
	};

	return (
		<div className='App' ref={app}>
			<Helmet>
				<html lang='en' />
				<title>The Eyes & Ears Agency</title>
				<meta
					name='description'
					content='
The Eyes & Ears Agency builds a bridge between the music industry and impactful non-profit organizations. We work to leverage the cultural power of music to amplify the work of non-profit organizations and mobilize musicians’ audiences to take action in support of social and environmental causes.

'
				/>
			</Helmet>

			<ThemeProvider theme={themes}>
				<GlobalStyles
					isTransitioning={state.isTransitioning}
					isOverflowHidden={state.sidebar.showSidebar}
				/>

				{/* <ModalWrapper hoverState={hoverState} /> */}
				<SiteTransition
					addToRefs={addToRefs}
					appRefs={appRefs}
					themes={themes}
				/>
				<Header
					toggleMenu={toggleMenu}
					menuState={state.sidebar.showSidebar}
					addToRefs={addToRefs}
					headerColor={state.headerColor}
					appRefs={appRefs}
				/>

				<SideMenu
					isOpen={state.sidebar.showSidebar}
					hasShown={state.sidebar.hasShown}
					appRefs={appRefs}
					addToRefs={addToRefs}
					offset={state.menuOffset}
					toggleMenu={toggleMenu}
				/>

				<main>
					<div className='scroll-container' ref={scrollRef}>
						<TransitionGroup className='transition-group'>
							<Transition
								timeout={1900}
								key={location.pathname}
								onExiting={handleTransition}
							>
								<SiteRoutes
									location={location}
									addToRefs={addToRefs}
									
								/>
							</Transition>
						</TransitionGroup>
					</div>
				</main>

				<Footer addToRefs={addToRefs} location={state.location} />
			</ThemeProvider>
		</div>
	);
}

export default App;
