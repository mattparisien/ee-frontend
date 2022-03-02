import React, { useEffect, useState } from "react";
import useResize from "../../helpers/hooks/useResize";
import useScroll from "../../helpers/hooks/useScrollDir";
import { TextLogo } from "../index";
import { StyledHeader, StyledInnerLayout } from "./styles";
import Navigation from "./Navigation/Navigation";
import ContainerFluid from "../Containers/ContainerFluid";

export default function Header(props) {
	const { menuState, toggleMenu, appRefs, addToRefs, headerColor } = props;
	const [device, setDevice] = useState(null);
	const [windowWidth] = useResize();
	const [isHoverable, setHoverable] = useState(true);
	const [isScrolling, scrollDirection] = useScroll(props.scroller);

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

	useEffect(() => {
		if (windowWidth && windowWidth < 700) {
			setDevice("mobile");
		} else {
			setDevice("desktop");
		}
	}, [windowWidth]);

	return (
		<StyledHeader
			isMenuActive={menuState}
			$isHoverable={isHoverable}
			color={props.headerColor}
			ref={addToRefs}
			id='site-header'
		>
			<ContainerFluid height='100%' noVerticalGutter>
				<div className='logo-wrapper -absolute-center'>
					<a href='/'>
						<TextLogo logoRef={addToRefs} />
					</a>
				</div>
				<Navigation />
			</ContainerFluid>
		</StyledHeader>
	);
}
