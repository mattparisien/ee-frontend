import classNames from "classnames";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../lib/context";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RouteTransition from "../Transition/RouteTransition";

function Layout({ children }) {
	const { appState } = useContext(GlobalContext);
	const dropdownActive = appState.dropdownActive;

	const fadeClasses = classNames(
		"FadeWrapper transition transition-opacity ease duration-300 delay-100",
		{
			"opacity-0": dropdownActive,
		}
	);

	return (
		<div className='scroll-wrapper' data-scroll-container>
			<div className='Layout'>
				<Header />
				<DropdownMenu />
				<div className={fadeClasses}>
					<main className={"main pt-[69px] bg-light"}>
						<RouteTransition>{children}</RouteTransition>
					</main>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Layout;
