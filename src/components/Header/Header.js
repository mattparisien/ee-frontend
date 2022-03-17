import React, { useState } from "react";
import { TextLogo } from "../Vector/Svg";
import ContainerFluid from "../Containers/ContainerFluid";
import Link from "../Link/Link";
import classNames from "classnames";

function Header({toggleMenu, navItems}) {
	const [active, setActive] = useState(false);
	const [firstRender, setFirstRender] = useState(true);

	const mobileNavClasses = classNames("c-header_nav-btn mobile", {
		'is-active': active,
	});

	const handleClick = () => {
		
		setActive(!active)
		toggleMenu();
	}

	return (
		<header className='c-header'>
			<ContainerFluid>
				<div className='c-header_logo'>
					<TextLogo width='100%' />
				</div>
				<nav className='c-header_nav desktop'>
					<ul className='c-header_nav-list'>
						{navItems.map((item, index) => {
							return (
								<li key={index}>
									<Link isRouterLink href={item.path}>
										{item.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<button
					className={mobileNavClasses}
					onClick={handleClick}
				></button>
			</ContainerFluid>
		</header>
	);
}

export default Header;
