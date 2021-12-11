import React, { useState, useEffect, useRef } from "react";
import { TextLogo } from "../Svg";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import useResize from "../../helpers/hooks/useResize";
import { StyledHeader } from "../styles/StyledHeader";
import useHover from "../../helpers/hooks/useHover";
import { useTheme } from "styled-components";
import { useFirstRender } from "../../helpers/hooks/useFirstRender";

export default function Header(props) {
	const theme = useTheme();
	const {
		menuState,
		toggleMenu,

		burgerRef,
		buttonRef,
		bottomPattyRef,
		topPattyRef,
		circleRef,
		logoRef,
		headerColor,
		addToRefs,
	} = props;
	const [isHovered] = useHover(burgerRef);
	const [isFirstRender] = useFirstRender();

	const [scrollDirection, setScrollDirection] = useState("");
	const [device, setDevice] = useState(null);
	const [windowWidth] = useResize();
	const [isHoverable, setHoverable] = useState(true);

	useEffect(() => {
		if (menuState) {
			setHoverable(false);
		} else if (!menuState) {
			//Add delay for making burger hoverable again --> wait for menu to be off screen
			setTimeout(() => {
				setHoverable(true);
			}, 1500);
		}
	}, [menuState]);

	const headerStyles = {
		padding: "2rem 4rem",
		color: 'black',
		burger: {
			transition: menuState ? "none" : "300ms ease",
			color: "dark",
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
		<StyledHeader
			$headerStyles={headerStyles}
			$isHoverable={isHoverable}
			ref={addToRefs}
			id='site-header'
		>
			<div className='logo-wrapper -absolute-center'>
				<a href='/'>
					<TextLogo logoRef={addToRefs} />
				</a>
			</div>

			<MobileNav
				onClick={toggleMenu}
				menuState={menuState}
				linkRefs={props.linkRefs}
				addToRefs={addToRefs}
			/>

			{/* {device === "desktop" && <DesktopNav theme={theme} />} */}
		</StyledHeader>
	);
}
