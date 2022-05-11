import {
	AppBar,
	Box,
	List,
	ListItem,
	ListItemText,
	Toolbar,
} from "@mui/material";
import React, { useContext } from "react";
import { SiteWideControls } from "../../context/Context";
import Container from "../Containers/ContainerFluid";
import Link from "../Link/Link";

import { TextLogo } from "../Vector/Svg";
import Burger from "./Burger";

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
		width: "20rem",
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

	const navDesktop = theme => ({
		width: "20rem",
		[theme.breakpoints.down("md")]: {
			display: "none",
			width: "10rem !important",
		},
	});

	const flexList = theme => ({
		display: "flex",
		justifyContent: "flex-end",
		".MuiListItem-root:not(first-of-type)": {
			marginLeft: theme.spacing(12),
		},
		".MuiListItem-root": {
			transform: `translateY(${introDone ? "0" : "100%"})`,
			opacity: introDone ? 1 : 0,
			transition:
				"opacity .75s cubic-bezier(.215,.61,.355,1) .15s,transform .75s cubic-bezier(.215,.61,.355,1) .15s",
		},
		".MuiListItem-root:nth-of-type(2)": {
			transitionDelay: 0.23,
		},
		".MuiListItem-root:nth-of-type(3)": {
			transitionDelay: 0.34,
		},
	});

	return (
		<AppBar position='fixed' sx={wrapper} elevation={0}>
			<Container>
				<Toolbar sx={navToolbar} disableGutters>
					<Box className='spacer' sx={spacer}></Box>
					<Box className='logo-wrap' sx={logoWrap}>
						<Link isRouterLink href={"/"}>
							<TextLogo />
						</Link>
					</Box>
					<Box sx={navDesktop} component='nav' data-testid='navDesktop'>
						<List sx={flexList}>
							{navItems &&
								navItems.map((item, i) => (
									<ListItem
										className={`listItem_${i + 1}`}
										key={i}
										sx={{
											justifyContent: "flex-end",
											padding: 0,
											width: "auto",
											opacity: 0.5,
											transition: "400ms ease",
											"&:hover": {
												opacity: 1,
											},
										}}
									>
										<Link isRouterLink href={item.path}>
											<ListItemText
												primary={item.name}
												primaryTypographyProps={{
													variant: "body3",
													fontWeight: 600,
												}}
											/>
										</Link>
									</ListItem>
								))}
						</List>
					</Box>
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
		</AppBar>
	);
}

export default ResponsiveAppBar;
