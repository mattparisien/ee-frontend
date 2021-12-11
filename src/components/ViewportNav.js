import React, { useRef, useState } from "react";
import { StyledViewportNav } from "./styles/StyledViewportNav";
import Container from "./Container";
import { navigation } from "../data/data";
import { Link } from "react-router-dom";
import useResize from "../helpers/hooks/useResize";
import { useEffect } from "react/cjs/react.development";
import gsap from "gsap/all";
import SplitText from "gsap/SplitText";
import $ from "jquery";
import { Hidden } from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";

let isFirstRender = true;

export default function ViewportNav(props) {
	const [isSplit, setIsSplit] = useState(false);
	const { appRefs } = props;

	const menuStyles = {
		offset: props.offset,
	};

	const linkAnim = useRef(gsap.timeline());

	useEffect(() => {
		console.log(props.offset);
	});

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

	const handleMouseEnter = e => {};

	const handleMouseLeave = e => {};

	const navLinks = navigation.map(link => (
		<li key={link.id}>
			<Link
				to={link.path}
				ref={props.addToRefs}
				className='-fade-up menu-link'
				onMouseEnter={e => handleMouseEnter(e)}
				onMouseLeave={e => handleMouseLeave(e)}
				style={{ overflow: "hidden" }}
			>
				{link.title}
			</Link>
		</li>
	));

	return (
		<StyledViewportNav
			className='viewport-nav'
			ref={props.addToRefs}
			$menuStyles={menuStyles}
		>
			<Container classes={"viewport-nav__inner"} bg={"dark"}>
				<ul className='-position-absolute-center'>{navLinks}</ul>
			</Container>
		</StyledViewportNav>
	);
}
