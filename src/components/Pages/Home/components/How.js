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
		<Section classes={"section-how"} bg={"light"}>
			<Container padding='regular' height='auto' hasMarginBottom hasMarginTop>
				<HeadingSection
					headingSize='large'
					color='dark'
					headingText={"Steps to better listening"}
					headingWeight='light'
					headingWidth='100%'
					headingWidth='60%'
					capitalize
					splitGraphic={<InstrumentPlayer />}
					splitGraphicOffset={"right"}
					height='50vw'
				/>
			</Container>
			<Steps />
		</Section>
	);
}

export default How;
