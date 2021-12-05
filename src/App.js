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
	useLocation
} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

function App() {

	const location = useLocation();

	//Nav visibility state
	const [headercolor, setHeaderColor] = useState("");
	const [menuShow, setMenuShow] = useState(false);
	const [hoverState, setHoverState] = useState(false);

	function toggleMenuState() {
		setMenuShow(!menuShow);
	}

	const themes = {
		banana: {
			color: "#F1DA0A",
			backgroundColor: "#F6F6EE",
		},
		night: {
			color: "#F6F6EE",
			backgroundColor: "#151414",
		},
		clean: {
			color: "#201F1F",
			backgroundColor: "#F6F6EE",
		},
	};

	return (
		<div className='App'>
			
			<ThemeProvider theme={themes}>
				<GlobalStyles />

				{/* <ModalWrapper hoverState={hoverState} /> */}
				<ViewportNav isVisible={menuShow} />
				<Header
					menuState={menuShow}
					theme={headercolor}
					toggleMenu={toggleMenuState}
				/>

				<main>
					<AnimatePresence>
						<Routes location={location} key={location.pathname}>
							<Route
								path='/'
								element={
									<Home hoverState={hoverState} setHoverState={setHoverState} />
								}
							/>
							<Route path='/contact' element={<Contact />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/projects/:id' element={<ProjectItem />} />
						</Routes>
					</AnimatePresence>
				</main>

				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
