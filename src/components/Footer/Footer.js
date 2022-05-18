import ContainerFluid from "../Containers/ContainerFluid";
import "./Footer.module.css";
import FooterBottom from "./FooterBottom";
import FooterCenter from "./FooterCenter";
import useGlobalStore from "../../store/store";
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

	// const [info, setInfo] = useState(null);
	// const { loading, error, data } = useQuery(FOOTER);

	// useEffect(() => {
	// 	if (data && !loading) {
	// 		setInfo({
	// 			heading: data.footer.data.attributes.Heading,
	// 			email: data.footer.data.attributes.Email,
	// 		});
	// 	}
	// }, [data, loading]);

	// console.log(info)

	return (
		<footer className='Footer h-[600px] w-screen bg-dark text-light'>
			<ContainerFluid classes='h-full'>
				<div className='content-wrapper h-full flex flex-col justify-between'>
					<div className='spacer h-28'></div>
					<FooterCenter
						Heading={footer.Heading}
						email={footer.Email}

						// email={info && info.email}
						// heading={info && info.heading}
					/>
					{/* <FooterBottom /> */}
				</div>
			</ContainerFluid>
		</footer>
	);
}
