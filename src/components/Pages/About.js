import React, { useRef, useEffect } from "react";
import { Section, Container, Line, Paragraph } from "../index";

import { Trumpet } from "../index";

function About(props) {
	const { data } = props;

	return (
		<Section classes={"section-who"} bg={"dark"}>
			<Container bg={"dark"}>
				<Paragraph
					size={"medium"}
					indent
					indentTitle={"Agency"}
					fadeUp={"lines"}
				>
					{data.length && data[0].attributes.Body.split("split")[0]}
				</Paragraph>
				<Line color='white' marginTop />
				<Trumpet width={"30vw"} color={"light"} position={"absolute"} />
				<Paragraph size={"small"} indent indentTitle={"About"}>
					{data.length && data[0].attributes.Body.split("split")[1]}
				</Paragraph>
			</Container>
		</Section>
	);
}

export default About;
