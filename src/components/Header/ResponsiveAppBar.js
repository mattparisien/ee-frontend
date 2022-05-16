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

	return (
		<Container>
			<div className='header-content flex items-center justify-between py-3'>
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
			</div>
		</Container>
	);
}

export default ResponsiveAppBar;
