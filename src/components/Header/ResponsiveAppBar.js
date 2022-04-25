import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	IconButton,
	List,
	ListItem,
	ListItemText,
	Toolbar
} from "@mui/material";
import React from "react";
import Container from "../Containers/ContainerFluid";
import Link from "../Link/Link";
// import List from "../Lists/List";
import { TextLogo } from "../Vector/Svg";

function ResponsiveAppBar({
	toggleTransitioning,
	navItems,
	menuActive,
	onBurgerClick,
	color,
}) {
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
		width: "150px",
		transition: "fill 200ms ease",
		fill: theme.palette.primary[menuActive ? "light" : "dark"],
	});

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
									<ListItem
										key={i}
										sx={{
											justifyContent: "center",
											paddingRight: i === 2 && 0,
										}}
									>
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
						<Burger onBurgerClick={onBurgerClick} menuActive={menuActive} />
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
		svg: {
			fill: theme.palette.primary[menuActive ? "light" : "dark"],
			transition: "fill 200ms ease",
		},
		[theme.breakpoints.down("md")]: {
			display: "block",
		},
	});

	return (
		<IconButton sx={burgerBtn} onClick={onBurgerClick} data-testid={"burger"}>
			{menuActive ? <CloseIcon /> : <MenuIcon />}
		</IconButton>
	);
}

export default ResponsiveAppBar;
