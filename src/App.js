import { ThemeProvider } from "@mui/material";
import classNames from "classnames";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { Header } from "./components";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Context from "./context/Context";
import useAppData from "./helpers/hooks/useAppData";
import SiteRoutes from "./Routes";
import { theme } from "./styles/mui/theming";

function App() {
	const scrollWrapper = useRef(null);

	const location = useLocation();

	gsap.registerPlugin(SplitText);

	const [isFirstVisit, setFirstVisit] = useState(true);

	const {
		addToRefs,
		state,
		setState,
		navItems,
		transitioning,
		setTransitioning,
		cursor,
		changeCursor,

		search,
		setSearch,
	} = useAppData();

	const [domAnimatedReady, setDomAnimatedReady] = useState(false);

	const introTl = useRef(gsap.timeline());

	useEffect(() => {
		//Intro animation

		const headerLogo = document.querySelector(".c-header_logo");
		const characters = $(headerLogo).find(".chars path");
		const listItems = $(".c-header li");
		const subtitle = $(headerLogo).find(".the");
		const subtitle2 = $(headerLogo).find(".agency");
		const subtitles = [...subtitle, ...subtitle2];
		const header = document.querySelector("header");
		const burger = document.querySelector(".c-header_nav-btn");
		const drawnLogo = document.querySelector(
			".o-page_home .o-hero .c-drawnLogo"
		);
		const heroWords = document.querySelectorAll(".o-page_home .o-hero h1");
		const page = document.querySelector(".o-page_home");

		const windowHeight = window.innerHeight;

		gsap.set(headerLogo, {
			y: windowHeight / 2,
		});
		gsap.set(subtitles, {
			opacity: 0,
		});

		setTimeout(() => {
			introTl.current
				.from(characters, {
					y: "-100px",
					stagger: 0.08,
					ease: "expo.inOut",
					duration: 2.6,
				})
				.to(headerLogo, { opacity: 1 }, 0.1)
				.to(
					headerLogo,
					{
						y: "0%",
						width: "140px",
						duration: 2,
						ease: "expo.inOut",
					},
					2.4
				)
				.to(header, { boxShadow: "3px 4px 30px -12px rgba(0, 0, 0, 0.2)" }, 4)
				.to(page, { opacity: 1, duration: 1 }, 4)
				.to(
					subtitles,
					{
						opacity: 1,
						duration: 1,
					},
					2
				)
				.to(
					drawnLogo,
					{
						opacity: 1,

						ease: "power3.out",
						duration: 1,
					},
					4
				)
				.to(
					burger,
					{
						opacity: 1,
						duration: 1,
					},
					4
				)
				.to(
					listItems,
					{
						opacity: 1,
						duration: 1,
						stagger: 0.1,
					},
					4
				)
				.to(
					heroWords,
					{
						opacity: 1,
						duration: 1,
						stagger: 0.1,
						onComplete: () => {
							setFirstVisit(false);
						},
					},
					4
				)
				.to($(".o-page_home .o-hero").find(".c-char"), {
					y: 0,
					opacity: 1,
					stagger: 0.03,
					ease: "power3.out",
				});
		}, 200);
	}, []);

	// const [isSplit, setSplit] = useState(false);

	// const isFirstRender = useRef(true);
	const observedElements = useRef([]);
	observedElements.current = [];

	const toggleDomAnimationReady = useCallback(() => {
		setDomAnimatedReady(!domAnimatedReady);
	}, [domAnimatedReady]);

	useEffect(() => {
		setTimeout(() => {
			const splitChars = document.querySelectorAll(".-splitChars");
			const splitLines = document.querySelectorAll(".-splitLines");

			//Chars
			new SplitText(splitChars, {
				type: "words, chars",
				wordsClass: "c-word",
				charsClass: "c-char",
			});

			//Lines
			new SplitText(splitLines, {
				type: "lines",
				linesClass: "c-line",
			});

			observedElements.current.push(splitChars);
		}, 500);
	}, []);

	useEffect(() => {
		//Observers,

		const fadeUpChars = elements => {
			gsap.to(elements, {
				stagger: 0.05,
				ease: "power3.out",
				y: 0,
				opacity: 1,
				duration: 1,
				delay: 0.2,
			});
		};

		const fadeUpLines = elements => {
			gsap.to(elements, {
				stagger: 0.06,
				ease: "power3.out",
				y: 0,
				opacity: 1,
				duration: 1,
				delay: 0.2,
			});
		};

		const fadeSide = elements => {
			gsap.to(elements, {
				stagger: 0.06,
				ease: "power3.out",
				x: 0,
				rotation: 0,
				opacity: 1,
				duration: 1,
				delay: 0.2,
			});
		};

		setTimeout(() => {
			const items = document.querySelectorAll(
				".-splitChars, .-splitLines, .-fadeUp, .-fadeSideRight, .-fadeSideLeft"
			);

			const handleIntersection = entries => {
				entries.forEach(entry => {
					if (
						entry.isIntersecting &&
						entry.target.classList.contains("-splitChars")
					) {
						const chars = entry.target.querySelectorAll(".c-char");

						fadeUpChars(chars);
					} else if (
						entry.isIntersecting &&
						entry.target.classList.contains("-splitLines")
					) {
						const lines = entry.target.querySelectorAll(".c-line");
						fadeUpLines(lines);
					} else if (
						entry.isIntersecting &&
						entry.target.classList.contains("-fadeUp")
					) {
						fadeUpLines(entry.target);
					} else if (
						(entry.isIntersecting &&
							entry.target.classList.contains("-fadeSideRight")) ||
						entry.target.classList.contains("-fadeSideLeft")
					) {
						fadeSide(entry.target);
					}
				});
			};

			const observer = new IntersectionObserver(handleIntersection);

			items.forEach(element => observer.observe(element));
		}, 800);
	}, [location.pathname]);

	useEffect(() => {
		//Handle lines fading up on scroll

		//Handle header observer
		const handleSectionIntersection = entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					$(entry.target).attr("data-theme");
					const color = $(entry.target).attr("data-theme");
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
		toggleDomAnimationReady,
	};

	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		setTransitioning(false);
	}, [location, setTransitioning]);

	const classes = classNames("App", {
		"is-new-page": !transitioning,
		"is-old-page": transitioning,
		"is-dom-animated-ready": domAnimatedReady,
		"cursor-hidden": cursor === "drag",
		"is-not-first-visit": !isFirstVisit,
	});

	return (
		<ThemeProvider theme={theme}>
			<div className={classes}>
				<HelmetProvider>
					<Helmet>
						<html lang='en' />
						<title>The Eyes & Ears Agency</title>
						<meta
							name='description'
							content='
The Eyes & Ears Agency builds a bridge between the music industry and impactful non-profit organizations. We work to leverage the cultural power of music to amplify the work of non-profit organizations and mobilize musicians’ audiences to take action in support of social and environmental causes.

'
						/>
						<meta content='The Eyes & Ears Agency' property='og:title' />
						<meta property='og:type' content='website' />
					</Helmet>

					<Context
						stateData={state.data}
						siteControls={siteControls}
						cursor={cursor}
						changeCursor={changeCursor}
						scrollRef={scrollWrapper}
						location={location}
						search={search}
						setSearch={setSearch}
					>
						{/* <DragCursor cursor={cursor} /> */}
						{/* <IntroCard pending={pending} /> */}
						<Header
							toggleMenu={() => setMenuActive(!menuActive)}
							menuActive={menuActive}
							navItems={navItems}
							location={location}
						/>

						<Menu
							isActive={menuActive}
							navItems={navItems}
							toggleMenu={() => setMenuActive(!menuActive)}
						/>

						<div
							className='scroll-wrapper'
							ref={scrollWrapper}
							data-scroll-container
						>
							{/* <ArrowButton
														classes='scroll-to-top'
														color='light'
														rotation={90}
														handleClick={scrollToTop}
													/> */}

							{/* <ModalWrapper hoverState={hoverState} /> */}

							{/* <CursorFollower /> */}

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
									pages={state.data.pages}
								/>
							</main>

							<Footer
								info={state.data.footer}
								addToRefs={addToRefs}
								location={location.pathname}
								navItems={navItems}
							/>
						</div>
					</Context>
				</HelmetProvider>
			</div>
		</ThemeProvider>
	);
}

export default App;
