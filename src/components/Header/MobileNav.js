import React, { useRef, useEffect } from "react";

function MobileNav(props) {
	const { menuState, toggleMenu } = props;
	const ref = useRef(null);

	return (
		<div className='mobile-nav-wrapper'>
			<button
				ref={ref}
				className={menuState ? "header-burger is-x" : "header-burger is-burger"}
				type='button'
				onClick={() => toggleMenu(!menuState)}
			>
				<span
					className='top'
					style={{ backgroundColor: menuState && "black" }}
				></span>
				<span
					className='bottom'
					style={{ backgroundColor: menuState && "black" }}
				></span>
			</button>
		</div>
	);
}

export default MobileNav;
