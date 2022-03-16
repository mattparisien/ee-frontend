import gsap from "gsap";
import React, { createContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { LoadingManager } from "three";
import { SideMenu } from "../..";
import useAppData from "../../../helpers/hooks/useAppData";
import SiteRoutes from "../../../Routes";
import Header from "../../Header/Header";
import LoadingScreen from "../../Loading/LoadingScreen";
import SiteTransition from "../../Transition/Transition";

export const DataContext = createContext();
export const SiteWideControls = createContext();
export const LoadingContext = createContext();
export const ColorContext = createContext();
export const CursorContext = createContext();

function Authenticated() {
	const location = useLocation();
	const app = useRef(null);

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
			<SiteWideControls.Provider value={siteControls}>
				<DataContext.Provider value={state.data}>
					<ColorContext.Provider>
						<CursorContext.Provider>
							<LoadingContext.Provider>
								<LoadingScreen isActive={pending} />

								{/* <ModalWrapper hoverState={hoverState} /> */}
								<SiteTransition
									addToRefs={addToRefs}
									appRefs={appRefs}
									themes={themes}
									isTransitioning={state.isTransitioning}
								/>
								{/* <Header
									toggleMenu={toggleMenu}
									menuState={state.sidebar.showSidebar}
									addToRefs={addToRefs}
									headerColor={state.headerColor}
									appRefs={appRefs}
								/> */}

								{/* <SideMenu
									isOpen={state.sidebar.showSidebar}
									hasShown={state.sidebar.hasShown}
									appRefs={appRefs}
									addToRefs={addToRefs}
									offset={state.menuOffset}
									toggleMenu={toggleMenu}
								/> */}

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

								{/* <Footer addToRefs={addToRefs} location={location.pathname} /> */}

								{/* <CookieBar /> */}
							</LoadingContext.Provider>
						</CursorContext.Provider>
					</ColorContext.Provider>
				</DataContext.Provider>
			</SiteWideControls.Provider>
		</div>
	);
}

export default Authenticated;
