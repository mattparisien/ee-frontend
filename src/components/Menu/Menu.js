import { Box, List, ListItem, Typography, useMediaQuery } from "@mui/material";
import classNames from "classnames";
import { motion, useIsPresent } from "framer-motion/dist/framer-motion";
import React, { useEffect, useState } from "react";
import variables from "../../styles/scss/_vars.module.scss";
import ContainerFluid from "../Containers/ContainerFluid";
import SplitText from "../HOC/SplitText";
import Link from "../Link/Link";
import SocialList from "../Lists/SocialList";
import useResize from "../../helpers/hooks/useResize";
import { useTheme } from "@mui/material";

function Menu({ menuActive, navItems, toggleMenu }) {
	const matches = useMediaQuery(
		`(min-width: ${variables["breakpoints-tablet"]}px)`
	);

	const classes = classNames("c-menu", {
		"is-active": menuActive,
	});

	const theme = useTheme();
	const [windowWidth] = useResize();

	const [navItemsReady, setNavItemsReady] = useState(false);

	const isPresent = useIsPresent();

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

			windowWidth > breakpoint && toggleMenu();
		}
	}, [theme, windowWidth]);

	useEffect(() => {
		isPresent &&
			setTimeout(() => {
				setNavItemsReady(!navItemsReady);
			}, 300);

		return () => {
			setNavItemsReady(!navItemsReady);
		};
	}, [isPresent]);

	const variants = {
		hidden: {
			y: "-100%",
		},
		visible: {
			y: 0,
			transition: {
				ease: "anticipate",
				duration: 1.2,
			},
		},
		exit: {
			y: "-100%",
			transition: {
				ease: "anticipate",
				duration: 1.3,
				delay: 0.4,
			},
		},
	};

	return (
		<motion.div
			className={classes}
			variants={variants}
			animate='visible'
			exit='exit'
			initial='hidden'
		>
			<ContainerFluid classes={"-stretchY"}>
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
									{navItemsReady && (
										<Typography
											component='span'
											variant='h1'
											sx={theme => ({
												color: theme.palette.primary.light,
												fontSize: "19vw !important",
												[theme.breakpoints.up("md")]: {
													fontSize: "10rem !important",
												},
												transition: "color 400ms ease",
												"@media (hover: hover)": {
													"&:hover": {
														color: theme.palette.primary.yellow,
													},
												},
											})}
										>
											<SplitText>{item.name}</SplitText>
										</Typography>
									)}
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
		</motion.div>
	);
}

export default Menu;
