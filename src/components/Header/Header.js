import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import NAVIGATION from "../../api/graphql/queries/GetNavigation";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Header({
	toggleMenu,
	toggleTransitioning,
	color,
	location,
	menuActive,
}) {
	const [navItems, setNavItems] = useState(null);
	const [active, setActive] = useState(false);
	const [arrowOpacity, setArrowOpacity] = useState(1);

	const { loading, error, data } = useQuery(NAVIGATION);

	useEffect(() => {
		if (!loading && data) {
			setNavItems(() =>
				data.navigation.data.attributes.pages.data
					.filter(item => item.attributes.Active)
					.map((page, i) => ({
						id: (i += 1),
						name: page.attributes.Name,
						path: `/${page.attributes.Slug}`,
					}))
			);
		}
	}, [loading, data, error]);

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
