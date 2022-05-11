import { ThemeProvider } from "@mui/material";
import useAxios from "axios-hooks";
import camelcaseKeys from "camelcase-keys";
import classNames from "classnames";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { introAnimation } from "./animations";
import Cursor from "./components/Cursor/Cursor";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/HOC/ScrollToTop";
import BackToTop from "./components/Link/BackToTop";
import LoadingScreen from "./components/Loading/LoadingScreen";
import Menu from "./components/Menu/Menu";
import Navigation from "./components/Nav/Navigation";
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
		error,
		setError,
	} = useAppData();

	const [domAnimatedReady, setDomAnimatedReady] = useState(false);
	const [introDone, setIntroDone] = useState(false);
	// const [navItems, setNavItems] = useState([]);

	const introTl = useRef(gsap.timeline());
	const [projects, setProjects] = useState([]);

	const [
		{ data: projectsData, loading: projectsLoading, error: projectsError },
	] = useAxios(`${process.env.REACT_APP_API_URL}/projects?populate=*`);

	useEffect(() => {
		if (projectsData && !projectsLoading && !projects[0]) {
			setProjects(
				[...projectsData.data]
					.sort(
						(a, b) =>
							new Date(b.attributes.Date).getTime() -
							new Date(a.attributes.Date).getTime()
					)
					.map(project => ({
						id: project.id,
						...camelcaseKeys(project.attributes),
					}))
			);
		}
	}, [projectsData, projectsLoading, projectsError]);

	const observedElements = useRef([]);
	observedElements.current = [];

	const toggleDomAnimationReady = useCallback(() => {
		setDomAnimatedReady(!domAnimatedReady);
	}, [domAnimatedReady]);

	const toggleScrollLock = () => {
		setState(prev => ({ ...prev, isScrollLock: !state.isScrollLock }));
	};

	useEffect(() => {
		introAnimation(introTl.current)
	}, [])

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
						<title>The Eyes and Ears Agency</title>
						<meta property='og:type' content='website' />
						<meta property='og:title' content='The Eyes & Ears Agency' />
						<meta
							name='description'
							content='
The Eyes and Ears Agency builds a bridge between the music industry and impactful non-profit organizations. We work to leverage the cultural power of music to amplify the work of non-profit organizations and mobilize musicians’ audiences to take action in support of social and environmental causes.

'
						/>
						<meta property='og:title' content='The Eyes and Ears Agency' />
						<meta
							property='og:url'
							content='https://www.eyesandearsagency.com/'
						/>
						<meta property='og:site_name' content='The Eyes and Ears Agency' />
						<link rel='canonical' href='https://www.eyesandearsagency.com/' />
					</Helmet>

					{<LoadingScreen isActive={loading} />}
					{error && (
						<Error message={error.message} statusCode={error.statusCode} />
					)}

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
						error={error}
						setError={setError}
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

							<Menu
								menuActive={menuActive}
								navItems={navItems}
								toggleMenu={() => setMenuActive(!menuActive)}
							/>

							<Cursor />
							{/* <IntroCard /> */}

							<div
								className='scroll-wrapper'
								ref={scrollWrapper}
								data-scroll-container
							>
								<main>
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
