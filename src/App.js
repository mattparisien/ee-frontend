import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import classNames from "classnames";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { client } from "./api/graphql/index";
import { Header } from "./components";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./components/Loading/LoadingScreen";
import Menu from "./components/Menu/Menu";
import Context from "./context/Context";
import useAppData from "./helpers/hooks/useAppData";
import SiteRoutes from "./Routes";
import { theme } from "./styles/mui/theming";
import ScrollToTop from "./components/HOC/ScrollToTop";
import BackToTop from "./components/Link/BackToTop";
import { useQuery } from "@apollo/client";
import NAVIGATION from "./api/graphql/queries/GetNavigation";
import Navigation from "./components/Nav/Navigation";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import PROJECTS from "./api/graphql/queries/GetProjects";

function App() {
	const scrollWrapper = useRef(null);

	const location = useLocation();

	gsap.registerPlugin(SplitText);

	const [isFirstVisit, setFirstVisit] = useState(true);

	const {
		addToRefs,
		state,
		setState,

		transitioning,
		setTransitioning,
		cursor,
		toggleCursorState,
		search,
		setSearch,
		headerColor,
		setHeaderColor,
		currentColor,
		setCurrentColor,
		loading,
		setLoading,
	} = useAppData();

	const [domAnimatedReady, setDomAnimatedReady] = useState(false);
	// const [navItems, setNavItems] = useState([]);

	const introTl = useRef(gsap.timeline());
	const [projects, setProjects] = useState([]);

	const query = useQuery(PROJECTS);

	useEffect(() => {
		if (query && query.data && !query.loading) {
			setProjects(
				[...query.data.projects.data]
					.sort((a, b) => a.attributes.Date - b.attributes.Date)
					.map(project => ({
						id: project.id,
						title: project.attributes.Title,
						subtitle: project.attributes.Subtitle,
						image: {
							url: project.attributes.FeatureImage.data.attributes.url,
							alt: project.attributes.FeatureImage.data.attributes
								.alternativeText,
						},
					}))
			);
		}
	}, [query.data, query.loading]);

	const observedElements = useRef([]);
	observedElements.current = [];

	const toggleDomAnimationReady = useCallback(() => {
		setDomAnimatedReady(!domAnimatedReady);
	}, [domAnimatedReady]);

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
						const chars = $(entry.target)
							.find(".c-char")
							.not(".o-hero .c-char");

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
		currentColor,
		setHeaderColor,
	};

	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		setTransitioning(false);
	}, [location, setTransitioning]);

	const [navItems, setNavItems] = useState([]);

	const classes = classNames("App", {
		
		
		
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

					<LoadingScreen isActive={loading} />
					<Context
						stateData={{ ...state.data, projects: [...projects] }}
						siteControls={siteControls}
						cursor={cursor}
						toggleCursorState={toggleCursorState}
						scrollRef={scrollWrapper}
						location={location}
						search={search}
						setSearch={setSearch}
						currentColor={currentColor}
						setCurrentColor={setCurrentColor}
						setLoading={setLoading}
					>
						{/* <IntroCard pending={pending} /> */}
						<BackToTop />
						<ScrollToTop watch={location.pathname}>
							<Navigation
								toggleMenu={() => setMenuActive(!menuActive)}
								menuActive={menuActive}
								location={location}
								color={headerColor}
								navItems={navItems}
								setNavItems={setNavItems}
							/>

							<Cursor />
							{/* <IntroCard /> */}

							<div
								className='scroll-wrapper'
								ref={scrollWrapper}
								data-scroll-container
							>
								<main>
									{menuActive && (
										<Menu menuActive={menuActive} navItems={navItems} />
									)}

									<SiteRoutes
										addToRdefs={addToRefs}
										location={location}
										siteControls={siteControls}
										pages={state.data.pages}
										toggleMenu={() => setMenuActive(!menuActive)}
										menuActive={menuActive}
										color={headerColor}
										navItems={navItems}
										setNavItems={setNavItems}
									/>
								</main>

								<Footer
									info={state.data.footer}
									addToRefs={addToRefs}
									location={location.pathname}
									navItems={navItems}
								/>
							</div>
						</ScrollToTop>
					</Context>
				</HelmetProvider>
			</div>
		</ThemeProvider>
	);
}

export default App;
