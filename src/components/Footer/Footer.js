import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../data/data";
import SectionLayout from "../Containers/SectionLayout";
import Contact from "./Contact";
import { StyledFooter } from "./styles";

export default function Footer(props) {
	const footerRef = useRef(null);
	const { location, addToRefs } = props;
	const [layout, setLayout] = useState("contact");
	const q = gsap.utils.selector(footerRef.current);
	const lines = q(".line");

	const nextPostId = parseInt(location.split("projects/")[1]) + 1;

	// useEffect(() => {
	// 	setLayout(location.includes("projects/") ? "project" : "contact");
	// }, [location, data]);

	const navLinks = navigation.map(listItem => (
		<li key={listItem.id}>
			<Link to={listItem.path}>{listItem.title}</Link>
		</li>
	));

	return (
		<StyledFooter
			$layout={layout}
			ref={footerRef}
			className='Footer'
			location={location.pathname}
		>
			<SectionLayout height='60vh' bg='dark'>
				{layout === "contact" && <Contact />}
				{/* {layout === "project" && (
					<Project footerRef={footerRef} title={data && data.title} />
				)} */}

				{/* <NavList links={navLinks} /> */}
			</SectionLayout>
		</StyledFooter>
	);
}
