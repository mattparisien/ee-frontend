import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import { animateMenuIn, animateMenuOut, animateTopBarIn, animateTopBarOut, animateHeaderOut, animateHeaderIn } from "../animations";
import { TextLogo } from "./Svg";

export default function Header(props) {
	const handleBurgerHover = function (e) {
		for (let patty of e.target.children) {
			patty.style.transition = "300ms ease";
		}
	};
	const handleBurgerMouseLeave = function (e) {
		for (let patty of e.target.children) {
			setTimeout(() => {
				patty.style.transition = "none";
			}, 300);
		}
	};

	const [scrollDirection, setScrollDirection] = useState("");

	useEffect(() => {
		let scrollPos = 0;
		$(window).on("scroll", function (e) {
			if ($(window).scrollTop() > $(".hero-section").height() * 2) {
				if (document.body.getBoundingClientRect().top > scrollPos) {
					if (!$("header").hasClass("header-hidden")) {
						setScrollDirection("up");
						animateHeaderIn();
					}
				} else {
					if (!$("header").hasClass("header-showing")) setScrollDirection("down");
					animateHeaderOut();
				}
				scrollPos = document.body.getBoundingClientRect().top;
			}
		});
	}, []);

	return (
		<header className={scrollDirection === "down" ? "header-hidden" : "header-showing"}>
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
				className='header-burger'
				type='button'
				onClick={props.onClick}
				onMouseEnter={e => handleBurgerHover(e)}
				onMouseLeave={e => handleBurgerMouseLeave(e)}
			>
				<span class='top'></span>
				<span class='bottom'></span>
			</button>
		</header>
	);
}
