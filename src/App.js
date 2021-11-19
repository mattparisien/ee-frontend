import React, { useRef, useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import $, { contains } from "jquery";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ViewportNav from "./components/ViewportNav";
import determineHeaderColor from "./helpers/headerColor";
import { animateMenuIn, animateMenuOut, setStickySection, toggleNavVisiblity } from "./animations";

function App() {
	//Nav visibility state
	const [headercolor, setHeaderColor] = useState("");
	const [menuShow, setMenuShow] = useState(false);

	function toggleMenuState() {
		setMenuShow(!menuShow);
	}

	useEffect(() => {
		$(window).on("scroll", function () {
			if (document.querySelector(".pin-spacer").getBoundingClientRect().top <= -100) {
				setHeaderColor("dark");
			}

			const headerHeight = $("header").height();
			document.querySelectorAll("section").forEach(function (section) {
				if (section.getBoundingClientRect().top <= headerHeight) {
					const color = determineHeaderColor(section);
					setHeaderColor(color);
				}
			});
		});
	}, []);

	// const handleBurgerClick = function () {
	// 	setVisibility(true);
	// 	animateMenuIn();
	// };

	// const handleMenuClose = function () {
	// 	setVisibility(false);
	// 	animateMenuOut();
	// };

	return (
		<div className='App'>
			<ViewportNav isVisible={menuShow} />
			<Header theme={headercolor} toggleMenu={toggleMenuState} />

			<main>
				<Home />
			</main>

			<Footer />
		</div>
	);
}

export default App;
