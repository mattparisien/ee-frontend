import React, { useRef } from "react";
import { Ellipse } from "../Svg";

let isFirstRender = true;

function MobileNav(props) {
	const { onClick, addToRefs } = props;

	return (
		<div className='mobile-nav-wrapper'>
			<button
				className='burger'
				ref={addToRefs}
				type='button'
				onClick={onClick}
				id="header-burger"
			>
				<span className='top' id="burger-top" ref={addToRefs}></span>
				<span className='bottom' id="burger-bottom" ref={addToRefs}></span>
				<Ellipse
					classes={"burger-circle"}
					circleRef={addToRefs}
					width={"66px"}
					height={"66px"}
					id="menu-active-circle"
				/>
			</button>
		</div>
	);
}

export default MobileNav;
