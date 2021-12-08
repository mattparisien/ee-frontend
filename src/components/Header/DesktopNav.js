import React from "react";
import { Link } from "react-router-dom";
import { Ellipse } from "../Svg";

const navLinkData = [
	{
		id: 1,
		title: "Home",
		path: "/",
		circleWidth: "7rem"
	},
	{
		id: 2,
		title: "Projects",
		path: "/projects",
		circleWidth: "8rem"
	},
	{
		id: 3,
		title: "Contact",
		path: "/contact",
		circleWidth: "8rem"
	},
];

const navLinks = navLinkData.map(link => (
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
