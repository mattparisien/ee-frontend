import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import FOOTER from "../../api/graphql/queries/static/GetFooter";
import ContainerFluid from "../Containers/ContainerFluid";
import FooterBottom from "./FooterBottom";
import FooterCenter from "./FooterCenter";
import "./Footer.css";

export default function Footer(props) {
	const [info, setInfo] = useState(null);
	const { loading, error, data } = useQuery(FOOTER);

	useEffect(() => {
		if (data && !loading) {
			setInfo({
				heading: data.footer.data.attributes.Heading,
				email: data.footer.data.attributes.Email,
			});
		}
	}, [data, loading]);

	console.log(info)

	return (
		<footer className='Footer h-[600px] w-screen bg-dark text-light'>
			<ContainerFluid classes='h-full'>
				<div className='content-wrapper h-full flex flex-col justify-between'>
					<div className='spacer h-28'></div>
					<FooterCenter
						email={info && info.email}
						heading={info && info.heading}
					/>
					<FooterBottom />
				</div>
			</ContainerFluid>
		</footer>
	);
}
