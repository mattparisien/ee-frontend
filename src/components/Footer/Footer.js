import { useContext, useEffect } from "react";
import { GlobalContext } from "../../lib/context";
import { getFooter } from "../../lib/getFooter";
import ContainerFluid from "../Containers/ContainerFluid";
import "./Footer.module.css";
import FooterBottom from "./FooterBottom";
import FooterCenter from "./FooterCenter";
import classNames from "classnames";
import { useRouter } from "next/router";

export default function Footer(props) {
	const { pathname } = useRouter();
	const { appState, setAppState } = useContext(GlobalContext);
	const footer = appState.footer;

	const footerClasses = classNames(
		"Footer h-[600px] fixed bottom-0 left-0 w-screen",
		{
			"bg-dark text-light": pathname !== "/contact",
			"bg-light text-dark": pathname === "/contact",
		}
	);

	useEffect(() => {
		getFooter(setAppState);
	}, []);

	return (
		<footer className={footerClasses}>
			<ContainerFluid classes='h-full'>
				<div className='content-wrapper h-full flex flex-col justify-between'>
					<div className='spacer h-28'></div>
					<FooterCenter heading={footer.Heading} email={footer.Email} pathname={pathname}/>
					<FooterBottom />
				</div>
			</ContainerFluid>
		</footer>
	);
}
