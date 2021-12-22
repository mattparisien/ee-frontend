import React, { useRef, useEffect } from "react";

import { Container, Section, Eye, Ear } from "../../../index";
import $ from "jquery";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { StyledHero } from "./styles";

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
			.to(
				$(eye.current).find("path"),
				{
					drawSVG: "0%",
					duration: 1,
					ease: "expo.inout",
					duration: 1,
					stagger: 0.2,
				},
				0
			)
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
			.to(amperstand.current, {
				y: 0,
				ease: "expo.inOut",
				duration: 1.5,
			})
			.to(
				scrollCta.current,
				{
					y: 0,
					duration: 0.9,
					ease: "Expo.easeOut",
				},
				2
			);
	}, [eye, ear, amperstand]);
	return (
		<Section
			classes={"section-hero"}
			sectionRef={props.sectionRefs}
			bg={"light"}
		>
			<StyledHero className='hero-wrapper'>
				<Container bg={"light"} width='100%' height='100vh'>
					<div className='overflow-container -w-100 -h-100 -position-relative' 	data-scroll-speed='6'
							data-scroll>
						<Eye speed='2' eyeRef={eye} />
						<div
							className='-heading-bold -position-absolute-center'
							id='hero-amperstand'
						>
							<div
								className='amperstand-inner -position-relative'
								ref={amperstand}
							>
								<span>&</span>

								<span className='scroll-cta -position-absolute'>
									<span className='scroll-cta-inner'>Scroll & Enjoy</span>
								</span>
							</div>
						</div>
						<Ear speed='2' earRef={ear} />
					</div>
				</Container>

				<div className='section-hero__image-wrapper -position-absolute'></div>
				<div className='section-hero__image-wrapper -position-absolute'></div>
			</StyledHero>
		</Section>
	);
}

export default Hero;
