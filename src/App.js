import React, { useRef, useEffect, useState } from "react";
import ModalWrapper from "./components/ModalWrapper";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import $, { contains } from "jquery";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ViewportNav from "./components/ViewportNav";
import determineHeaderColor from "./helpers/headerColor";
import {
	animateMenuIn,
	animateMenuOut,
	setStickySection,
	toggleNavVisiblity,
} from "./animations";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import locomotiveScroll from "locomotive-scroll";

function App() {
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
					<Home hoverState={hoverState} setHoverState={setHoverState} />
				</main>

				<Footer />
			</ThemeProvider>
		</div>
	);
}



export default App;
