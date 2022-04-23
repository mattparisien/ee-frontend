import classNames from "classnames";
import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useQuery } from "@apollo/client";
import NAVIGATION from "../../api/graphql/queries/GetNavigation";

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
				data.navigation.data.attributes.pages.data.map((page, i) => ({
					id: (i += 1),
					name: page.attributes.Name,
					path: `/${page.attributes.Slug}`,
				}))
			);
		}
	}, [loading, data, error]);

	useEffect(() => {
		console.log(navItems);
	}, [navItems]);

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
			color={color}
		/>
	);
}

export default Header;
