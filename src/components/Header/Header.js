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
		<header
			className={`Header fixed top-0 left-0 w-screen h-13 ${
				menuActive ? "bg-transparent" : "bg-light"
			}`}
			style={{ zIndex: 99999 }}
		>
			<ResponsiveAppBar
				navItems={navItems}
				toggleTransitioning={toggleTransitioning}
				menuActive={menuActive}
				onBurgerClick={handleClick}
				color={color}
			/>
		</header>
	);
}

export default Header;
