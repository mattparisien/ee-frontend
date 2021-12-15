import { useState, useEffect, useRef } from "react";
import { StyledFooter } from "../styles/StyledFooter.styled";
import Container from "../Container";
import Heading from "../Heading";
import Contact from "./Contact";
import Project from "./Project";
import Section from "../Section";

export default function Footer(props) {
	const footerRef = useRef(null);
	const { location, addToRefs } = props;
	const [layout, setLayout] = useState("contact");

	useEffect(() => {
		setLayout(location.includes("projects/") ? "project" : "contact");
	}, [location]);

	return (
		<StyledFooter $layout={layout} ref={footerRef}>
			<Container height={"100%"}>
				{layout === "contact" && <Contact />}
				{layout === "project" && <Project footerRef={footerRef}/>}
			</Container>
		</StyledFooter>
	);
}
