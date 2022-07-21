import { useContext } from "react";
import { GlobalContext } from "../../lib/context";
import Container from "../Containers/ContainerFluid";
import Burger from "./Burger";
import HeaderLogo from "./HeaderLogo";
import NavDesktop from "./NavDesktop";

function ResponsiveAppBar({ dropdownActive, onBurgerClick, headerColor }) {
	const { appState } = useContext(GlobalContext);

	return (
		<Container>
			<div className='header-content flex items-center justify-between py-3'>
				<div className='header-spacer w-16 md:w-[195px]'></div>
				<HeaderLogo
					dropdownActive={dropdownActive}
					headerColor={headerColor}
					isIntroComplete={appState.isIntroComplete}
				/>
				<NavDesktop
					navItems={appState.navigation[0] && appState.navigation}
					isIntroComplete={appState.isIntroComplete}
				/>

				<Burger
					onBurgerClick={onBurgerClick}
					dropdownActive={dropdownActive}
					isIntroComplete={appState.isIntroComplete}
				/>
			</div>
		</Container>
	);
}
;
export default ResponsiveAppBar;
