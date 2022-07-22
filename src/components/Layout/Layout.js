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

	console.log(pathname);

	const showHeader = pathname === "/maintenance" ? false : true;

	const fadeClasses = classNames(
		"FadeWrapper transition transition-opacity ease duration-300 delay-100",
		{
			"opacity-0": dropdownActive,
		}
	);

	const revealerClasses =
		"after:fixed after:top-0 after:left-0 after:w-full after:h-full after:z-50 after:bg-light after:transition after:duration-[500ms] after:ease-[cubic-bezier(.645,.045,.355,1)] after:origin-top";

	const layoutClasses = classNames("Layout bg-light", {
		"after:scale-y-0": appState.isIntroComplete,
		[revealerClasses]: pathname !== "/maintenance",
		"pt-[4rem]": pathname !== "/contact",
		"flex items-center justify-center": pathname === "/maintenance",
	});

	const mainClasses = `main bg-light mb-[600px] z-[2] sticky pt-[${
		pathname === "/" || pathname === "/maintenance" ? "0" : "69px"
	}] bg-light relative after:absolute after:top-full after:left-0 ${
		pathname.includes("/projects/")
			? "after:bg-yellow-custom"
			: pathname === "/contact"
			? "after:bg-dark shadow-xl"
			: "after:bg-light pb-2 md:pb-20"
	} after:rounded-b-3xl after:w-full after:h-10`;

	return (
		<>
			{/* <ContactModal /> */}
			<div className='scroll-wrapper' data-scroll-container>
				<div className={layoutClasses}>
					{showHeader && <Header />}
					<DropdownMenu />
					<div className={fadeClasses}>
						<main
							className={
								pathname !== "/maintenance"
									? mainClasses
									: "main h-screen flex items-center justify-center bg-dark text-light w-screen"
							}
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
