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

	const [headerTheme, setHeaderTheme] = useState("light");

	useEffect(() => {
		setHeaderTheme(pathname === "/contact" ? "dark" : "light");
	}, [pathname]);

	const headerClasses = classNames(`Header fixed top-0 left-0 w-screen h-13`, {
		"bg-light text-dark": headerTheme === "light",
		"bg-transparent text-light": headerTheme === "dark",
	});

	return (
		<HeaderContext.Provider value={{ headerTheme }}>
			<header className={headerClasses} style={{ zIndex: 99999 }}>
				<ResponsiveAppBar
					headerTheme={headerTheme}
					toggleTransitioning={toggleTransitioning}
					dropdownActive={dropdownActive}
					color={color}
				/>
			</header>
		</HeaderContext.Provider>
	);
}

export default Header;
