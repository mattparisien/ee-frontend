import { useContext, useEffect } from "react";
import { GlobalContext } from "../../lib/context";
import { getFooter } from "../../lib/getFooter";
import ContainerFluid from "../Containers/ContainerFluid";
import "./Footer.module.css";
import FooterBottom from "./FooterBottom";
import FooterCenter from "./FooterCenter";

export default function Footer(props) {
	const { appState, setAppState } = useContext(GlobalContext);
	const footer = appState.footer;

	useEffect(() => {
		getFooter(setAppState);
	}, []);

	return (
		<footer className='Footer h-[600px] w-screen bg-dark text-light'>
			<ContainerFluid classes='h-full'>
				<div className='content-wrapper h-full flex flex-col justify-between'>
					<div className='spacer h-28'></div>
					<FooterCenter heading={footer.Heading} email={footer.Email} />
					<FooterBottom />
				</div>
			</ContainerFluid>
		</footer>
	);
}
