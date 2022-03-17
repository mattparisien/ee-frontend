import gsap from "gsap";
import { useRef, useState } from "react";

import { navigation } from "../../data/data";
// import { StyledFooter } from "./styles";
import ContainerFluid from "../Containers/ContainerFluid";
import { DrawnLogo } from "../Vector/Svg";
import Link from "../Link/Link";

export default function Footer(props) {
	const footerRef = useRef(null);
	const { location } = props;

	// useEffect(() => {
	// 	setLayout(location.includes("projects/") ? "project" : "contact");
	// }, [location, data]);

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
				</div>
				{/* {layout === "contact" && <Contact />} */}
				{/* {layout === "project" && (
					<Project footerRef={footerRef} title={data && data.title} />
				)} */}
				<div className='c-footer_bottom'>
					<nav className='c-footer_nav'>
						<ul>
							{props.navItems.map((item, i) => {
								return (
									<li key={i}>
										<Link href={item.url} isRouterLink>
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
				{/* <NavList links={navLinks} /> */}
			</ContainerFluid>
		</footer>
	);
}
