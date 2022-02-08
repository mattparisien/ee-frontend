import React from "react";
import { ThemeConsumer } from "styled-components";
import { Section, Container, Heading } from "../../../index";
import Steps from "../components/Steps";
import { useTheme } from "styled-components";
import Scene from "../../../Engine/Scene";
function How() {
	const theme = useTheme();

	return (
		<Section classes={"section-how"} bg={"light"}>
			<Steps />
		</Section>
	);
}

export default How;
