import classNames from "classnames";
import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import variables from "../../styles/scss/_vars.module.scss";
import { useContext } from "react";
import { SiteWideControls } from "../../App";
import { useLocomotiveScroll } from "react-locomotive-scroll";

function Link(props, ref) {
	const scroll = useLocomotiveScroll();
	const classes = classNames("c-link", {
		[props.classes]: props.classes,
	});

	const { setTransitioning, toggleDomAnimationReady } =
		useContext(SiteWideControls);

	const navigate = useNavigate();
	// const { playTransition } = useContext(LoadingContext);

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

	return (
		<a
			// onMouseEnter={handleMouseEnter}
			// onMouseLeave={handleMouseLeave}
			className={classes}
			href={!props.isRouterLink ? props.href : "#"}
			target={props.target}
			onClick={!props.isRouterLink ? props.onClick : handleNavigate}
			ref={ref}
			data-rotate={props.rotate}
		>
			{props.children}
		</a>
	);
}

export default forwardRef(Link);
