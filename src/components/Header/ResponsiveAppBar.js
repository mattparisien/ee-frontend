import React, { useEffect } from "react";
import Container from "../Containers/ContainerFluid";
import Burger from "./Burger";
import HeaderLogo from "./HeaderLogo";
import NavDesktop from "./NavDesktop";
import useGlobalStore from "../../store/globalStore";

function ResponsiveAppBar({ menuActive, onBurgerClick }) {
	const { getNavigation, navigation } = useGlobalStore(state => ({
		getNavigation: state.getNavigation,
		navigation: state.navigation,
	}));

	useEffect(() => {
		getNavigation();
	}, []);

	return (
		<Container>
			<div className='header-content flex items-center justify-between py-3'>
				<div className='header-spacer w-20 md:w-[195px]'></div>
				<HeaderLogo menuActive={menuActive} />
				<NavDesktop navItems={navigation} />

				<Burger onBurgerClick={onBurgerClick} menuActive={menuActive} />
			</div>
		</Container>
	);
}

export default ResponsiveAppBar;
