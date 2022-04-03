import { useMediaQuery } from "@mui/material";
import classNames from "classnames";
import gsap from "gsap";
import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";
import variables from "../../styles/scss/_vars.module.scss";
import ContainerFluid from "../Containers/ContainerFluid";
import List from "../Lists/List";
import SocialList from "../Lists/SocialList";

function Menu({ isActive, navItems, toggleMenu }) {
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
					delay: 0.3,
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
	}, [matches, isActive, toggleMenu]);

	return (
		<div className={classes} ref={card}>
			<ContainerFluid classes='-stretchY' reveal={reveal}>
				<nav className='c-menu_nav'>
					<List ref={container} items={navItems}/>
				</nav>
				<SocialList />
			</ContainerFluid>
			<div className='c-menu_bg' ref={card}></div>
		</div>
	);
}

export default Menu;
