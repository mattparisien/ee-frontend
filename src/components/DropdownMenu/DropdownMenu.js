import { useTheme } from "@mui/material";
import classNames from "classnames";
import React, { useEffect } from "react";
import useResize from "../../helpers/hooks/useResize";
import ContainerFluid from "../Containers/ContainerFluid";
import DropdownMenuInfo from "./DropdownMenuInfo";
import DropdownMenuList from "./DropdownMenuList";
import useGlobalStore from "../../store/globalStore";

function DropdownMenu() {
	const { dropdownActive, toggleDropdown, navigation } = useGlobalStore(
		state => ({
			dropdownActive: state.dropdownActive,
			toggleDropdown: state.toggleDropdown,
			navigation: state.navigation,
		})
	);

	const classes = classNames(
		"DropdownMenu fixed top-0 left-0 w-full h-[60vh] before:bg-dark before:w-full before:h-full before:absolute before:top-0 before:left-0 before:origin-top before:transition before:duration-[0.6s] before:ease-dropdown",
		{
			"is-active": dropdownActive,
			invisible: !dropdownActive,
			visible: dropdownActive,
			"before:scale-y-1": dropdownActive,
			"before:scale-y-0": !dropdownActive,
		}
	);

	const theme = useTheme();
	const [windowWidth] = useResize();

	useEffect(() => {
		if (theme) {
			const breakpoint = theme.breakpoints.values.md;

			windowWidth > breakpoint && dropdownActive && toggleDropdown();
		}
	}, [theme, windowWidth]);

	return (
		<div
			className={classes}
			style={{ zIndex: 9999, transition: "visibility 0.8s" }}
		>
			<ContainerFluid classes={"flex items-center justify-center h-full"}>
				<DropdownMenuList
					navItems={navigation}
					toggleMenu={toggleDropdown}
					menuActive={dropdownActive}
				/>
				<DropdownMenuInfo dropdownActive={dropdownActive} />
			</ContainerFluid>
		</div>
	);
}

export default DropdownMenu;
