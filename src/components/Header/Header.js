import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../lib/context";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { useRouter } from "next/router";
import classNames from "classnames";
import changeHeaderColor from "./utils/changeHeaderColor";

export const HeaderContext = React.createContext();

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
		changeHeaderColor(headerColor, setHeaderColor, pathname, dropdownActive);
	}, [dropdownActive, pathname, headerColor]);

	const headerClasses = classNames(`Header fixed top-0 left-0 w-screen h-13`, {
		[headerColor]: headerColor,
	});

	return (
		<HeaderContext.Provider value={{ headerColor }}>
			<header className={headerClasses} style={{ zIndex: 99999 }}>
				<ResponsiveAppBar
					headerColor={headerColor}
					toggleTransitioning={toggleTransitioning}
					dropdownActive={dropdownActive}
					color={color}
				/>
			</header>
		</HeaderContext.Provider>
	);
}

export default Header;
