import React, { useState, useEffect, useRef } from "react";
import $ from "jquery";
import gsap from "gsap";
import { TextLogo } from "../Svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useResize from "../../helpers/hooks/useResize";
import { StyledHeader } from "../styles/StyledHeader";
import { dark } from "@mui/material/styles/createPalette";
import useHover from "../../helpers/hooks/useHover";
import { useTheme } from "styled-components";

export default function Header(props) {
	const theme = useTheme();
	const { menuState, toggleMenu, onClick, viewportNavColor } = props;
	const burgerRef = useRef(null);
	const [isHovered] = useHover(burgerRef);
	

	const [scrollDirection, setScrollDirection] = useState("");
	const [device, setDevice] = useState(null);
	const [windowWidth] = useResize();


	useEffect(() => {
		console.log(menuState)
	})

	const headerStyles = {
		padding: "2rem 4rem",
		burger: {
			left: isHovered ? "10" : "0",
			transition: "300ms ease",
			color: menuState ? 'light' : 'dark'
		},
	};

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
				<MobileNav onClick={onClick} burgerRef={burgerRef} theme={theme}/>
			)}
			{device === "desktop" && <DesktopNav theme={theme}/>}
		</StyledHeader>
	);
}
