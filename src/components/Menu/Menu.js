import { List, ListItem, Typography, useMediaQuery } from "@mui/material";
import classNames from "classnames";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import variables from "../../styles/scss/_vars.module.scss";
import ContainerFluid from "../Containers/ContainerFluid";
import SplitText from "../HOC/SplitText";
import Link from "../Link/Link";
import SocialList from "../Lists/SocialList";
import { motion, useIsPresent } from "framer-motion/dist/framer-motion";

function Menu({ menuActive, navItems, toggleMenu }) {
	const matches = useMediaQuery(
		`(min-width: ${variables["breakpoints-tablet"]}px)`
	);

	const classes = classNames("c-menu", {
		"is-active": menuActive,
	});

	const [navItemsReady, setNavItemsReady] = useState(false);

	const isPresent = useIsPresent();

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
				<List>
					{navItems &&
						navItems.map((item, i) => (
							<ListItem
								key={i}
								sx={{
									justifyContent: "center",
								}}
							>
								<Link isRouterLink href={item.path}>
									{navItemsReady && (
										<Typography
											component='span'
											variant='h1'
											sx={theme => ({ color: theme.palette.primary.light })}
										>
											<SplitText>{item.name}</SplitText>
										</Typography>
									)}
								</Link>
							</ListItem>
						))}
				</List>
				<SocialList />
			</ContainerFluid>
		</motion.div>
	);
}

export default Menu;
