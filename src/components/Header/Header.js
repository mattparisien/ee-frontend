import React, { useState, useEffect, useRef } from "react";
import { TextLogo } from "../index";
import MobileNav from "./MobileNav";
import useResize from "../../helpers/hooks/useResize";
import useScroll from "../../helpers/hooks/useScrollDir";
import { useTheme } from "styled-components";

import {
	StyledHeader,
	StyledDynamicWrapper,
	StyledInnerLayout,
} from "./styles";

export default function Header(props) {
	const theme = useTheme();
	const { menuState, toggleMenu, appRefs, addToRefs, headerColor } = props;
	const [device, setDevice] = useState(null);
	const [windowWidth] = useResize();
	const [isHoverable, setHoverable] = useState(true);
	const [isScrolling, scrollDirection] = useScroll();


	useEffect(() => {
		console.log(menuState);

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
		color: headerColor,
		burger: {
			transition: menuState ? "none" : "300ms ease",
			color: headerColor,
		},
	};

	useEffect(() => {
		console.log(menuState)
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
			<StyledDynamicWrapper
				className='header-dynamic-wrapper'
				isScrollingDown={scrollDirection === "down"}
			>
				<StyledInnerLayout className='header-inner-layout' menuIsActive={menuState}>
					<div className='logo-wrapper -absolute-center'>
						<a href='/'>
							<TextLogo logoRef={addToRefs}/>
						</a>
					</div>

					<MobileNav
						onClick={toggleMenu}
						menuState={menuState}
						linkRefs={props.linkRefs}
						addToRefs={addToRefs}
					/>
				</StyledInnerLayout>
			</StyledDynamicWrapper>
		</StyledHeader>
	);
}
