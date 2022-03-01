import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { navigation } from "../../data/data";
import { Container } from "../index";
import Contact from "./Contact";
import NavList from "./NavList";
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
			data-scroll
			data-scroll-section
			className='Footer'
			location={location.pathname}
			data-scroll
			data-scroll-speed={-8}
		>
			<Container centerInner flexDirection='column' height='100%'>
				{layout === "contact" && <Contact />}
				{/* {layout === "project" && (
					<Project footerRef={footerRef} title={data && data.title} />
				)} */}

				<NavList links={navLinks} />
			</Container>
		</StyledFooter>
	);
}
