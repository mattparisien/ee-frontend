import classNames from "classnames";
import React, { forwardRef, useContext } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useNavigate } from "react-router-dom";
import { SiteWideControls } from "../../context/Context";

function Link(props, ref) {
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

	return (
		<a
			// onMouseEnter={handleMouseEnter}
			// onMouseLeave={handleMouseLeave}
			className={classes}
			href={props.href}
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
