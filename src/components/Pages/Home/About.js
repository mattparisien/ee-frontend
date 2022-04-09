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
import { Box } from "@mui/material";

function About({ aboutText }) {
	const matches = useMediaQuery("(max-width: 900px)");

	return (
		<>
			<Section data-theme='dark' classes='o-about' noGutterTop>
				<ContainerFluid >
					<Box className='o-about_content' pt={matches ? 5 : 20} pb={matches ? 5 : 20}>
						<SplitLayout
							leftComponent={<SectionLeft text={aboutText} />}
							rightComponent={<SectionRight />}
							gap={5}
							wrap={matches ? "wrap" : "nowrap"}
						/>
					</Box>
				</ContainerFluid>
			</Section>
		</>
	);
}

function SectionLeft({ text }) {
	return (
		<Typography variant='h4' className="-splitLines">
			<Markdown children={text} />
		</Typography>
	);
}

function SectionRight({ matches }) {
	const megaphoneWrapper = theme => ({
		".c-megaphone": {
			width: "100%",
			transform: "scaleX(-100%) scale(1.6) rotate(-30deg)",
			[theme.breakpoints.down('md')]: {
				transform: "scaleX(-100%)scale(0.8)",
				height: "100%",
				"svg": {
					height: "100%"
				}
			}
		},
	});

	return (
		<Box
			display='flex'
			alignItems={"center"}
			justifyContent='center'
			height={matches ? "20vw" : "auto"}
			sx={megaphoneWrapper}
		>
			<Megaphone />
		</Box>
	);
}

export default About;
