import React, { useRef, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import Projects from "./components/Pages/Projects";
import ProjectItem from "./components/Pages/ProjectItem";
import Footer from "./components/Footer";
import ViewportNav from "./components/ViewportNav";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
	const location = useLocation();

	//Nav visibility state
	// const [headercolor, setHeaderColor] = useState("");
	// const [menuShow, setMenuShow] = useState(false);
	// const [hoverState, setHoverState] = useState(false);

	const [state, setState] = useState({
		isHovering: false,
		headerColor: null,
		menuShow: false,
	});

	const sections = useRef([]);

	const textContent = {
		home: {
			vision: {},
			grid: {},
		},
	};

	function toggleMenuState() {
		setState(prev => ({ ...prev, menuShow: true }));
	}

	const updateHoverState = function () {
		setState(() => ({ ...state, isHovering: !state.isHovering }));
		return state;
	};

	const themes = {
		colors: {
			light: "#F9F9EA",
			dark: "#010201",
			red: "#E32127",
			green: "#3F855C",
			blue: "#2057A0",
			yellow: "#F0D549",
		},
	};

	return (
		<div className='App'>
			<ThemeProvider theme={themes}>
				<GlobalStyles />

				{/* <ModalWrapper hoverState={hoverState} /> */}
				<ViewportNav isVisible={state.menuShow} />
				<Header menuState={state.menuShow} toggleMenu={toggleMenuState} />

				<main>
					<Routes location={location} key={location.pathname}>
						<Route
							path='/'
							element={
								<Home
									hoverState={state.isHovering}
									setHoverState={toggleMenuState}
									sectionRefs={el => [...sections.current, el]}
								/>
							}
						/>
						<Route path='/contact' element={<Contact />} />
						<Route
							path='/projects'
							element={<Projects updateHoverState={updateHoverState} />}
						/>
						<Route path='/projects/:id' element={<ProjectItem />} />
					</Routes>
				</main>

				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
