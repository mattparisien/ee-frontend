import React, { createContext, useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Cookies from "universal-cookie";
import { Header } from "./components";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/Loading/LoadingScreen";
import Menu from "./components/Menu/Menu";
import useAppData from "./helpers/hooks/useAppData";
import SiteRoutes from "./Routes";
import SplitText from "gsap/SplitText";
import gsap from "gsap";

export const DataContext = createContext();
export const SiteWideControls = createContext();
export const LoadingContext = createContext();
export const ColorContext = createContext();
export const CursorContext = createContext();

function App() {
	const scrollWrapper = useRef(null);
	const location = useLocation();
	const app = useRef(null);
	gsap.registerPlugin(SplitText);

	const { addToRefs, appRefs, state, setState, pending, themes, navItems } =
		useAppData();

	const [isSplit, setSplit] = useState(false);
	const split = useRef(null);

	useEffect(() => {
		window.scrollTo(0, 0);

		if (!isSplit) {
			setSplit(true);

			setTimeout(() => {
				const text = new SplitText($(".-split"), {
					type: "chars",
					charsClass: "c-char",
				});
	
				split.current = text;		
			}, 300);

		
		}
	}, [isSplit, location]);

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

	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		console.log("Built by Matthew Parisien 🛠");

		const cookies = new Cookies();
		const user = cookies.get("user");

		if (user) {
			setState(prev => ({
				...prev,
				user: {
					isVisitor: false,
				},
			}));
		}
	}, [setState]);

	return (
		<HelmetProvider>
			<div className='App'>
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
					{/* <GlobalStyles /> */}
					<LocomotiveScrollProvider
						onLocationChange={scroll =>
							scroll.scrollTo(0, { duration: 0, disableLerp: true })
						}
						options={{
							initPosition: {
								x: 0,
								y: 0,
							},

							smooth: true,
							getDirection: true,
						}}
						containerRef={scrollWrapper}
					>
						<Header
							toggleMenu={() => setMenuActive(!menuActive)}
							navItems={navItems}
						/>

						<div
							className='scroll-wrapper'
							ref={scrollWrapper}
							data-scroll-container
						>
							<SiteWideControls.Provider value={siteControls}>
								<DataContext.Provider value={state.data}>
									<ColorContext.Provider>
										<CursorContext.Provider>
											<LoadingContext.Provider>
												<LoadingScreen isActive={pending} />

												{/* <ModalWrapper hoverState={hoverState} /> */}

												{/* <CursorFollower /> */}

												<Menu
													isActive={menuActive}
													navItems={navItems}
													toggleMenu={() => setMenuActive(!menuActive)}
												/>

												{/* <SideMenu
									isOpen={state.sidebar.showSidebar}
									hasShown={state.sidebar.hasShown}
									appRefs={appRefs}
									addToRefs={addToRefs}
									offset={state.menuOffset}
									toggleMenu={toggleMenu}
								/> */}

												<main>
													<SiteRoutes
														addToRefs={addToRefs}
														location={location}
													/>
												</main>

												<Footer
													addToRefs={addToRefs}
													location={location.pathname}
													navItems={navItems}
												/>

												{/* <CookieBar /> */}
											</LoadingContext.Provider>
										</CursorContext.Provider>
									</ColorContext.Provider>
								</DataContext.Provider>
							</SiteWideControls.Provider>
						</div>
					</LocomotiveScrollProvider>
				</ThemeProvider>
			</div>
		</HelmetProvider>
	);
}

export default App;
