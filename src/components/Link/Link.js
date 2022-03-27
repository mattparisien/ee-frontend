import classNames from "classnames";
import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import variables from "../../styles/scss/_vars.module.scss";
import { useContext } from "react";
import { SiteWideControls } from "../../App";


function Link(props, ref) {
	
	const classes = classNames("c-link", {
		[props.classes]: props.classes,
	});

	const {setTransitioning} = useContext(SiteWideControls)

	const navigate = useNavigate();
	// const { playTransition } = useContext(LoadingContext);

	const handleNavigate = e => {
		console.log(props.onClick)
		setTransitioning(true);
		
		props.onClick && props.onClick(e);
		e.preventDefault();

		setTimeout(() => {
			console.log('hello!!!')
			navigate(props.href);
		}, 2000);
	};

	return (
		<a
			// onMouseEnter={handleMouseEnter}
			// onMouseLeave={handleMouseLeave}
			className={classes}
			href={!props.isRouterLink && props.href}
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
