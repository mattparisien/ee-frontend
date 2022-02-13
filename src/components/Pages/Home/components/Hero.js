import React, { useRef, useEffect } from "react";

import { Container, Section, Eye, Ear, Amperstand } from "../../../index";
import $ from "jquery";
import gsap from "gsap";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { StyledHero } from "./styles";
import { DrawnLogo } from "../../../index";

function Hero(props) {
	const eye = useRef(null);
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
				<Container>
					<div className='hero-content'>
						<div className='hero-content__inner'>
							<DrawnLogo width='400px' />
							<div className='word word-social'>Social</div>
							<div className='word word-impact'>Impact</div>
							<div className='word word-agency'>Agency</div>
						</div>
					</div>
				</Container>
			</StyledHero>
		</Section>
	);
}

export default Hero;
