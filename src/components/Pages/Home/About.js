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
	const scroll = useLocomotiveScroll();

	useEffect(() => {
		const circles = document.querySelectorAll(".o-about .circle-wrap");
		const wrapper = $(".o-about");

		if (inView) {
			gsap.to(circles, {
				opacity: 1,
				duration: 3,
				ease: "power4.out",
				stagger: 0.2,
				y: "100%",
			});
		}
	}, [inView]);

	useEffect(() => {
		const circles = document.querySelectorAll(".o-about svg");
		const wrapper = $(".o-about");
		const wrapperHeight = wrapper.height();
		const scrollTop = $(window).scrollTop();

		if (scroll && scroll.scroll) {
			scroll.scroll.on("scroll", e => {
				circles.forEach(circle => {
					const speed = circle.dataset.scrollSpeed;

					const circleOffset = circle.getBoundingClientRect().top;
					circle.style.transform = `translateY(-${
						(e.scroll.y / wrapperHeight) * `${speed}00`
					}px)`;
				});
			});
		}
	}, [scroll]);

	const wrap = {
		position: "absolute",
		overflow: "hidden",
		width: "100%",
		height: "100%",
	};

	const svgStyle = {
		mixBlendMode: "screen",
		transform: "translateY(500%)",
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
			scrollSpeed: 2,
		},
		{
			width: "150px",
			style: Object.assign({}, svgStyle, smallStyle),
			scrollSpeed: 3,
		},
		{
			width: "250px",
			style: Object.assign({}, svgStyle, smallStyle),
			scrollSpeed: 5,
		},
		{
			width: "80px",
			style: Object.assign({}, svgStyle, tinyStyle),
			scrollSpeed: 2,
		},
		{
			width: "30px",
			style: Object.assign({}, svgStyle, tinyStyle, tinyTwoStyle),
			scrollSpeed: 1,
		},
	];

	return (
		<Box sx={wrap}>
			<Box sx={{ width: "100%", height: "100%", position: "relative" }}>
				{circles.map((circle, i) => (
					<Box className='circle-wrap' sx={circle.style}>
						<CircleSvg
							key={i}
							style={{ width: "100%", height: "100%" }}
							width={circle.width}
							data-scroll-speed={circle.scrollSpeed}
						/>
					</Box>
				))}
			</Box>
		</Box>
	);
}

export default About;
