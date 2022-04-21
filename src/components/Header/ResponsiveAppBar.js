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
		height: theme.spacing(15),
		".MuiContainer-root": {
			width: "100%",
			height: "100%",
		},
	});

	const logoWrap = {
		width: "150px",
		fill: "black",
	};

	const edgesWidth = "20rem";

	const spacer = {
		width: edgesWidth,
	};

	const navToolbar = theme => ({
		width: "100%",
		height: "100%",
		zIndex: 0,
		color: "black",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		zIndex: 999999999,
		button: {
			color: theme.palette.primary[color],
		},
		".c-list": {
			justifyContent: "flex-end",
		},
	});

	const navDesktop = theme => ({
		width: edgesWidth,
		[theme.breakpoints.down("md")]: {
			display: "none",
		},
	});

	const headerClasses = classNames("c-header", {
		"is-dark": menuActive,
		"is-light": !menuActive,
	});

	return (
		<AppBar position='fixed' sx={wrapper} elevation={0}>
			<Container>
				<Toolbar sx={navToolbar}>
					<Box className='spacer' sx={spacer}></Box>
					<Box className='logo-wrap' sx={logoWrap}>
						<TextLogo />
					</Box>
					<Box sx={navDesktop} component='nav'>
						<List
							items={navItems}
							hoverEffect='draw'
							color='dark'
							toggleTransitioning={toggleTransitioning}
						/>
					</Box>
					<Box
						className='mobile-nav'
						sx={theme => ({
							width: edgesWidth,
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							[theme.breakpoints.up("md")]: {
								display: "none",
							},
						})}
					>
						<Burger onBurgerClick={onBurgerClick} />
					</Box>
				</Toolbar>
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
