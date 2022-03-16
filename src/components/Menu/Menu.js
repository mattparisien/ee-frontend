import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

function Menu({ isActive }) {
	const [isOff, setOff] = useState(false);
	const [isFirstRender, setFirstRender] = useState(true);

	const classes = classNames("c-menu", {
		"is-active": isActive,
	});
	const card = useRef(null);

	useEffect(() => {
		card.current.addEventListener("animationend", () => {});
	});

	return (
		<div className={classes} >
			<div className='c-menu_bg' ref={card}></div>
		</div>
	);
}

export default Menu;
