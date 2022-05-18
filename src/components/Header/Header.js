import React, { useEffect, useState } from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import useGlobalStore from "../../store/globalStore";

function Header({ toggleTransitioning, color }) {
	const dropdownActive = useGlobalStore(state => state.dropdownActive);

	return (
		<header
			className={`Header fixed top-0 left-0 w-screen h-13 ${
				dropdownActive ? "bg-transparent" : "bg-light"
			}`}
			style={{ zIndex: 99999 }}
		>
			<ResponsiveAppBar
				toggleTransitioning={toggleTransitioning}
				menuActive={dropdownActive}
				color={color}
			/>
		</header>
	);
}

export default Header;
