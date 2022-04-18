import { Box, Typography, useMediaQuery } from "@mui/material";
import gsap from "gsap/dist/gsap";
import $ from "jquery";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ReactMarkdown from "react-markdown";
import ContainerFluid from "../../Containers/ContainerFluid";
import Section from "../../Containers/Section";
import CircleSvg from "../../Vector/Circle";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { ConstructionOutlined } from "@mui/icons-material";

function About({ aboutText }) {
	const matches = useMediaQuery("(max-width: 900px)");
	const scroll = useLocomotiveScroll();

	const { inView, ref, entry } = useInView({
		threshold: 0.3,
	});

	return (
		<>
			<Section
				data-theme='dark'
				classes='o-about -fullHeight -relative'
				noGutterTop
				ref={ref}
			>
				<ContainerFluid>
					<Box
						className='o-about_content'
						pt={matches ? 5 : 20}
						pb={matches ? 5 : 20}
					>
						<Typography variant='h3'>
							<ReactMarkdown children={aboutText} />
						</Typography>
					</Box>
				</ContainerFluid>
				<Circles inView={inView} />
			</Section>
		</>
	);
}

function Circles({ inView }) {
	useEffect(() => {
		const circles = document.querySelectorAll(".o-about svg");
		const wrapper = $(".o-about");

		if (inView) {
			gsap.to(circles, {
				opacity: 1,
				duration: 3,
				ease: "power4.out",
				stagger: 0.2,
				y: 0,
			});
		}
	}, [inView]);

	useEffect(() => {
		const circles = document.querySelectorAll(".o-about svg");
		const wrapper = $(".o-about");
		const wrapperHeight = wrapper.height();

		circles.forEach(circle => {
			circle.style.transform = `translateY(${wrapperHeight + 300}px)`;
		});
	}, []);

	const wrap = {
		position: "absolute",
		overflow: "hidden",
		width: "100%",
		height: "100%",
	};

	const svgStyle = {
		mixBlendMode: "screen",
		// transform: "translateY(500%)",
		position: "absolute",
	};

	const smallStyle = {
		bottom: "50%",
		right: "20%",
	};

	const largeStyle = {
		top: "-9%",
		left: "-6%",
	};

	const mediumStyle = {
		top: "70%",
		left: "20%",
	};

	const tinyStyle = {
		top: "70%",
		left: "20%",
	};

	const tinyTwoStyle = {
		top: "10%",
		left: "80%",
	};

	const circles = [
		{
			width: "400px",
			style: Object.assign({}, svgStyle, largeStyle),
		},
		{
			width: "150px",
			style: Object.assign({}, svgStyle, smallStyle),
		},
		{
			width: "250px",
			style: Object.assign({}, svgStyle, smallStyle),
		},
		{
			width: "80px",
			style: Object.assign({}, svgStyle, tinyStyle),
		},
		{
			width: "30px",
			style: Object.assign({}, svgStyle, tinyStyle, tinyTwoStyle),
		},
	];

	return (
		<Box sx={wrap}>
			<Box sx={{ width: "100%", height: "100%", position: "relative" }}>
				{circles.map((circle, i) => (
					<CircleSvg key={i} style={circle.style} width={circle.width} />
				))}
			</Box>
		</Box>
	);
}

export default About;
