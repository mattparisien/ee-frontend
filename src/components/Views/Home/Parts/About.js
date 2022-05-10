import { Box, Typography, useMediaQuery } from "@mui/material";
import gsap from "gsap";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Container from "../../../Containers/ContainerFluid";
import Section from "../../../Containers/Section";
import Markdown from "../../../Markdown/Markdown";
import Megaphone from "../../../Vector/Megaphone";

function About({ aboutText }) {
	const matches = useMediaQuery("(max-width: 900px)");
	const { ref, inView, entry } = useInView({ threshold: 0.3 });
	const hasPassedViewport = useRef(false);
	const timeline = useRef(gsap.timeline());

	const circles = theme => ({
		position: "absolute",
		width: "100%",
		height: "100%",
		top: 0,
		left: 0,
		".circle-wrapper": {
			position: "absolute",
			width: "150px",
			fill: "#FFE633",
			mixBlendMode: "exclusion",

			"&:nth-child(1)": {
				left: "-10%",

				width: "40vw",
				top: "-10%",
			},
			"&:nth-child(2)": {
				left: "80%",

				width: "20vw",
				top: "18%",
			},
			"&:nth-child(3)": {
				left: "23%",

				width: "15vw",
				top: "50%",
			},
			"&:nth-child(4)": {
				left: "60%",

				width: "45vw",
				top: "70%",
			},
			"&:nth-child(5)": {
				left: "70%",

				width: "10vw",
				top: "-5%",
			},
			// "&:nth-child(4)": {
			// 	width: "30vw",
			// 	top: "-16%",
			// 	left: "-7%",
			// },
			// "&:nth-child(5)": {
			// 	width: "10vw",
			// 	top: "45%",
			// 	left: "60%",
			// },
			// "&:nth-child(6)": {
			// 	width: "3vw",
			// 	top: "45%",
			// 	right: 0,
			// },
		},
	});

	return (
		<>
			<Section
				sectionTheme='dark'
				classes='about-section -relative'
				noGutterTop
				sx={{ overflow: "hidden" }}
			>
				<Box
					sx={{ position: "relative", width: "100%", height: "100%" }}
					ref={ref}
				>
					<Container position='relative'>
						<Box
							className={`o-about_content`}
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								flexDirection: matches ? "column" : "row",
								height: matches ? "auto" : "100vh"
							}}
							pt={matches ? 5 : 20}
							pb={matches ? 5 : 20}
						>
							<Typography variant='h4' sx={{ width: matches ? "100%" : "50%" }}>
								<Markdown
									variantMap={{
										p: "h4",
									}}
								>
									{aboutText}
								</Markdown>
							</Typography>
							<Box
								sx={{ width: "50%", transform: "scaleX(-100%) rotate(-30deg)" }}
							>
								<Megaphone />
							</Box>
						</Box>
					</Container>
				</Box>
				<Box></Box>
			</Section>
		</>
	);
}

export default About;
