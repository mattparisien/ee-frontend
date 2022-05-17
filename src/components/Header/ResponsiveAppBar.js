import React, { useContext } from "react";
import { SiteWideControls } from "../../context/Context";
import Container from "../Containers/ContainerFluid";
import Burger from "./Burger";
import HeaderLogo from "./HeaderLogo";
import NavDesktop from "./NavDesktop";

function ResponsiveAppBar({ navItems, menuActive, onBurgerClick, color }) {
	const { introDone } = useContext(SiteWideControls);

	return (
		<Container>
			<div className='header-content flex items-center justify-between py-3'>
				<div className='header-spacer w-20 md:w-[195px]'></div>
				<HeaderLogo menuActive={menuActive} />
				<NavDesktop navItems={navItems} />

				<Burger
					onBurgerClick={onBurgerClick}
					menuActive={menuActive}
					isIntroDone={introDone}
				/>
			</div>
		</Container>
	);
}

export default ResponsiveAppBar;
