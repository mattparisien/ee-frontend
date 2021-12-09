import React, { useState, useEffect, useRef } from "react";
import { TextLogo } from "../Svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useResize from "../../helpers/hooks/useResize";
import { StyledHeader } from "../styles/StyledHeader";
import useHover from "../../helpers/hooks/useHover";
import { useTheme } from "styled-components";

export default function Header(props) {
	const theme = useTheme();
	const {
		menuState,
		toggleMenu,
		viewportNavColor,
		changeColor,
		color,
		burgerRef,
		buttonRef,
		bottomPattyRef,
		topPattyRef,
		circleRef,
		logoRef
	} = props;
	const [isHovered] = useHover(burgerRef);

	const [scrollDirection, setScrollDirection] = useState("");
	const [device, setDevice] = useState(null);
	const [windowWidth] = useResize();

	const headerStyles = {
		padding: "2rem 4rem",
		burger: {
			left: isHovered ? "10" : "0",
			transition: menuState ? "none" : "300ms ease",
			color: "dark",
		}
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
					<TextLogo logoRef={logoRef}/>
				</a>
			</div>

			{device === "mobile" && (
				<MobileNav
					onClick={toggleMenu}
					burgerRef={burgerRef}
					buttonRef={buttonRef}
					bottomPattyRef={bottomPattyRef}
					topPattyRef={topPattyRef}
					circleRef={circleRef}
					theme={theme}
					menuState={menuState}
				/>
			)}
			{device === "desktop" && <DesktopNav theme={theme} />}
		</StyledHeader>
	);
}
