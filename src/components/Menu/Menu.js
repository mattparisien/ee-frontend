import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import Link from "../Link/Link";
import ContainerFluid from "../Containers/ContainerFluid";
import variables from "../../styles/scss/_vars.module.scss";
import { useMediaQuery } from "@mui/material";

function Menu({ isActive, navItems, toggleMenu }) {
	const matches = useMediaQuery(
		`(min-width: ${variables["breakpoints-tablet"]}px)`
	);

	const classes = classNames("c-menu", {
		"is-active": isActive,
	});
	const card = useRef(null);

	useEffect(() => {
		matches && toggleMenu();
	}, [matches]);

	return (
		<div className={classes}>
			<ContainerFluid classes='-stretchY'>
				<nav className='c-menu_nav'>
					<ul>
						{navItems.map((link, i) => {
							return (
								<li key={i}>
									<h2 className='o-h2 -uppercase'>
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
