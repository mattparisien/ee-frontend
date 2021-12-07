import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import gsap from "gsap";
import { TextLogo } from "../Svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useResize from "../../helpers/hooks/useResize";

export default function Header(props) {
	const { menuState, toggleMenu } = props;

	const [scrollDirection, setScrollDirection] = useState("");
	const [device, setDevice] = useState(null);
	const [windowWidth] = useResize();

	useEffect(() => {
		if (windowWidth && windowWidth < 700) {
			setDevice("mobile");
		} else {
			setDevice("desktop");
		}
	}, [windowWidth]);

	return (
		<header
			className={"-justify-between"}
			data-theme={props.theme ? props.theme : "light"}
		>
			<div className='logo-wrapper -absolute-center'>
				<a href='/'>
					<TextLogo />
				</a>
			</div>
			
			{device === "mobile" && (
				<MobileNav menuState={menuState} toggleMenu={toggleMenu} />
			)}
			{device === "desktop" && (
				<DesktopNav />
			)}
		</header>
	);
}
