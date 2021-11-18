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
	// gsap.to($("#home-clip"), {
	// 	scrollTrigger: {
	// 		trigger: $(".hero-section"),
	// 		start: "top top",
	// 		pin: true,
	// 		end: "+=1000",
	// 		scrub: 2,
	// 	},
	// 	scale: "0.1",
	// 	duration: 2,
	// 	transformOrigin: "50% 50%",
	// 	ease: "linear",
	// });
	// let mySplitText = new SplitText(".fade-up-rows", {
	// 	type: "lines",
	// 	linesClass: "line",
	// });
	// $(window).on("resize", function () {
	// 	mySplitText.revert();
	// 	mySplitText = new SplitText(".fade-up-rows", {
	// 		type: "lines",
	// 		linesClass: "line",
	// 	});
	// });
	// $(".fade-up-rows .line").wrap('<div class="line-wrapper">');
	// gsap.to(mySplitText.lines, {
	// 	y: "0",
	// 	opacity: 1,
	// 	duration: 2,
	// 	ease: "expo.out",
	// 	stagger: 0.2,
	// });
});

export default App;
