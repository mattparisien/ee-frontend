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
			<Container padding='regular' height='auto'>
				<Heading large color='dark'>
					Steps to better listening
				</Heading>
			</Container>
			<Steps />
		</Section>
	);
}

export default How;
