import React from "react";
import { ThemeConsumer } from "styled-components";
import { Section, Container, Heading } from "../../../index";
import Steps from "../components/Steps";
import { useTheme } from "styled-components";
import Scene from "../../../Engine/Scene";
import HeadingSection from "../../../Containers/HeadingSection";
import { InstrumentPlayer } from "../../../Vector/Svg";

function How() {
	const theme = useTheme();

	return (
		<>
			<Container padding='regular' height='auto' hasPaddingBottom>
				<HeadingSection
					headingSize='large'
					color='dark'
					headingText={"How We Do It"}
					headingWeight='light'
					headingWidth='100%'
				/>
			</Container>
			<Steps />
		</>
	);
}

export default How;
