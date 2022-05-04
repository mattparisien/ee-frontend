import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Header({
	toggleMenu,
	toggleTransitioning,
	color,
	location,
	menuActive,
	navItems,
}) {
	const [active, setActive] = useState(false);
	const [arrowOpacity, setArrowOpacity] = useState(1);

	const handleClick = () => {
		toggleMenu();
	};

	useEffect(() => {
		setArrowOpacity(1);
	}, [location]);

	useEffect(() => {
		menuActive ? setActive(true) : setActive(false);
	}, [menuActive]);

	return (
		<ResponsiveAppBar
			navItems={navItems}
			toggleTransitioning={toggleTransitioning}
			menuActive={menuActive}
			onBurgerClick={handleClick}
			color={color}
		/>
	);
}

export default Header;
