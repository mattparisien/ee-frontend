import classNames from "classnames";
import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import variables from "../../styles/scss/_vars.module.scss";

function Link(props, ref) {
	const classes = classNames("c-link", {
		[props.classes]: props.classes,
	});

	const navigate = useNavigate();
	// const { playTransition } = useContext(LoadingContext);

	const handleNavigate = e => {
		props.onClick && props.onClick(e);
		e.preventDefault();

		// playTransition();

		setTimeout(() => {
			navigate(props.href);
		}, variables.loaderDuration.replace(".", "").concat("00"));
	};

	// const { setCursorState } = useContext(CursorContext);

	// const handleMouseEnter = () => {
	// 	setCursorState("link-hovering");
	// };

	// const handleMouseLeave = () => {
	// 	setCursorState("following");
	// };

	return (
		<a
			// onMouseEnter={handleMouseEnter}
			// onMouseLeave={handleMouseLeave}
			className={classes}
			href={!props.isRouterLink && props.href}
			target={props.target}
			onClick={!props.isRouterLink ? props.onClick : handleNavigate}
			ref={ref}
		>
			{props.children}
		</a>
	);
}

export default forwardRef(Link);
