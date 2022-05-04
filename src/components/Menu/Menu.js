import { Box, List, ListItem, Typography, useTheme } from "@mui/material";
import classNames from "classnames";
import React, { useEffect } from "react";
import useResize from "../../helpers/hooks/useResize";
import ContainerFluid from "../Containers/ContainerFluid";
import Link from "../Link/Link";
import SocialList from "../Lists/SocialList";

function Menu({ menuActive, navItems, toggleMenu }) {
	const menuStyles = theme => ({
		position: "fixed",
		top: 0,
		transition: "visibility .8s",
		visibility: menuActive ? "visible" : "hidden",
		left: 0,
		width: "100%",
		height: "60vh",
		zIndex: 9999,
		"&::before": {
			content: '""',
			backgroundColor: theme.palette.primary.dark,
			width: "100%",
			height: "100%",
			position: "absolute",
			top: 0,
			left: 0,
			transformOrigin: "center top",
			transition: "transform .6s cubic-bezier(.645,.045,.355,1)",
			transform: `scaleY(${menuActive ? 1 : 0})`,
		},
		a: {
			transition:
				"opacity .3s cubic-bezier(.55,.055,.675,.19),transform .3s cubic-bezier(.55,.055,.675,.19)",
			transitionTimingFunction: "cubic-bezier(.215,.61,.355,1)",
			transform: `translateY(${menuActive ? "0" : "100%"})`,
			opacity: menuActive ? 1 : 0,
		},
		"li:first-of-type a": {
			transitionDelay: menuActive ? "0.27s" : 0,
		},
		"li:nth-of-type(2) a": {
			transitionDelay: menuActive ? "0.34s" : 0,
		},
		"li:nth-of-type(3) a": {
			transitionDelay: menuActive ? "0.41s" : 0,
		},
	});

	const classes = classNames("c-menu", {
		"is-active": menuActive,
	});

	const theme = useTheme();
	const [windowWidth] = useResize();

	const imageOverlayWrap = {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		zIndex: -1,
		".bg-overlay_image": {
			height: "100%",
			width: "100%",
		},
	};

	useEffect(() => {
		if (theme) {
			const breakpoint = theme.breakpoints.values.md;

			windowWidth > breakpoint && menuActive && toggleMenu();
		}
	}, [theme, windowWidth]);

	return (
		<Box className={classes} sx={menuStyles}>
			<ContainerFluid
				classes={"-stretchY"}
				sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				<List data-testid='menu'>
					{navItems &&
						navItems.map((item, i) => (
							<ListItem
								key={i}
								sx={{
									justifyContent: "center",
								}}
							>
								<Link isRouterLink href={item.path} onClick={toggleMenu}>
									<Typography
										variant='h1'
										sx={theme => ({
											color: theme.palette.primary.light,

											transition: "color 400ms ease",
											"@media (hover: hover)": {
												"&:hover": {
													color: theme.palette.primary.yellow,
												},
											},
										})}
									>
										{item.name}
									</Typography>
								</Link>
							</ListItem>
						))}
				</List>
				<Box
					sx={{
						position: "absolute",
						bottom: 0,
						right: 0,
						paddingRight: 10,
						paddingBottom: 7,
					}}
				>
					<SocialList color='light' />
				</Box>
			</ContainerFluid>
			<Box className='bg-overlay' sx={imageOverlayWrap}>
				<Box
					className='bg-overlay_image'
					sx={{
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						opacity: 0.1,
					}}
				></Box>
			</Box>
		</Box>
	);
}

export default Menu;
