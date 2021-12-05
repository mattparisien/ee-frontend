import React from "react";
import { Link } from "react-router-dom";

function DesktopNav() {
	return (
		<div className='desktop-nav-wrapper'>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default DesktopNav;
