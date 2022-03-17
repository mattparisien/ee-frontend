import { useRef } from "react";
import { navigation } from "../../data/data";
// import { StyledFooter } from "./styles";
import ContainerFluid from "../Containers/ContainerFluid";
import Link from "../Link/Link";
import { DrawnLogo } from "../Vector/Svg";
import List from "../Lists/List";

export default function Footer(props) {
	const footerRef = useRef(null);
	const { location } = props;

	const navLinks = navigation.map(listItem => (
		<li key={listItem.id}>
			<Link to={listItem.path}>{listItem.title}</Link>
		</li>
	));

	return (
		<footer className='c-footer -bg-dark'>
			<ContainerFluid classes='-stretchY'>
				<div className='c-footer_content'>
					<h2 className='o-h2'>Hear to listen</h2>
					<DrawnLogo />
					<div className='c-footer_bottom'>
						<h4 className='o-h4 c-footer_brand'>The Eyes & Ears Agency</h4>
						<nav className='c-footer_nav'>
							<List items={props.navItems} color="light"/>
						</nav>
					</div>
				</div>
				{/* {layout === "contact" && <Contact />} */}
				{/* {layout === "project" && (
					<Project footerRef={footerRef} title={data && data.title} />
				)} */}

				{/* <NavList links={navLinks} /> */}
			</ContainerFluid>
		</footer>
	);
}
