import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";
import Container from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import Markdown from "../../Markdown/Markdown";
import CircleSvg from "../../Vector/Circle";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

function About({ aboutText }) {
	const matches = useMediaQuery("(max-width: 900px)");
	const { ref, inView, entry } = useInView({ threshold: 0.3 });
	const hasPassedViewport = useRef(false);

	useEffect(() => {
		if (inView && !hasPassedViewport.current) {
			const circles = document.querySelectorAll(".circle-wrapper");

			gsap.to([...circles], {
				y: 0,
				ease: "power4.out",
				stagger: 0.4,
				duration: 4,
				delay: 1
			});

			hasPassedViewport.current = true;
		}
	}, [inView]);

	useEffect(() => {
		const circles = [...document.querySelectorAll(".circle-wrapper")];
		const windowHeight = window.innerHeight;

		circles.forEach(circle => {
			circle.style.transform = `translateY(${windowHeight + 500}px)`
		})
	}, [])

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
			
			
			"&:nth-of-type(odd)": {
				mixBlendMode: "screen",
			},
			"&:nth-of-type(even)": {
				mixBlendMode: "exclusion",
				fill: theme.palette.primary.colorSet.green
			},

			"&:nth-child(3)": {
				right: "-5%",
				width: "17vw",
				top: "25%",
			},
			"&:nth-child(2)": {
				left: "20%",
				width: "50px",
				top: "25%",
			},
			"&:nth-child(1)": {
				left: "20%",
				width: "16vw",
				top: "80%",
			},
			"&:nth-child(4)": {
				width: "30vw",
				top: "-16%",
				left: "-7%",
			},
			"&:nth-child(5)": {
				width: "10vw",
				top: "45%",
				left: "60%",
			},
			"&:nth-child(6)": {
				width: "3vw",
				top: "45%",
				right: 0,
			},
		},
	});

	return (
		<>
			<Section
				sectionTheme='dark'
				className='about-section -relative'
				noGutterTop
			>
				<Box
					sx={{ position: "relative", width: "100%", height: "100%" }}
					ref={ref}
				>
					<Container position='relative'>
						<Box
							className='o-about_content -fullHeight'
							sx={{display: "flex", alignItems: "center", justifyContent: "center"}}
							pt={matches ? 5 : 20}
							pb={matches ? 5 : 20}
						>
							<Typography variant='h3' >
								<Markdown
									variantMap={{
										p: "h3",
									}}
								>
									{aboutText}
								</Markdown>
							</Typography>
						</Box>
					</Container>
					<Box sx={circles}>
						<Box sx={{ position: "relative", width: "100%", height: "100%" }}>
							<CircleSvg />
							<CircleSvg />
							<CircleSvg />
							<CircleSvg />
							<CircleSvg />
							<CircleSvg />
						</Box>
					</Box>
				</Box>
			</Section>
		</>
	);
}

export default About;
