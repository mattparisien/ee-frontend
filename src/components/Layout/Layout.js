import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import useGlobalStore from "../../store/globalStore";
import classNames from "classnames";

function Layout({ children }) {
	const dropdownActive = useGlobalStore(state => state.dropdownActive);
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
					<main className={"main pt-[69px] bg-light"}>{children}</main>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Layout;
