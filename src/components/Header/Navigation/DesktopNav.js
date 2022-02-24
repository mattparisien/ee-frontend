import { Link } from "react-router-dom";
import { navigation } from "../../../data/data";
import { UnorderedList } from "../..";
import styled from "styled-components";



function DesktopNav(props) {
	const navLinks = navigation.map(link => (
		<li>
			<Link to={link.path}>{link.title}</Link>
		</li>
	));
	return (
		<div className='desktop-nav-wrapper'>
			<UnorderedList>{navLinks}</UnorderedList>
		</div>
	);
}

export default DesktopNav;
