import React, { useRef } from "react";
import { StyledViewportNav } from "./styles/StyledViewportNav";
import Container from "./Container";
import { navigation } from "../data/data";
import { Link } from "react-router-dom";
import useResize from "../helpers/hooks/useResize";

export default function ViewportNav(props) {
	const [windowWidth] = useResize();

	const addToRefs = function (el) {
		if (el && !linkRefs.current.includes(el)) {
			linkRefs.current.push(el);
		}
	};

	const linkRefs = useRef([]);

	linkRefs.current = [];

	const navLinks = navigation.map(link => (
		<li key={link.id}>
			<Link to={link.path} ref={addToRefs} className='-fade-up'>
				{link.title}
			</Link>
		</li>
	));

	return (
		<StyledViewportNav className='viewport-nav' ref={props.sideMenuRef}>
			<Container classes={"viewport-nav__inner"} bg={"dark"}>
				<ul className='-position-absolute-center'>{navLinks}</ul>
			</Container>
		</StyledViewportNav>
	);
}
