import React, { useRef } from "react";
import { Ellipse } from "../index";

let isFirstRender = true;

function MobileNav(props) {
	const { onClick, addToRefs } = props;

	return (
		<button
			className='burger'
			ref={addToRefs}
			type='button'
			onClick={onClick}
			id='header-burger'
		>
			<span className='top' id='burger-top' ref={addToRefs}></span>
			<span className='bottom' id='burger-bottom' ref={addToRefs}></span>
			<Ellipse
				classes={"burger-circle"}
				circleRef={addToRefs}
				id='menu-active-circle'
			/>
		</button>
	);
}

export default MobileNav;
