import { Typography } from "@mui/material";
import classNames from "classnames";
import React, { forwardRef, useContext } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { NavLink, useNavigate } from "react-router-dom";
import { SiteWideControls } from "../../context/Context";

function Link(props) {
	const scroll = useLocomotiveScroll();
	const classes = classNames("c-link", {
		[props.classes]: props.classes,
	});

	const { setTransitioning, toggleDomAnimationReady } =
		useContext(SiteWideControls);

	const navigate = useNavigate();

	const handleNavigate = e => {
		scroll.isReady && scroll.scroll.scrollTo(0, 0);

		if (!scroll.isReady) {
			setTimeout(() => {
				window.scrollTo(0, 0);
			}, 200);
		}

		toggleDomAnimationReady();
		setTransitioning(true);

		props.onClick && props.onClick(e);
		e.preventDefault();

		setTimeout(() => {
			navigate(props.href);
		}, 2000);
	};

	return props.isRouterLink ? (
		<NavLink
			className={classes}
			to={props.href === "/" ? "" : props.href}
			style={props.style}
			rel={props.rel}
			onClick={props.onClick}
			// component='button'
		>
			<Typography variant='body3'>{props.children}</Typography>
		</NavLink>
	) : (
		<a
			className={classes}
			href={props.href}
			target={props.target}
			rel={props.rel}
			onClick={!props.isRouterLink ? props.onClick : handleNavigate}
			data-rotate={props.rotate}
			{...props}
		>
			{props.children}
		</a>
	);
}

export default forwardRef(Link);
