import gsap from "gsap";
import React, { createContext, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocation } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { SideMenu } from "../..";
import useAppData from "../../../helpers/hooks/useAppData";
import SiteRoutes from "../../../Routes";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import LoadingScreen from "../../Loading/LoadingScreen";
import { GlobalStyles } from "../../styles/Global";
import SiteTransition from "../../Transition/Transition";

export const DataContext = createContext();
export const SiteWideControls = createContext();

function Authenticated() {
	const scrollRef = useRef(null);
	const location = useLocation();
	const app = useRef(null);
	const locomotiveRef = useRef(null);

	const { addToRefs, appRefs, state, setState, pending, themes } = useAppData();

	// axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
	// 	identifier: ""
	// })

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

	// //ScrollTrigger proxy config (locomotive scroll hijacking)
	// useEffect(() => {
	// 	gsap.registerPlugin(ScrollTrigger);
	// 	scroll &&
	// 		ScrollTrigger.scrollerProxy(scrollRef.current, {
	// 			scrollTop(value) {
	// 				return arguments.length
	// 					? scroll.scrollTo(value, 0, 0)
	// 					: scroll.scroll.instance.scroll.y;
	// 			},
	// 			getBoundingClientRect() {
	// 				return {
	// 					top: 0,
	// 					left: 0,
	// 					with: window.innerWidth,
	// 					height: window.innerHeight,
	// 				};
	// 			},
	// 		});
	// }, [scroll]);

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
		<div className='temporary-authenticated-wrapper'>
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
										timeout={300}
									>
										<SiteRoutes location={location} addToRefs={addToRefs} />
									</Transition>
								</TransitionGroup>
							</main>

							<Footer addToRefs={addToRefs} location={location.pathname} />
						</div>

						{/* <CookieBar /> */}
					</DataContext.Provider>
				</SiteWideControls.Provider>
			</LocomotiveScrollProvider>
		</div>
	);
}

export default Authenticated;
