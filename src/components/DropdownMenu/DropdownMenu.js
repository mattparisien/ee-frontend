import { Box, Typography, useTheme } from "@mui/material";
import classNames from "classnames";
import React, { useEffect } from "react";
import useResize from "../../helpers/hooks/useResize";
import ContainerFluid from "../Containers/ContainerFluid";
import SocialList from "../Lists/SocialList";
import "./DropdownMenu.css";
import DropdownMenuList from "./DropdownMenuList";

function DropdownMenu({ menuActive, navItems, toggleMenu }) {
	const classes = classNames(
		"DropdownMenu fixed top-0 left-0 w-full h-[60vh] transition-visibility transition-duration-0.8 before:bg-dark before:w-full before:h-full before:absolute before:top-0 before:left-0 before:origin-top before:transition before:duration-[0.6s] before:ease-dropdown",
		{
			"is-active": menuActive,
			"visibility-hidden": !menuActive,
			"visibility-visible": menuActive,
			"before:scale-y-1": menuActive,
			"before:scale-y-0": !menuActive,
		}
	);

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
		<div className={classes} style={{ zIndex: 9999 }}>
			<ContainerFluid
				classes={"-stretchY"}
				sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
			>
				<DropdownMenuList
					navItems={navItems}
					toggleMenu={toggleMenu}
					menuActive={menuActive}
				/>
				<Box
					sx={theme => ({
						position: "absolute",
						bottom: 0,
						right: 0,
						display: "flex",
						padding: "0 1rem 1rem 1rem",

						width: "100%",
						alignItems: "flex-end",
						justifyContent: "space-between",
						[theme.breakpoints.up("sm")]: {
							padding: "0 2rem 1rem 1rem",
						},
					})}
				>
					<Typography
						variant='body1'
						component='span'
						sx={theme => ({
							color: theme.palette.primary.light,
							transition:
								"opacity .2s cubic-bezier(.55,.055,.675,.19),transform .2s cubic-bezier(.55,.055,.675,.19)",
							transitionTimingFunction: menuActive
								? "cubic-bezier(.215,.61,.355,1)"
								: null,
							transitionDuration: menuActive ? ".6s" : null,
							transitionDelay: menuActive ? ".6s" : null,
							transform: `translateY(${menuActive ? 0 : "-100%"})`,
							opacity: `${menuActive ? 1 : 0}`,
						})}
					>
						Social Impact Agency
					</Typography>
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
		</div>
	);
}

export default DropdownMenu;
