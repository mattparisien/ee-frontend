import React, { useRef, useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import $ from "jquery";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ViewportNav from "./components/ViewportNav";
import { animateMenuIn, animateMenuOut, setStickySection } from "./animations";

function App() {
	//Nav visibility state
	const [isVisible, setVisibility] = useState(false);
	const handleBurgerClick = function () {
		setVisibility(true);
		animateMenuIn();
	};

	const handleMenuClose = function () {
		setVisibility(false);
		animateMenuOut();
	};

	return (
		<div className='App'>
			<Header onClick={handleBurgerClick} />
			{/* <ViewportNav onClick={handleMenuClose} isVisible={isVisible} /> */}

			<main>
				<Home />
			</main>

			<Footer />
		</div>
	);
}

$(() => {
	
});

export default App;
