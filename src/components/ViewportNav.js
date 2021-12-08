import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { toggleNavVisiblity } from "../animations";
import { ExitNav, Arrow } from "./Svg";
import { StyledViewportNav } from "./styles/StyledViewportNav";
import Container from "./Container";
import Heading from "./Heading";
import { navigation } from "../data/data";
import { Link } from "react-router-dom";
import { fadeUp } from "../animations";
import gsap from "gsap";
import { tabsListUnstyledClasses } from "@mui/base";
import { act } from "react-dom/test-utils";

export default function ViewportNav(props) {
	const [isActive, setActive] = useState(false);

	const addToRefs = function (el) {
		if (el && !linkRefs.current.includes(el)) {
			linkRefs.current.push(el);
		}
	};

	const ref = useRef(null);
	const menuRef = useRef(null);
	const linkRefs = useRef([]);
	const menuAnim = useRef(gsap.timeline());
	linkRefs.current = [];

	const navLinks = navigation.map(link => (
		<li key={link.id}>
			<Link to={link.path} ref={addToRefs} className='-fade-up'>
				{link.title}
			</Link>
		</li>
	));

	useEffect(() => {
		if (props.isVisible) {
			console.log("in here");
			setActive(!isActive);
			menuAnim.current.play();
			menuAnim.current
				.to(menuRef.current, {
					x: 0,
					duration: 1,
					ease: "Expo.inOut",
				})
				.to(
					linkRefs.current,
					{
						y: 0,
						opacity: 1,
						duration: 1,
						stagger: 0.2,
						ease: "Expo.easeOut",
					},
					0
				);
		} else if (!props.isVisible && isActive) {
			menuAnim.current.progress(1).reverse();
			setActive(!isActive);
		}
	}, [props.isVisible]);

	return (
		<StyledViewportNav className='viewport-nav' ref={menuRef}>
			<Container classes={"viewport-nav__inner"} bg={"dark"}>
				<ul className='-position-absolute-center'>{navLinks}</ul>
			</Container>
		</StyledViewportNav>
	);
}
