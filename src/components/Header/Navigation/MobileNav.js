import React from "react";

function MobileNav(props) {
	const { onClick, addToRefs } = props;

	return (
		<div className='mobile-nav-wrapper'>
			<button
				className='burger'
				ref={addToRefs}
				type='button'
				onClick={onClick}
				id='header-burger'
			>
				<span className='top' id='burger-top' ref={addToRefs}></span>
				<span className='bottom' id='burger-bottom' ref={addToRefs}></span>
				<div
					className={"burger-circle"}
					ref={addToRefs}
					id='menu-active-circle'
				>
					<div className='inner-expanding-circle'></div>
				</div>
			</button>
		</div>
	);
}

export default MobileNav;
