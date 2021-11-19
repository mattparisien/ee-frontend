import React, { useRef, useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import $, { contains } from "jquery";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ViewportNav from "./components/ViewportNav";
import { animateMenuIn, animateMenuOut, setStickySection } from "./animations";

function App() {
	//Nav visibility state
	const [headercolor, setHeaderColor] = useState("");

	const determineHeaderColor = function (section) {
		if (section.classList.contains("-bg-red")) {
			return "light";
		} else if (section.classList.contains("-bg-light")) {
			return "dark";
		} else if (section.classList.contains("-bg-yellow")) {
			return "dark";
		}
	};

	useEffect(() => {
		$(window).on("scroll", function () {
			const scrollTop = $(this).scrollTop();
			document.querySelectorAll("section").forEach(function (section) {
				if (section.getBoundingClientRect().top <= 0) {
					const color = determineHeaderColor(section);
					setHeaderColor(color);
				} else {
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
			<Header theme={headercolor}/>

			<main>
				<Home />
			</main>

			<Footer />
		</div>
	);
}

export default App;
