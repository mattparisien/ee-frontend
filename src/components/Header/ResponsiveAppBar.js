import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import classNames from "classnames";
import React from "react";
import Container from "../Containers/ContainerFluid";
import List from "../Lists/List";
import { TextLogo } from "../Vector/Svg";

function ResponsiveAppBar({
	toggleTransitioning,
	navItems,
	menuActive,
	onBurgerClick,
	color,
}) {
	const wrapper = theme => ({
		backgroundColor: theme.palette.primary[color === "dark" ? "light" : "dark"],
	});

	const logoWrap = {
		width: "150px",
		fill: "black",
	};

	const toolbar = {
		justifyContent: "center",
		alignItems: "center",
		zIndex: 1,
		pointerEvents: "none",
	};

	const navToolbar = theme => ({
		position: "absolute",
		width: "100%",
		top: 0,
		left: 0,
		zIndex: 0,
		color: "black",
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		zIndex: 999999999,
		button: {
			color: theme.palette.primary[color],
		},
	});

	const navDesktop = theme => ({
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	});

	const headerClasses = classNames("c-header", {
		"is-dark": menuActive,
		"is-light": !menuActive,
	});

	return (
		<AppBar position='fixed' sx={wrapper} elevation='0' classes={headerClasses}>
			<Container>
				<Box className='header-inner -relative'>
					<Toolbar sx={toolbar}>
						<Box className='logo-wrap' sx={logoWrap}>
							<TextLogo />
						</Box>
					</Toolbar>
					<Toolbar sx={navToolbar}>
						<Box sx={navDesktop} component='nav'>
							<List
								items={navItems}
								hoverEffect='draw'
								color='dark'
								toggleTransitioning={toggleTransitioning}
							/>
						</Box>
						<Burger onBurgerClick={onBurgerClick} />
					</Toolbar>
				</Box>
			</Container>
		</AppBar>
	);
}

function Burger({ menuActive, onBurgerClick }) {
	const burgerBtn = theme => ({
		display: "none",
		width: "4rem !important",

		[theme.breakpoints.down("md")]: {
			display: "block",
		},
	});

	return (
		<IconButton sx={burgerBtn} onClick={onBurgerClick}>
			{menuActive ? <CloseIcon /> : <MenuIcon />}
		</IconButton>
	);
}

export default ResponsiveAppBar;
