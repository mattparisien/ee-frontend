import React, { useRef } from "react";
import { Ellipse } from "../Svg";

let isFirstRender = true;

function MobileNav(props) {
	const {
		menuState,
		onClick,
		headerStyles,
		burgerRef,
		buttonRef,
		bottomPattyRef,
		topPattyRef,
		circleRef,

	} = props;
	

	return (
		<div className='mobile-nav-wrapper'>
			<button
				ref={burgerRef}
				type='button'
				onClick={onClick}
				
			>
				<span
					className='top'
					ref={topPattyRef}
					style={{ backgroundColor: menuState && "black" }}
				></span>
				<span
					className='bottom'
					ref={bottomPattyRef}
					style={{ backgroundColor: menuState && "black" }}
				></span>
				<Ellipse
					classes={"burger-circle"}
					circleRef={circleRef}
					fill={props.theme.colors.light}
					width={"66px"}
					height={"66px"}
				/>
			</button>
		</div>
	);
}

export default MobileNav;
