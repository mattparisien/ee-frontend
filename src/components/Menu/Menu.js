import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Link from "../Link/Link";
import ContainerFluid from "../Containers/ContainerFluid";
import variables from "../../styles/scss/_vars.module.scss";
import { useMediaQuery } from "@mui/material";
import $ from "jquery";
import gsap from "gsap";

function Menu({ isActive, navItems, toggleMenu }) {
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
				$(container.current).find(".c-char"),
				{
					y: 0,
					opacity: 1,
					duration: 1,
					ease: "expo.inOut",
					stagger: 0.04,
				},
				0.1
			);
		} else {
			gsap.to($(container.current).find(".c-char"), {
				opacity: 0,
				duration: 0.3,
				onComplete: () => {
					gsap.set($(container.current).find(".c-char"), {
						y: "-100%",
						opacity: 0,
					});
				},
			});
		}
	}, [matches, isActive]);

	return (
		<div className={classes} ref={card}>
			<ContainerFluid classes='-stretchY'>
				<nav className='c-menu_nav'>
					<ul ref={container}>
						{navItems.map((link, i) => {
							return (
								<li key={i}>
									<h2 className='o-h2 -uppercase -split'>
										<Link isRouterLink href={link.href}>
											{link.name}
										</Link>
									</h2>
								</li>
							);
						})}
					</ul>
				</nav>
			</ContainerFluid>
			<div className='c-menu_bg' ref={card}></div>
		</div>
	);
}

export default Menu;
