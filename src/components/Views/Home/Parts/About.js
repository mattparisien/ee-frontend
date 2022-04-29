import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";
import Container from "../../../Containers/ContainerFluid";
import Section from "../../../Containers/Section";
import Markdown from "../../../Markdown/Markdown";
import CircleSvg from "../../../Vector/Circle";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

function About({ aboutText }) {
	const matches = useMediaQuery("(max-width: 900px)");
	const { ref, inView, entry } = useInView({ threshold: 0.3 });
	const hasPassedViewport = useRef(false);
	const timeline = useRef(gsap.timeline());

	useEffect(() => {
		if (inView && !hasPassedViewport.current) {
			const circles = document.querySelectorAll(".circle-wrapper");

			gsap.to([...circles], {
				y: 0,
				ease: "power4.out",
				stagger: 0.1,
				duration: 2,
				onComplete: () => float(),
			});

			const float = () => {
				$([...circles])
					.find("svg")
					.each((i, circle) => {
						const dur = circle.dataset.duration;

						const tl = gsap.timeline();

						const animateCircle = () => {
							let isFirstRun = true;
							const circleBounds = circle.getBoundingClientRect();

							tl.to(circle, {
								y: -(circleBounds.top + circleBounds.height + 200),
								duration: dur,
								ease: "linear",
								onComplete: () => {
									tl.progress(0).play();
								},
							});
						};

						animateCircle();
					});
			};

			hasPassedViewport.current = true;
		}
	}, [inView]);

	useEffect(() => {
		const circles = [...document.querySelectorAll(".circle-wrapper")];
		const windowHeight = window.innerHeight;

		circles.forEach(circle => {
			circle.style.transform = `translateY(${windowHeight + 500}px)`;
		});
	}, []);

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

			// "&:nth-child(3)": {
			// 	right: "-5%",
			// 	width: "17vw",
			// 	top: "25%",
			// },
			// "&:nth-child(2)": {
			// 	left: "20%",
			// 	width: "50px",
			// 	top: "25%",
			// },
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
							className='o-about_content -fullHeight'
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
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
					</Container>
					<Box sx={circles}>
						<Box sx={{ position: "relative", width: "100%", height: "100%" }}>
							<CircleSvg data-duration='10' />
							<CircleSvg data-duration='10' />
							<CircleSvg data-duration='10' />
							<CircleSvg data-duration='10' />
							<CircleSvg data-duration='10' />
							<CircleSvg data-duration='10' />
						</Box>
					</Box>
				</Box>
			</Section>
		</>
	);
}

export default About;
