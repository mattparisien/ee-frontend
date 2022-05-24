import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../lib/context";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useRouter } from "next/router";
import classNames from "classnames";

function Header({ toggleTransitioning, color }) {
	const { appState } = useContext(GlobalContext);
	const dropdownActive = appState.dropdownActive;
	const { pathname } = useRouter();

	const headerStyles = {
		default: "bg-light text-dark",
		transparentTextDark: "bg-transparent text-dark",
		transparentTextLight: "bg-transparent text-light",
	};

	const [headerColor, setHeaderColor] = useState(
		headerStyles.transparentTextLight
	);

	useEffect(() => {
		if (pathname === "/" && window !== "undefined") {
			const handleScroll = () => {
				console.log(window.scrollY);
				if (
					window.scrollY > window.innerHeight &&
					headerColor !== headerStyles.default
				) {
					setHeaderColor(headerStyles.default);
				} else if (
					window.scrollY < window.innerHeight &&
					headerColor !== headerStyles.transparentTextLight
				) {
					setHeaderColor(headerStyles.transparentTextLight);
				}
			};
			window.addEventListener("scroll", handleScroll);
		}

		if (dropdownActive) {
			setHeaderColor(headerStyles.transparentTextDark);
		}

		if (!dropdownActive && pathname !== "/") {
			setHeaderColor(headerColor.default);
		}
	}, [dropdownActive, pathname, headerColor]);

	const headerClasses = classNames(`Header fixed top-0 left-0 w-screen h-13`, {
		[headerColor]: headerColor,
	});

	return (
		<header className={headerClasses} style={{ zIndex: 99999 }}>
			<ResponsiveAppBar
				headerColor={headerColor}
				toggleTransitioning={toggleTransitioning}
				dropdownActive={dropdownActive}
				color={color}
			/>
		</header>
	);
}

export default Header;
