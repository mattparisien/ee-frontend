import React, { useRef, useState, useEffect } from "react";
import { StyledViewportNav } from "./styles/StyledViewportNav";
import Container from "./Container";
import { navigation } from "../data/data";
import { Link } from "react-router-dom";

import gsap from "gsap/all";
import SplitText from "gsap/SplitText";

let isFirstRender = true;

export default function SideMenu(props) {
	const [isSplit, setIsSplit] = useState(false);
	const { appRefs, toggleMenu, isOpen, hasShown } = props;

	const menuStyles = {
		offset: props.offset,
	};

	const linkAnim = useRef(gsap.timeline());
	const menuAnimIn = useRef(gsap.timeline());
	const menuAnimOut = useRef(gsap.timeline());
	const menuRef = useRef(null);

	useEffect(() => {
		gsap.registerPlugin(SplitText);
		const links = appRefs.current["menu-links"];
		if (!isSplit) {
			const mySplitText = new SplitText(links, {
				type: "lines, chars",
				charsClass: "char",
				linesClass: "line",
			});
			setIsSplit(true);
		}
	}, [appRefs]);

	useEffect(() => {
		if (isOpen) {
			gsap.set(menuRef.current, { display: "flex" });
			menuAnimIn.current.to(menuRef.current, {
				x: 0,
				duration: 1,
				ease: "Expo.easeInOut",
			});
		}

		console.log(hasShown);

		if (!isOpen && hasShown) {
			console.log("hi");
			menuAnimOut.current.to(menuRef.current, {
				x: "-100%",
				duration: 1,
				ease: "Expo.easeInOut",
				onComplete: () => {
					gsap.set(menuRef.current, {
						display: "none",
					});
				},
			});
		}
	}, [isOpen]);

	const handleMouseEnter = e => {};

	const handleMouseLeave = e => {};

	const navLinks = navigation.map(link => (
		<li key={link.id}>
			<Link
				delay={1000}
				to={link.path}
				ref={props.addToRefs}
				className='-fade-up menu-link'
				onMouseEnter={e => handleMouseEnter(e)}
				onMouseLeave={e => handleMouseLeave(e)}
				style={{ overflow: "hidden" }}
				onClick={() => toggleMenu()}
			>
				{link.title}
			</Link>
		</li>
	));

	return (
		<StyledViewportNav
			className='viewport-nav'
			ref={menuRef}
			$menuStyles={menuStyles}
		>
			<Container classes={"viewport-nav__inner"} bg={"dark"}>
				<ul className='-position-absolute-center'>{navLinks}</ul>
			</Container>
		</StyledViewportNav>
	);
}
