import React, { useRef, useEffect } from "react";
import { Ellipse } from "../Svg";

function MobileNav(props) {
	const { menuState, onClick, headerStyles, burgerRef } = props;
	const ref = useRef(null);

	return (
		<div className='mobile-nav-wrapper'>
			<button
				ref={burgerRef}
				type='button'
				onClick={onClick}
				style={{ height: "50px", width: "50px" }}
			>
				<span
					className='top'
					style={{ backgroundColor: menuState && "black" }}
				></span>
				<span
					className='bottom'
					style={{ backgroundColor: menuState && "black" }}
				></span>
				<Ellipse fill={props.theme.colors.dark} width={"100px"} height={"100px"}/>
			</button>
		</div>
	);
}

export default MobileNav;
