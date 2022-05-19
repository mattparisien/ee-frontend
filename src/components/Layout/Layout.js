import classNames from "classnames";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LoadingScreen from "../Loading/LoadingScreen";
import { GlobalContext } from "../../lib/context";

function Layout({ children }) {
	const { appState} = useContext(GlobalContext);
	const dropdownActive = appState.dropdownActive;

	const fadeClasses = classNames(
		"FadeWrapper transition transition-opacity ease duration-300 delay-100",
		{
			"opacity-0": dropdownActive,
		}
	);

	const router = useRouter();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handleStart = url => {
			url !== router.pathname ? setLoading(true) : setLoading(false);
		};
		const handleComplete = url => setLoading(false);

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", handleComplete);
		router.events.on("routeChangeError", handleComplete);
	}, []);

	return (
		<div className='scroll-wrapper' data-scroll-container>
			<div className='Layout'>
				<Header />
				<DropdownMenu />
				<div className={fadeClasses}>
					<main className={"main pt-[69px] bg-light"}>{children}</main>
					<Footer />
					<LoadingScreen isActive={loading} />
				</div>
			</div>
		</div>
	);
}

export default Layout;
