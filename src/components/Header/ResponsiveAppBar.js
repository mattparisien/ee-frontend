import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";
import classNames from "classnames";
import React from "react";
import Container from "../Containers/ContainerFluid";
// import List from "../Lists/List";
import { TextLogo } from "../Vector/Svg";
import Link from "../Link/Link";

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

	const flexList = {
		display: "flex",
	};

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
						<List style={flexList}>
							{navItems &&
								navItems.map((item, i) => (
									<ListItem key={i}>
										<Link isRouterLink href={item.path}>
											<ListItemText
												primary={item.name}
												primaryTypographyProps={{
													variant: "body2",
												}}
											/>
										</Link>
									</ListItem>
								))}
						</List>
						{/* <List
							items={navItems}
							hoverEffect='draw'
							color='dark'
							toggleTransitioning={toggleTransitioning}
						/> */}
					</Box>
					<Box
						className='mobile-nav'
						sx={theme => ({
							width: "10rem",
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
