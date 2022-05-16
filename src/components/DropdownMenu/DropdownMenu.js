import { Box, Typography, useTheme } from "@mui/material";
import classNames from "classnames";
import React, { useEffect } from "react";
import useResize from "../../helpers/hooks/useResize";
import ContainerFluid from "../Containers/ContainerFluid";
import SocialList from "../Lists/SocialList";
import "./DropdownMenu.css";
import DropdownMenuList from "./DropdownMenuList";
import DropdownMenuInfo from "./DropdownMenuInfo";

function DropdownMenu({ menuActive, navItems, toggleMenu }) {
	const classes = classNames(
		"DropdownMenu fixed top-0 left-0 w-full h-[60vh] before:bg-dark before:w-full before:h-full before:absolute before:top-0 before:left-0 before:origin-top before:transition before:duration-[0.6s] before:ease-dropdown",
		{
			"is-active": menuActive,
			invisible: !menuActive,
			visible: menuActive,
			"before:scale-y-1": menuActive,
			"before:scale-y-0": !menuActive,
		}
	);

	const theme = useTheme();
	const [windowWidth] = useResize();

	useEffect(() => {
		if (theme) {
			const breakpoint = theme.breakpoints.values.md;

			windowWidth > breakpoint && menuActive && toggleMenu();
		}
	}, [theme, windowWidth]);

	return (
		<div className={classes} style={{ zIndex: 9999 }}>
			<ContainerFluid classes={"flex items-center justify-center h-full"}>
				<DropdownMenuList
					navItems={navItems}
					toggleMenu={toggleMenu}
					menuActive={menuActive}
				/>
				<DropdownMenuInfo menuActive={menuActive} />
			</ContainerFluid>
		</div>
	);
}

export default DropdownMenu;
