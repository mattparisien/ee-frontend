import React from "react";
import ReactMarkdown from "react-markdown";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Megaphone from "../../Vector/Megaphone";
import Reveal from "react-reveal";
import Vibrations from "../../Vector/Vibrations";
import SplitLayout from "../../Layouts/SplitLayout";
import { Container, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Markdown from "../../Markdown/Markdown";

function About({ aboutText }) {
	const matches = useMediaQuery("(max-width: 1000px)");

	return (
		<>
			<Section data-theme='dark' classes='o-about -padding-lg'>
				<ContainerFluid>
					<div className='o-about_content'>
						<SplitLayout
							leftComponent={<SectionLeft text={aboutText} />}
							rightComponent={<SectionRight />}
							gap={5}
							wrap={matches ? "wrap" : "nowrap"}
						/>
					</div>
				</ContainerFluid>
			</Section>
		</>
	);
}

function SectionLeft({ text }) {
	return (
		<Typography variant='h4'>
			<Markdown children={text} />
		</Typography>
	);
}

function SectionRight({ text }) {
	return <Megaphone />;
}

export default About;
