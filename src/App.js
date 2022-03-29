import classNames from "classnames";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { createContext, useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useLocation } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "styled-components";
import Cookies from "universal-cookie";
import { Header } from "./components";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/Loading/LoadingScreen";
import Menu from "./components/Menu/Menu";
import useAppData from "./helpers/hooks/useAppData";
import useResize from "./helpers/hooks/useResize";
import SiteRoutes from "./Routes";
import ArrowButton from "./components/Button/ArrowButton";
import DragCursor from "./components/Cursors/DragCursor";
import IntroCard from "./components/Transition/IntroCard";
import $ from "jquery";

export const DataContext = createContext();
export const SiteWideControls = createContext();
export const LoadingContext = createContext();
export const ColorContext = createContext();
export const CursorContext = createContext();

function App() {
	const scrollWrapper = useRef(null);
	const location = useLocation();
	const [windowWidth] = useResize();
	gsap.registerPlugin(SplitText);

	const {
		addToRefs,
		appRefs,
		state,
		setState,
		pending,
		themes,
		navItems,
		transitioning,
		setTransitioning,
		cursor,
		changeCursor
	} = useAppData();

	const [headerColor, setHeaderColor] = useState("light");

	const isSplit = useRef(false);
	const split = useRef(null);

	useEffect(() => {
		if (isSplit.current) {
			//If has been split and window is resized, revert and split again

			split.current.revert().split();
		}

		if (!isSplit.current) {
			//Split text on initial render
			isSplit.current = true;

			setTimeout(() => {
				split.current = new SplitText($(".-split p, .-split"), {
					type: "lines",
					linesClass: "c-line",
				});
			}, 300);
		}
	}, [isSplit, location, windowWidth]);

	useEffect(() => {
		//Handle lines fading up on scroll
		const handleIntersection = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting && !$(entry.target).attr("data-theme")) {
					gsap.to($(entry.target).find(".c-line"), {
						y: 0,
						opacity: 1,
						ease: "power3.out",
						stagger: 0.2,
						duration: 1,
					});
				}
			});
		};
		const observer = new IntersectionObserver(handleIntersection);
		$(".-fadeUp").each((i, el) => observer.observe(el));

		//Handle header observer
		const handleSectionIntersection = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					$(entry.target).attr("data-theme");
					const color = $(entry.target).attr("data-theme");
					setHeaderColor(color);
				}
			});
		};
		const headerObserver = new IntersectionObserver(handleSectionIntersection, {
			threshold: 0.3,
		});
		$("[data-theme]").each((i, el) => headerObserver.observe(el));
	}, [location]);

	const toggleScrollLock = () => {
		setState(prev => ({ ...prev, isScrollLock: !state.isScrollLock }));
	};

	const siteControls = {
		isScrollLock: state.isScrollLock,
		toggleScrollLock,
		transitioning,
		setTransitioning,
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

	useEffect(() => {
		setTransitioning(false);
	}, [location]);

	const classes = classNames("App", {
		"is-new-page": !transitioning,
		"is-old-page": transitioning,
	});

	const scrollToTop = () => {
		if (scroll) {
			scroll.scroll.scrollTo(0, 0);
		} else {
			window.scrollTo(0, 0);
		}
	};

	

	

	return (
		<HelmetProvider>
			<div className={classes}>
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
					<ParallaxProvider>
						<LocomotiveScrollProvider
							onLocationChange={scroll => scroll.scrollTo(0, 0)}
							watch={[location.pathname]}
							lerp={1}
							options={{
								initPosition: {
									x: 0,
									y: 0,
								},

								smooth: true,
								getDirection: true,
								getSpeed: true,
							}}
							containerRef={scrollWrapper}
						>
							{/* <TransitionCard transitioning={transitioning} /> */}
							<SiteWideControls.Provider value={siteControls}>
								<DataContext.Provider value={state.data}>
									<ColorContext.Provider>
										<CursorContext.Provider
											value={{cursor, changeCursor}}
										>
											<LoadingContext.Provider>
												<LoadingScreen isActive={pending} />
												<DragCursor cursor={cursor} />
												{/* <IntroCard/> */}
												<Header
													toggleMenu={() => setMenuActive(!menuActive)}
													color={menuActive ? "dark" : headerColor}
													navItems={navItems}
													location={location}
												/>

												<div
													className='scroll-wrapper'
													ref={scrollWrapper}
													data-scroll-container
												>
													<ArrowButton
														classes='scroll-to-top'
														color='light'
														rotation={90}
														handleClick={scrollToTop}
													/>
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
															addToRdefs={addToRefs}
															location={location}
															siteControls={siteControls}
														/>
													</main>

													<Footer
														info={state.data.footer}
														addToRefs={addToRefs}
														location={location.pathname}
														navItems={navItems}
													/>

													{/* <CookieBar /> */}
												</div>
												<DragCursor />
											</LoadingContext.Provider>
										</CursorContext.Provider>
									</ColorContext.Provider>
								</DataContext.Provider>
							</SiteWideControls.Provider>
						</LocomotiveScrollProvider>
					</ParallaxProvider>
				</ThemeProvider>
			</div>
		</HelmetProvider>
	);
}

export default App;
