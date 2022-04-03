import { useMediaQuery } from "@mui/material";
import classNames from "classnames";
import gsap from "gsap";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";
import variables from "../../styles/scss/_vars.module.scss";
import ContainerFluid from "../Containers/ContainerFluid";
import List from "../Lists/List";
import SocialList from "../Lists/SocialList";

function Menu({ isActive, navItems, toggleMenu, socials }) {
	const [reveal, setReveal] = useState(false);

	useEffect(() => {
		if (isActive) {
			setTimeout(() => {
				setReveal(true);
			}, 500);
		}
	}, [isActive]);

	const matches = useMediaQuery(
		`(min-width: ${variables["breakpoints-tablet"]}px)`
	);

	const classes = classNames("c-menu", {
		"is-active": isActive,
	});
	const card = useRef(null);

	const container = useRef(null);
	const tl = useRef(gsap.timeline());

	useEffect(() => {
		matches && toggleMenu();

		if (isActive) {
			tl.current.progress(0).play();
			tl.current.to(
				$(container.current).find(".c-link"),
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "power3.out",
					stagger: 0.1,
					delay: 0.3
				},
				0.1
			);
		} else {
			gsap.to($(container.current).find(".c-link"), {
				opacity: 0,
				duration: 0.3,
				onComplete: () => {
					gsap.set($(container.current).find(".c-link"), {
						y: "-150%",
						opacity: 0,
					});
				},
			});
		}
	}, [matches, isActive]);

	return (
		<div className={classes} ref={card} >
			<ContainerFluid classes='-stretchY'>
				<nav className='c-menu_nav'>
					<List ref={container} items={navItems}>
						{navItems.map((link, i) => {
							// return (
							// 	<li key={i}>
							// 		<h2 className='o-h2 -uppercase -split'>
							// 			<Link isRouterLink href={link.path} 	onClick={() => toggleMenu()}>
							// 				{link.name}
							// 			</Link>
							// 		</h2>
							// 	</li>
							// );
						})}
					</List>
				</nav>
				<SocialList/>
			</ContainerFluid>
			<div className='c-menu_bg' ref={card}></div>
		</div>
	);
}

export default Menu;
