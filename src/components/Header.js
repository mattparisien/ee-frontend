import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import { animateMenuIn, animateMenuOut, animateTopBarIn, animateTopBarOut, animateHeaderOut, animateHeaderIn, animateBurgerToX, animateXToBurger} from "../animations";
import { TextLogo } from "./Svg";
import classNames from "classnames";

export default function Header(props) {

	const burgerClasses = classNames("header-burger", {"is-burger": !props.menuState})

	const [scrollDirection, setScrollDirection] = useState("");

	const ref = useRef(null);

	useEffect(() => {
		if (props.menuState) {
			animateBurgerToX()
			
		} else {
			animateXToBurger()
			
		}
	}, [props.menuState])

	


	// 	let scrollPos = 0;
	// 	$(window).on("scroll", function (e) {
	// 		if ($(window).scrollTop() > $(".hero-section").height() * 2) {
	// 			if (document.body.getBoundingClientRect().top > scrollPos) {
	// 				if (!$("header").hasClass("header-hidden")) {
	// 					setScrollDirection("up");
	// 					animateHeaderIn();
	// 				}
	// 			} else {
	// 				if (!$("header").hasClass("header-showing")) setScrollDirection("down");
	// 				animateHeaderOut();
	// 			}
	// 			scrollPos = document.body.getBoundingClientRect().top;
	// 		}
	// 	});
	// }, []);

	return (
		<header className={scrollDirection === "down" ? "header-hidden" : "header-showing"} data-theme={props.theme ? props.theme : 'light'}>
			<div className='logo-wrapper -absolute-center'>
				<a href='/'>
					<TextLogo />
				</a>
			</div>
			<nav>
				<ul>
					<li>
						<a href='home'>Home</a>
					</li>
					<li>
						<a href=''>Agency</a>
					</li>
					<li>
						<a href=''>Projects</a>
					</li>
					<li>
						<a href=''>Contact</a>
					</li>
				</ul>
			</nav>
			<button
				ref={ref}
				className={burgerClasses}
				type='button'
				onClick={props.toggleMenu}
			>
				<span className="top"></span>
				<span className="bottom"></span>
			</button>
		</header>
	);
}
