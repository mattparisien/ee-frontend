import classNames from "classnames";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../lib/context";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RouteTransition from "../Transition/RouteTransition";

function Layout({ children }) {
	const { appState } = useContext(GlobalContext);
	const dropdownActive = appState.dropdownActive;
	const { pathname } = useRouter();

	const fadeClasses = classNames(
		"FadeWrapper transition transition-opacity ease duration-300 delay-100",
		{
			"opacity-0": dropdownActive,
		}
	);

	const layoutClasses = classNames(
		"Layout after:fixed after:top-0 after:left-0 after:w-full after:h-full after:z-50 after:bg-light after:transition after:duration-[500ms] after:ease-[cubic-bezier(.645,.045,.355,1)] after:origin-top bg-cream mt-[100px]",
		{
			"after:scale-y-0": appState.isIntroComplete,
		}
	);

	return (
		<div className='scroll-wrapper' data-scroll-container>
			<div className={layoutClasses}>
				<Header />
				<DropdownMenu />
				<div className={fadeClasses}>
					<main
						className={`main pt-[${pathname === "/" ? "0" : "69px"}] bg-light`}
					>
						{children}
					</main>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Layout;
