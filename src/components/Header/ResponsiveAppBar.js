import { Box, Toolbar } from "@mui/material";
import React, { useContext } from "react";
import { SiteWideControls } from "../../context/Context";
import Container from "../Containers/ContainerFluid";
import Link from "../Link/Link";
import { TextLogo } from "../Vector/Svg";
import Burger from "./Burger";
import NavDesktop from "./NavDesktop";

function ResponsiveAppBar({ navItems, menuActive, onBurgerClick, color }) {
	const { introDone } = useContext(SiteWideControls);

	const wrapper = theme => ({
		zIndex: 99999999,
		transition: "background 200ms ease",
		backgroundColor: menuActive
			? "transparent"
			: theme.palette.primary[color === "dark" ? "light" : "dark"],
		height: theme.spacing(15),
		".MuiContainer-root": {
			width: "100%",
			height: "100%",
		},
	});

	const logoWrap = theme => ({
		width: "120px",

		svg: {
			transition: "fill 200ms ease",
			fill: theme.palette.primary[menuActive ? "light" : "dark"],
		},
	});

	const spacer = theme => ({
		width: "195px",
		[theme.breakpoints.down("md")]: {
			width: "10rem",
		},
	});

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

	return (
		<header
			className={`Header fixed top-0 left-0 w-screen h-13 ${
				menuActive ? "bg-transparent" : "bg-light"
			}`}
			style={{ zIndex: 99999 }}
		>
			<Container>
				<Toolbar sx={navToolbar} disableGutters>
					<Box className='spacer' sx={spacer}></Box>
					<Box className='logo-wrap' sx={logoWrap}>
						<Link isRouterLink href={"/"}>
							<TextLogo />
						</Link>
					</Box>
					<NavDesktop navItems={navItems} />
					<Box
						className='mobile-nav'
						sx={theme => ({
							height: "50%",
							width: "10rem",
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							[theme.breakpoints.up("md")]: {
								display: "none",
							},
						})}
					>
						<Burger
							onBurgerClick={onBurgerClick}
							menuActive={menuActive}
							isIntroDone={introDone}
						/>
					</Box>
				</Toolbar>
			</Container>
		</header>
	);
}

export default ResponsiveAppBar;
