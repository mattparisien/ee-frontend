import { Box, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import { SiteWideControls } from "../../context/Context";
import Container from "../Containers/ContainerFluid";
import Link from "../Link/Link";
import { TextLogo } from "../Vector/Svg";
import Burger from "./Burger";
import NavDesktop from "./NavDesktop";
import HeaderLogo from "./HeaderLogo";

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
