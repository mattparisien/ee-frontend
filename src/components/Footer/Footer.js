import ContainerFluid from "../Containers/ContainerFluid";
import "./Footer.module.css";
import FooterBottom from "./FooterBottom";
import FooterCenter from "./FooterCenter";
import useGlobalStore from "../../store/globalStore";
import { useEffect } from "react";

export default function Footer(props) {
	const { footer, getFooter, socials } = useGlobalStore(state => ({
		footer: state.footer,
		getFooter: state.getFooter,
		socials: state.socials,
	}));

	useEffect(() => {
		getFooter();
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
