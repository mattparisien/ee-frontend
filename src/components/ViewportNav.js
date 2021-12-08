import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { toggleNavVisiblity } from "../animations";
import { ExitNav, Arrow } from "./Svg";
import { StyledViewportNav } from "./styles/StyledViewportNav";
import Container from "./Container";
import Heading from "./Heading";
import { navigation } from "../data/data";
import { Link } from "react-router-dom";

export default function ViewportNav(props) {
	const ref = useRef(null);

	const navLinks = navigation.map(link => (
		<li>
			<Link to={link.path}>{link.title}</Link>
		</li>
	));

	useEffect(() => {
		toggleNavVisiblity(ref.current, props.isVisible);
	}, [props.isVisible]);

	return (
		<StyledViewportNav className='viewport-nav is-active'>
			<Container classes={"viewport-nav__inner"} bg={"dark"}>
				<ul className='-position-absolute-center'>{navLinks}</ul>
			</Container>
		</StyledViewportNav>
	);
}
