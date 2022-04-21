import { Box, Typography, useMediaQuery } from "@mui/material";
import gsap from "gsap/dist/gsap";
import $ from "jquery";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import ReactMarkdown from "react-markdown";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Markdown from "../../Markdown/Markdown";

function About({ aboutText }) {
	const matches = useMediaQuery("(max-width: 900px)");

	return (
		<>
			<Section sectionTheme='dark' className='about-section' noGutterTop>
				<ContainerFluid>
					<Box
						className='o-about_content'
						pt={matches ? 5 : 20}
						pb={matches ? 5 : 20}
					>
						<Typography variant='h3'>
							<Markdown
								variantMap={{
									p: "h3",
								}}
							>
								{aboutText}
							</Markdown>
						</Typography>
					</Box>
				</ContainerFluid>
			</Section>
		</>
	);
}

export default About;
