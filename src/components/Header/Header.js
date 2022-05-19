import React, { useContext } from "react";
import { GlobalContext } from "../../lib/context";
import ResponsiveAppBar from "./ResponsiveAppBar";

function Header({ toggleTransitioning, color }) {
	const { appState } = useContext(GlobalContext);
	const dropdownActive = appState.dropdownActive;

	return (
		<header
		
			className={`Header fixed top-0 left-0 w-screen h-13 ${
				dropdownActive ? "bg-transparent" : "bg-light"
			}`}
			style={{ zIndex: 99999 }}
		>
			<ResponsiveAppBar
				toggleTransitioning={toggleTransitioning}
				dropdownActive={dropdownActive}
				color={color}
			/>
		</header>
	);
}

export default Header;
