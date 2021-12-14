import React, { Fragment, useRef, useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";
import useAxios from "../../helpers/hooks/useAxios";
import Grid from "../Grid";
import GridItem from "../GridItem";
import Section from "../Section";
import Container from "../Container";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Line from "../Line";
import Steps from "../Steps";
import { Eye, Ear, Trumpet } from "../Svg";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import useResize from "../../helpers/hooks/useResize";
import locomotiveScroll from "locomotive-scroll";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTheme } from "styled-components";
import useScroll from "../../helpers/hooks/useScrollDir";

function Home(props) {
	const { data, error, loading } = useAxios("/api/mission");

	const { windowResizing } = useResize();

	const { addToRefs } = props;

	const [isScrolling, scrollDirection] = useScroll();

	const rows = useRef([]);
	const eye = useRef(null);
	const ear = useRef(null);
	const scrollCta = useRef(null);
	const amperstand = useRef(null);
	const introAnimation = useRef(gsap.timeline());
	const overlayRef = useRef(null);
	const scrollRef = useRef(null);
	const stickySection = useRef(null);
	const scalerRef = useRef(null);

	const show = () => {
		return (
			<Section classes={"section-who"} bg={"dark"} addToRefs={addToRefs}>
				<Container bg={"dark"}>
					<Paragraph size={"medium"} indent>
						{loading && "Loading..."}
						{data && data.data.attributes.MissionOne}
					</Paragraph>
					<Line color='white' marginTop />
					<Trumpet width={"30vw"} color={"light"} position={"absolute"} />
					<Paragraph size={"small"} indent>
						{data && data.data.attributes.MissionTwo}
					</Paragraph>
				</Container>
			</Section>
		);
	};

	const theme = useTheme();

	useEffect(() => {
		gsap.registerPlugin(DrawSVGPlugin);

		introAnimation.current
			.to($(eye.current).find("path"), {
				drawSVG: "0%",
				duration: 1,
				ease: "expo.inout",
				duration: 1,
				stagger: 0.2,
			})
			.to(
				$(ear.current).find("path"),
				{
					drawSVG: "0%",
					duration: 1,
					ease: "expo.inout",
					duration: 1,
					stagger: 0.2,
				},
				0.3
			)
			.to(
				overlayRef.current,
				{
					x: "-100%",
					duration: 2.5,
					ease: "Expo.easeInOut",
				},
				1.4
			)
			.to(
				amperstand.current,
				{
					fontSize: "50vw",
					duration: 3,
					ease: "Expo.easeInOut",
				},
				2
			)
			.to(
				amperstand.current,
				{
					color: theme.colors.blue,
					duration: 0.3,
				},
				3
			)
			.to(
				amperstand.current,
				{
					color: theme.colors.red,
					duration: 0.3,
				},
				3.1
			)
			.to(
				amperstand.current,
				{
					color: theme.colors.green,
					duration: 0.3,
				},
				3.3
			)
			.to(
				amperstand.current,
				{
					color: theme.colors.yellow,
					duration: 0.3,
				},
				3.4
			)
			.to(
				scrollCta.current,
				{
					y: 0,
					duration: 0.9,
					ease: "Expo.easeOut",
				},
				2
			);
	});

	return (
		<>
			<div
				ref={scrollRef}
				data-scroll-container
				className='home-page page-wrap'
				ref={addToRefs}
			>
				<Section
					classes={"section-hero"}
					sectionRef={props.sectionRefs}
					stickyRef={stickySection}
					bg={"light"}
				>
					<Container
						bg={"light"}
						width='100%'
						height='100vh'
						classes={
							"-w-100 -h-100 -position-absolute-center -display-flex -align-items-center -justify-content-center"
						}
					>
						<div className='overflow-container -w-100 -h-100 -position-relative'>
							<Eye reference={eye} speed='2' />
							<div
								className='-heading-bold -position-absolute-center'
								id='hero-amperstand'
							>
								<div
									className='amperstand-inner -position-relative'
									data-scroll
									data-scroll-speed='2'
								>
									<div className='scaler' ref={scalerRef}>
										<span ref={amperstand}>&</span>
									</div>

									<span className='scroll-cta -position-absolute'>
										<span className='scroll-cta-inner' ref={scrollCta}>
											Scroll & Enjoy
										</span>
									</span>
								</div>
							</div>
							<Ear reference={ear} speed='2' />
						</div>
					</Container>

					<div className='section-hero__image-wrapper -position-absolute'></div>
					<div className='section-hero__image-wrapper -position-absolute'></div>
				</Section>

				{!error && show()}
				<Section classes={"section-how"} bg={"light"}>
					<Container>
						<Steps />
					</Container>
				</Section>
				<Section bg={"light"} classes={"section-work"}></Section>
			</div>
		</>
	);
}

export default Home;
