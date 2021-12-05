import React, { Fragment, useRef, useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";
import useAxios from "../../helpers/hooks/useAxios";
import Grid from "../../Grid";
import Section from "../Section";
import Container from "../Container";
import Paragraph from "../Paragraph";
import Line from "../Line";
import { Eye, Ear } from "../Svg";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import useResize from "../../helpers/hooks/useResize";
import locomotiveScroll from "locomotive-scroll";

export default function Home(props) {
	const { data, error, loading } = useAxios("http://localhost:1337/api/home");

	const { windowResizing } = useResize();

	const rows = useRef([]);
	const eye = useRef(null);
	const ear = useRef(null);
	const scrollCta = useRef(null);
	const amperstand = useRef(null);
	const introAnimation = useRef(gsap.timeline());
	const scrollRef = useRef(null);

	useEffect(() => {
		const scroll = new locomotiveScroll({
			el: scrollRef.current,
			smooth: true,
		});
	}, []);



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
				amperstand.current,
				{
					y: 0,
					duration: 1.3,
					ease: "Expo.easeOut",
				},
				1.5
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
		<div ref={scrollRef} data-scroll-container>
			<Section classes={"section-hero -bg-light"}>
				<Container
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
								ref={amperstand}
								data-scroll
								data-scroll-speed='2'
							>
								<span>&</span>
								<span class='scroll-cta -position-absolute'>
									<span className='scroll-cta-inner' ref={scrollCta}>
										Scroll & Enjoy
									</span>
								</span>
							</div>
						</div>
						<Ear reference={ear} speed='2' />
					</div>
				</Container>
				{/* <Container
					classes={"section-hero__title-wrapper -position-absolute-center"}
				>
					<h1
						className='section-hero__title-wrapper__inner -w-100 -h-100 -position-relative -heading-bold'
						data-scroll
						data-scroll-speed='3'
					>
						{heroWords.map(word => {
							return (
								<span className='section-hero__title__part word-wrapper heroText -position-absolute'>
									<span
										className='word -fade-down'
										ref={el => (words.current = [...words.current, el])}
									>
										{word}
									</span>
								</span>
							);
						})}
					</h1>
				</Container>
				<div className='section-hero__image-wrapper -position-absolute'></div>
				<div className='section-hero__image-wrapper -position-absolute'></div> */}
			</Section>
			<Section classes={"section-who -bg-dark"}>
				<div className='object-container'>
					<Paragraph width={"100%"} medium indent>
						{error && error}
						{loading && "Loading..."}
						{data && data.data.attributes.missionHome}
					</Paragraph>
					<Line color='white' marginTop />
					<Paragraph small marginTop='50vw' width='40vw' right>
						{data && data.data.attributes.missionHome}
					</Paragraph>
				</div>
			</Section>
			<Section classes={"section-how -bg-light"}>
				<Container>
					<Grid />
				</Container>
			</Section>
			<Section classes={"section-work"}></Section>
		</div>
	);
}
