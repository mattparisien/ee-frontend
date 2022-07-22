import { useContext } from "react";
import { GlobalContext } from "../../lib/context";
import Container from "../Containers/ContainerFluid";
import Burger from "./Burger";
import HeaderLogo from "./HeaderLogo";
import NavDesktop from "./NavDesktop";

function ResponsiveAppBar({ dropdownActive, onBurgerClick, headerTheme }) {
	const { appState, setAppState } = useContext(GlobalContext);

	return (
		<Container>
			<div className='header-content flex items-center justify-between py-3'>
				<div className='header-spacer w-16 md:w-[327.28px]'></div>
				<HeaderLogo
					dropdownActive={dropdownActive}
					headerTheme={headerTheme}
					isIntroComplete={appState.isIntroComplete}
				/>
				<NavDesktop
					navItems={appState.navigation[0] && appState.navigation}
					isIntroComplete={appState.isIntroComplete}
					toggleModal={setAppState}
				/>

				<Burger
					headerTheme={headerTheme}
					onBurgerClick={onBurgerClick}
					dropdownActive={dropdownActive}
					isIntroComplete={appState.isIntroComplete}
				/>
			</div>
		</Container>
	);
}
export default ResponsiveAppBar;
