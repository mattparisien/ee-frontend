import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ArrowButton from "../Button/ArrowButton";
import ContainerFluid from "../Containers/ContainerFluid";
import Link from "../Link/Link";
import List from "../Lists/List";
import { TextLogo } from "../Vector/Svg";

function Header({
	toggleMenu,
	navItems,
	toggleTransitioning,
	color,
	location,
	menuActive
}) {
	const [active, setActive] = useState(false);
	const [arrowOpacity, setArrowOpacity] = useState(1);

	const mobileNavClasses = classNames("c-header_nav-btn mobile", {
		"is-active": active,
	});

	const handleClick = () => {
		
		toggleMenu();
	};

	useEffect(() => {
		setArrowOpacity(1);
	}, [location]);


	useEffect(() => {
		menuActive ? setActive(true) : setActive(false)
	}, [menuActive])

	return (
		<header className='c-header' data-theme={color}>
			<ContainerFluid>
			
					<div
						className='c-header_left_spacer'
						style={{
							opacity: arrowOpacity,
							transition: "400ms ease",
							transitionDelay: "100ms",
						}}
					>
						{location.pathname.includes("/projects") &&
							/\d/.test(location.pathname) && (
								<ArrowButton
									isRouterLink={true}
									href={"/projects"}
									handleClick={() => setArrowOpacity(0)}
								/>
							)}
					</div>
					<div className='c-header_logo'>
						<Link isRouterLink href={"/"}>
							<TextLogo width='100%' />
						</Link>
					</div>
					<nav className='c-header_nav desktop'>
						
						<List
							items={navItems}
							hoverEffect={"draw"}
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
