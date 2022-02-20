import gsap from "gsap/all";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../data/data";
import useSplit from "../../helpers/hooks/useSplit";
import { Container } from "../index";
import { StyledViewportNav } from "../styles/StyledViewportNav";

export default function SideMenu(props) {
	const { appRefs, toggleMenu, isOpen, hasShown } = props;

	const menuStyles = {
		offset: props.offset,
	};

	const menuAnimIn = useRef(gsap.timeline());
	const menuAnimOut = useRef(gsap.timeline());
	const menuRef = useRef(null);
	const container = menuRef.current;
	const q = gsap.utils.selector(container);
	const hoverTimelines = useRef;
	hoverTimelines.current = [];
	const linkRefs = useRef([]);
	linkRefs.current = [];

	const split  = useSplit([linkRefs.current][0], {
		type: "chars, lines",
		charsClass: "char",
		linesClass: "line"
	});

	const addToRefs = el => {
		if (linkRefs.current && !linkRefs.current.includes(el)) {

			el !== null && linkRefs.current.push(el);
		}
	};

	// useEffect(() => {
	// 	const circle = appRefs.current["menu-active-circle"];
	// 	const chars = q(".line .char");
	// 	const charsOdd = q(".char:nth-of-type(odd)");
	// 	const charsEven = q(".char:nth-of-type(even)");

	// 	if (isOpen) {
	// 		gsap.set(menuRef.current, { display: "block" });

	// 		menuAnimIn.current
	// 			.to(menuRef.current, {
	// 				x: 0,
	// 				duration: 1,
	// 				ease: "Expo.easeInOut",
	// 			})
	// 			.to(
	// 				chars,
	// 				{
	// 					y: 0,
	// 					duration: 1,
	// 					ease: "expo.out",
	// 					opacity: 1,
	// 				},
	// 				0.5
	// 			)
	// 			.to(
	// 				circle,
	// 				{
	// 					scale: 1,
	// 					opacity: 1,
	// 					duration: 0.5,
	// 					ease: "back.out(2)",
	// 				},
	// 				0.5
	// 			);
	// 	}

	// 	if (!isOpen && hasShown) {
	// 		menuAnimOut.current
	// 			.to(
	// 				charsOdd,
	// 				{
	// 					y: "-100%",
	// 					duration: 1,
	// 					ease: "expo.inOut",
	// 					opacity: 0,
	// 				},
	// 				0.1
	// 			)
	// 			.to(
	// 				charsEven,
	// 				{
	// 					y: "100%",
	// 					duration: 1,
	// 					ease: "expo.inOut",
	// 					opacity: 0,
	// 					stagger: 0.1,
	// 				},
	// 				0.1
	// 			)
	// 			.to(
	// 				circle,
	// 				{
	// 					scale: 0,
	// 					opacity: 0,
	// 					duration: 0.5,
	// 					ease: "back.out(2)",
	// 				},
	// 				0.5
	// 			)
	// 			.to(
	// 				menuRef.current,
	// 				{
	// 					x: "-100%",
	// 					duration: 1,
	// 					ease: "Expo.easeInOut",
	// 					onComplete: () => {
	// 						gsap.set(menuRef.current, { display: "none" });
	// 						gsap.set(menuRef.current, { clearProps: true });
	// 						gsap.set(chars, { clearProps: true });

	// 						menuAnimIn.current.clear();
	// 						menuAnimOut.current.clear();
	// 					},
	// 				},
	// 				0.2
	// 			);
	// 	}
	// }, [isOpen, appRefs]);

	const navLinks = navigation.map(link => (
		<li key={link.id}>
			<Link
				to={link.path}
				ref={props.addToRefs}
				className='-fade-up menu-link'
				style={{ overflow: "hidden" }}
				onClick={() => toggleMenu()}
				ref={addToRefs}
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
