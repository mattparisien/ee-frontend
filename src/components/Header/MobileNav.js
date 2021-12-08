import React, { useRef, useEffect } from "react";

function MobileNav(props) {
	const { menuState, onClick } = props;
	const ref = useRef(null);

	return (
		<div className='mobile-nav-wrapper'>
			<button
				ref={ref}
				type='button'
				onClick={onClick}
				style={{ height: '50px', width: '50px' }}
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
