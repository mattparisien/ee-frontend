import React from "react";
import { Section, Container } from "../../../index";
import Steps from "../components/Steps";

function How() {
	return (
		<Section classes={"section-how"} bg={"light"}>
			<Container>
				<Steps />
			</Container>
		</Section>
	);
}

export default How;
