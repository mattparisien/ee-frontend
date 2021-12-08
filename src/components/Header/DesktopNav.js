import React from "react";
import { Link } from "react-router-dom";
import { Ellipse } from "../Svg";
import { navigation } from "../../data/data";



const navLinks = navigation.map(link => (
	<li>
		<Link to={link.path}>
			{link.title}
			<Ellipse id={link.id} width={link.circleWidth} color={"black"}/>
		</Link>
	</li>
));

function DesktopNav() {
	return (
		<div className='desktop-nav-wrapper'>
			<nav>
				<ul>{navLinks}</ul>
			</nav>
		</div>
	);
}

export default DesktopNav;
