import React, { useRef, useEffect } from "react";
import { Section, Container, Line, Paragraph } from "../index";
import useFetch from "../../helpers/hooks/useFetch";
import { Trumpet } from "../index";
import Spinner from "../Vector/Spinner";

function About(props) {
	const [data, error, loading] = useFetch("/api/about", {
		requestType: "textContent",
	});

	useEffect(() => {
		console.log(data && data);
	}, [loading]);

	const content = () => (
		<>
			<Paragraph size={"medium"} indent indentTitle={"Agency"} fadeUp={"lines"}>
				{data.attributes.Body.split("split")[0]}
			</Paragraph>
			<Line color='white' marginTop />
			<Trumpet width={"30vw"} color={"light"} position={"absolute"} />
			<Paragraph size={"small"} indent indentTitle={"About"}>
				{data && data.attributes.Body.split("split")[1]}
			</Paragraph>
		</>
	);

	return (
		<Section classes={"section-who"} bg={"dark"}>
			<Container bg={"dark"}>
				{loading && <Spinner />}
				{data && content()}
			</Container>
		</Section>
	);
}

export default About;
