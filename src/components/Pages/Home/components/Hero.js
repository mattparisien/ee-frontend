import React, { useRef, useEffect } from "react";

import { Container, Section, Eye, Ear } from "../../../index";
import $ from "jquery";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";




function Hero(props) {

	
	const eye = useRef(null);
	const overlayRef = useRef(null);
	const amperstand = useRef(null);
	const scrollCta = useRef(null);
	const ear = useRef(null);
	const introAnimation = useRef(gsap.timeline());

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
				scrollCta.current,
				{
					y: 0,
					duration: 0.9,
					ease: "Expo.easeOut",
				},
				2
			);
	}, []);
	return (
		<Section
			classes={"section-hero"}
			sectionRef={props.sectionRefs}
			bg={"light"}
		>
			<Container bg={"light"} width='100%' height='100vh'>
				<div className='overflow-container -w-100 -h-100 -position-relative'>
					<Eye speed='2' />
					<div
						className='-heading-bold -position-absolute-center'
						id='hero-amperstand'
					>
						<div
							className='amperstand-inner -position-relative'
							data-scroll
							data-scroll-speed='2'
						>
							<div className='scaler'>
								<span>&</span>
							</div>

							<span className='scroll-cta -position-absolute'>
								<span className='scroll-cta-inner'>Scroll & Enjoy</span>
							</span>
						</div>
					</div>
					<Ear speed='2' />
				</div>
			</Container>

			<div className='section-hero__image-wrapper -position-absolute'></div>
			<div className='section-hero__image-wrapper -position-absolute'></div>
		</Section>
	);
}

export default Hero;
