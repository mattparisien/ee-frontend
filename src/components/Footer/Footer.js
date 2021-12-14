import { useState, useEffect } from "react";
import { StyledFooter } from "../styles/StyledFooter.styled";
import Container from "../Container";
import Heading from "../Heading";
import Contact from "./Contact";
import Project from "./Project";
import Section from "../Section";

export default function Footer(props) {
	const { location, addToRefs } = props;
	const [layout, setLayout] = useState("contact");

	useEffect(() => {
		setLayout(location.includes("projects/") ? "project" : "contact");
	}, [location]);

	return (
		<StyledFooter $layout={layout}>
			<Container>
				{layout === "contact" && <Contact />}
				{layout === "project" && <Project />}
			</Container>
		</StyledFooter>
	);
}
