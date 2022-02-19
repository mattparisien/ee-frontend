import React, { useRef, useEffect } from "react";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import { SideMenu } from "./components/index";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { TransitionGroup, Transition } from "react-transition-group";
import useAppData from "./helpers/hooks/useAppData";
import SiteTransition from "./components/Transition/Transition";
// import useIntersect from "./helpers/hooks/useIntersect";
import gsap from "gsap";
import SiteRoutes from "./Routes";
import { Helmet } from "react-helmet";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { createContext } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import LoadingScreen from "./components/Loading/LoadingScreen";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export const DataContext = createContext();
export const SiteWideControls = createContext();

const isSplit = false;

function App() {
	const { scroll } = useLocomotiveScroll();
	const scrollRef = useRef(null);
	const location = useLocation();
	const app = useRef(null);
	const locomotiveRef = useRef(null);

	const { addToRefs, appRefs, state, setState, pending, themes } = useAppData();

	const q = gsap.utils.selector(app.current);

	const toggleMenu = () => {
		setState(prev => ({
			...prev,
			sidebar: {
				showSidebar: !state.sidebar.showSidebar,
				hasShown: !state.sidebar.hasShown ? true : true,
			},
		}));
	};

	//ScrollTrigger proxy config (locomotive scroll hijacking)
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		scroll &&
			ScrollTrigger.scrollerProxy(scrollRef.current, {
				scrollTop(value) {
					return arguments.length
						? scroll.scrollTo(value, 0, 0)
						: scroll.scroll.instance.scroll.y;
				},
				getBoundingClientRect() {
					return {
						top: 0,
						left: 0,
						with: window.innerWidth,
						height: window.innerHeight,
					};
				},
			});
	}, [scroll]);

	const handleTransition = () => {
		setState(prev => ({
			...prev,
			isTransitioning: true,
		}));
	};

	const toggleScrollLock = () => {
		setState(prev => ({ ...prev, isScrollLock: !state.isScrollLock }));
	};

	const toggleHeaderColor = sectionBgColor => {
		setState(prev => ({
			...prev,
			headerColor: sectionBgColor === "dark" ? "light" : "dark",
		}));
	};

	const siteControls = {
		isScrollLock: state.isScrollLock,
		toggleScrollLock,
		toggleHeaderColor,
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
			<LocomotiveScrollProvider
				options={{
					smooth: true,
					getDirection: true,
				}}
				onLocationChange={scroll =>
					scroll.scrollTo(0, { duration: 0, disableLerp: true })
				}
				watch={[location.pathname]}
				containerRef={scrollRef}
			>
				<SiteWideControls.Provider value={siteControls}>
					<DataContext.Provider value={state.data}>
						<ThemeProvider theme={themes}>
							<GlobalStyles
								isScrollLock={state.isScrollLock}
								isTransitioning={state.isTransitioning}
								isOverflowHidden={state.sidebar.showSidebar}
							/>
							<LoadingScreen isActive={pending} />

							{/* <ModalWrapper hoverState={hoverState} /> */}
							<SiteTransition
								addToRefs={addToRefs}
								appRefs={appRefs}
								themes={themes}
								isTransitioning={state.isTransitioning}
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

							<div
								className='scroll-container'
								ref={scrollRef}
								data-scroll-container
							>
								<main>
									<TransitionGroup className='transition-group'>
										<Transition
											key={location.pathname}
											onExiting={handleTransition}
										>
											<SiteRoutes location={location} addToRefs={addToRefs} />
										</Transition>
									</TransitionGroup>
								</main>

								<Footer addToRefs={addToRefs} location={location.pathname} />
							</div>

							{/* <CookieBar /> */}
						</ThemeProvider>
					</DataContext.Provider>
				</SiteWideControls.Provider>
			</LocomotiveScrollProvider>
		</div>
	);
}

export default App;
