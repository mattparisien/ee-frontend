
import { Link } from "react-router-dom";
import { Ellipse } from "../Svg";
import { navigation } from "../../data/data";

function DesktopNav(props) {
	const navLinks = navigation.map(link => (
		<li>
			<Link to={link.path}>
				{link.title}
				<Ellipse
					isLink
					id={link.id}
					width={link.circleWidth}
					stroke={props.theme.colors.dark}
					fill='none'
					classes={"-position-absolute-center"}
				/>
			</Link>
		</li>
	));
	return (
		<div className='desktop-nav-wrapper'>
			<nav>
				<ul>{navLinks}</ul>
			</nav>
		</div>
	);
}

export default DesktopNav;
