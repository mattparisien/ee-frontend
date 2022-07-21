import classNames from "classnames";
import { useRouter } from "next/router";
import { useContext } from "react";
import { GlobalContext } from "../../lib/context";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ContactModal from "../ContactModal/ContactModal";

function Layout({ children }) {
	const { appState } = useContext(GlobalContext);
	const dropdownActive = appState.dropdownActive;
	const { pathname } = useRouter();

	const showHeader = pathname === "/maintenance" ? false : true;

	const fadeClasses = classNames(
		"FadeWrapper transition transition-opacity ease duration-300 delay-100",
		{
			"opacity-0": dropdownActive,
		}
	);

	const layoutClasses = classNames(
		"Layout after:fixed after:top-0 after:left-0 after:w-full after:h-full after:z-50 after:bg-light after:transition after:duration-[500ms] after:ease-[cubic-bezier(.645,.045,.355,1)] after:origin-top bg-cream mt-[4rem]",
		{
			"after:scale-y-0": appState.isIntroComplete,
		}
	);

	return (
		<>
			<ContactModal />
			<div className='scroll-wrapper' data-scroll-container>
				<div className={layoutClasses}>
					{showHeader && <Header />}
					<DropdownMenu />
					<div className={fadeClasses}>
						<main
							className={`main mb-[600px] pb-2 md:pb-20 z-[99] sticky pt-[${
								pathname === "/" ? "0" : "69px"
							}] bg-light relative after:absolute after:top-full after:left-0 after:bg-light after:rounded-b-xl after:w-full after:h-10`}
						>
							{children}
						</main>
						{showHeader && <Footer />}
					</div>
				</div>
			</div>
		</>
	);
}

export default Layout;
