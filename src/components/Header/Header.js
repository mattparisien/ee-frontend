import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import gsap from "gsap";
import { TextLogo } from "../Svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useResize from "../../helpers/hooks/useResize";
import { StyledHeader } from "../styles/StyledHeader";

export default function Header(props) {
	const { menuState, toggleMenu, onClick } = props;

	const [scrollDirection, setScrollDirection] = useState("");
	const [device, setDevice] = useState(null);
	const [windowWidth] = useResize();

	const headerStyles = {
		padding: '2rem 4rem'
	}

	useEffect(() => {
		if (windowWidth && windowWidth < 700) {
			setDevice("mobile");
		} else {
			setDevice("desktop");
		}
	}, [windowWidth]);

	return (
		<StyledHeader $headerStyles={headerStyles}>
			<div className='logo-wrapper -absolute-center'>
				<a href='/'>
					<TextLogo />
				</a>
			</div>

			{device === "mobile" && (
				<MobileNav onClick={onClick} />
			)}
			{device === "desktop" && <DesktopNav />}
		</StyledHeader>
	);
}
