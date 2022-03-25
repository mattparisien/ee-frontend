import React, { useState } from "react";
import { TextLogo } from "../Vector/Svg";
import ContainerFluid from "../Containers/ContainerFluid";
import List from "../Lists/List";
import Link from "../Link/Link";
import classNames from "classnames";

function Header({ toggleMenu, navItems, toggleTransitioning, color }) {
	const [active, setActive] = useState(false);
	const [firstRender, setFirstRender] = useState(true);

	const mobileNavClasses = classNames("c-header_nav-btn mobile", {
		"is-active": active,
	});

	const handleClick = () => {
		setActive(!active);
		toggleMenu();
	};

	return (
		<header className='c-header' data-theme={color}>
			<ContainerFluid>
				<div className='c-header_logo'>
					<Link isRouterLink href={"/"}>
						<TextLogo width='100%' />
					</Link>
				</div>
				<nav className='c-header_nav desktop'>
					<List
						items={navItems}
						color='dark'
						toggleTransitioning={toggleTransitioning}
					/>
				</nav>
				<button className={mobileNavClasses} onClick={handleClick}></button>
			</ContainerFluid>
		</header>
	);
}

export default Header;
