import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import gsap from "gsap";
import { TextLogo } from "./Svg";

export default function Header(props) {
	const { menuState, toggleMenu } = props;

	const [scrollDirection, setScrollDirection] = useState("");

	const ref = useRef(null);


	return (
		<header className={scrollDirection === "down" ? "header-hidden" : "header-showing"} data-theme={props.theme ? props.theme : "light"}>
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
			<button ref={ref} className={menuState ? "header-burger is-x" : "header-burger is-burger"} type='button' onClick={() => toggleMenu(!menuState)}>
				<span className='top' style={{backgroundColor: menuState && 'black'}}></span>
				<span className='bottom' style={{backgroundColor: menuState && 'black'}}></span>
			</button>
		</header>
	);
}
