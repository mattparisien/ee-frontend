import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ArrowButton from "../Button/ArrowButton";
import ContainerFluid from "../Containers/ContainerFluid";
import Link from "../Link/Link";
import List from "../Lists/List";
import { TextLogo } from "../Vector/Svg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Header({
	toggleMenu,
	navItems,
	toggleTransitioning,
	color,
	location,
	menuActive,
}) {
	const [active, setActive] = useState(false);
	const [arrowOpacity, setArrowOpacity] = useState(1);

	const mobileNavClasses = classNames("c-header_nav-btn mobile", {
		"is-active": active,
	});

	const headerClasses = classNames("c-header", {
		"is-dark": menuActive,
		"is-light": !menuActive,
	});

	const handleClick = () => {
		toggleMenu();
	};

	useEffect(() => {
		setArrowOpacity(1);
	}, [location]);

	useEffect(() => {
		menuActive ? setActive(true) : setActive(false);
	}, [menuActive]);

	const wrapper = {};

	return (
		<ResponsiveAppBar
			navItems={navItems}
			toggleTransitioning={toggleTransitioning}
			menuActive={menuActive}
			onBurgerClick={handleClick}
		/>

		// <header className={headerClasses}>
		// 	<ContainerFluid>
		// 		<div
		// 			className='c-header_left_spacer'
		// 			style={{
		// 				opacity: arrowOpacity,
		// 				transition: "400ms ease",
		// 				transitionDelay: "100ms",
		// 			}}
		// 		>
		// 			{location.pathname.includes("/projects") &&
		// 				/\d/.test(location.pathname) && (
		// 					<ArrowButton
		// 						isRouterLink={true}
		// 						href={"/projects"}
		// 						handleClick={() => setArrowOpacity(0)}
		// 					/>
		// 				)}
		// 		</div>
		// 		<div className='c-header_logo'>
		// 			<Link isRouterLink href={"/"}>
		// 				<TextLogo width='100%' />
		// 			</Link>
		// 		</div>
		// 		<nav className='c-header_nav desktop'>
		// 			<List
		// 				items={navItems}
		// 				hoverEffect={"draw"}
		// 				color='dark'
		// 				toggleTransitioning={toggleTransitioning}
		// 			/>
		// 		</nav>
		// 		<button className={mobileNavClasses} onClick={handleClick}>
		// 			{menuActive ? <CloseIcon /> : <MenuIcon />}
		// 		</button>
		// 	</ContainerFluid>
		// </header>
	);
}

export default Header;
