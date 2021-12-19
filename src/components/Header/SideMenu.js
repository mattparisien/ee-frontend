import React, { useRef, useState, useEffect } from "react";
import { StyledViewportNav } from "../styles/StyledViewportNav";
import { Container } from "../index";
import { navigation } from "../../data/data";
import { Link } from "react-router-dom";
import $ from "jquery";
import gsap from "gsap/all";
import SplitText from "gsap/SplitText";
import CSSPlugin from "gsap/CSSPlugin";
import useHoverEffect from "../../effects/LinkHover";
import useSplit from "../../helpers/hooks/useSplit";

export default function SideMenu(props) {
	// const [isSplit, setIsSplit] = useState(false);
	const { appRefs, toggleMenu, isOpen, hasShown } = props;
	


	const menuStyles = {
		offset: props.offset,
	};

	const menuAnimIn = useRef(gsap.timeline());
	const menuAnimOut = useRef(gsap.timeline());
	const hoverTl = useRef(gsap.timeline());
	const menuRef = useRef(null);
	const container = menuRef.current;
	const q = gsap.utils.selector(container);
	const hoverTimelines = useRef;
	hoverTimelines.current = [];
	const hover = useHoverEffect(container)
	const links = q("a");

	// useEffect(() => {
	// 	gsap.registerPlugin(SplitText);
	// 	const links = appRefs.current["menu-links"];
	// 	if (!isSplit) {
	// 		const mySplitText = new SplitText(links, {
	// 			type: "lines, chars",
	// 			charsClass: "char",
	// 			linesClass: "line",
	// 		});
	// 		setIsSplit(true);
	// 	}
	// }, [appRefs]);

	useEffect(() => {
		const burgerbottom = appRefs.current["burger-bottom"];
		const burgerTop = appRefs.current["burger-top"];
		const circle = appRefs.current["menu-active-circle"];
		const chars = q(".line .char");
		const charsOdd = q(".char:nth-of-type(odd)");
		const charsEven = q(".char:nth-of-type(even)");

		if (isOpen) {
			gsap.set(menuRef.current, { display: "block" });
			console.log(appRefs);
			menuAnimIn.current
				.to(menuRef.current, {
					x: 0,
					duration: 1,
					ease: "Expo.easeInOut",
				})
				.to(
					chars,
					{
						y: 0,
						duration: 1,
						ease: "expo.out",
						opacity: 1,
					},
					0.5
				)
				.to(
					circle,
					{
						scale: 1,
						opacity: 1,
						duration: 0.5,
						ease: "back.out(2)",
					},
					0.5
				);
		}

		if (!isOpen && hasShown) {
			menuAnimOut.current
				.to(
					charsOdd,
					{
						y: "-100%",
						duration: 1,
						ease: "expo.inOut",
						opacity: 0,
					},
					0.1
				)
				.to(
					charsEven,
					{
						y: "100%",
						duration: 1,
						ease: "expo.inOut",
						opacity: 0,
						stagger: 0.1,
					},
					0.1
				)
				.to(
					circle,
					{
						scale: 0,
						opacity: 0,
						duration: 0.5,
						ease: "back.out(2)",
					},
					0.5
				)
				.to(
					menuRef.current,
					{
						x: "-100%",
						duration: 1,
						ease: "Expo.easeInOut",
						onComplete: () => {
							gsap.set(menuRef.current, { display: "none" });
							gsap.set(menuRef.current, { clearProps: true });
							gsap.set(chars, { clearProps: true });

							menuAnimIn.current.clear();
							menuAnimOut.current.clear();
						},
					},
					0.2
				);
		}
	}, [isOpen, appRefs]);

	const handleMouseEnter = e => {
		const linkChars = $(e.target).find(".char");
		const tl = gsap.timeline();
		let delay = 0;

		linkChars.each((i, char) => {
			const tl = gsap.timeline();
			tl.timeScale(1.2).to(char, {
				y: "-50%",
				stagger: 0.1,
				ease: "power1.in",
				duration: 0.2,
				opacity: 0,
				delay: (delay += 0.1),
				onComplete: () => {
					gsap.set(char, {
						y: "50",
					});
					tl.to(char, {
						ease: "power1.out",
						duration: 0.3,
						opacity: 1,
						y: 0,
						stagger: 0.1,
					});
				},
			});
		});
	};

	const navLinks = navigation.map(link => (
		<li key={link.id}>
			<Link
				to={link.path}
				ref={props.addToRefs}
				className='-fade-up menu-link'
				onMouseEnter={e => handleMouseEnter(e)}
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
