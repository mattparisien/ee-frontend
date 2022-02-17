import React, { useRef, useEffect } from "react";

import { Container, Section } from "../../../index";
import gsap from "gsap";
import useSplit from "../../../../helpers/hooks/useSplit";
import { StyledHero } from "./styles";
import { DrawnLogo } from "../../../index";

function Hero(props) {
	const wordRefs = useRef([]);
	const [isSplit, chars, splitCount, words] = useSplit(wordRefs.current, {
		type: "chars",
		charsClass: "char",
	});

	const addToRefs = el => {
		if (el && !wordRefs.current.includes(el)) {
			wordRefs.current.push(el);
		}
	};

	const introAnimation = useRef(gsap.timeline());

	useEffect(() => {
		if (isSplit && wordRefs.current.length > 2) {
			introAnimation.current
				.fromTo(
					chars,
					{
						y: "100%",
					},
					{
						y: "0",
						duration: 3,
						ease: "expo.inOut",
						stagger: 0.05,
					}
				)
				.to(
					wordRefs.current[0],
					{
						left: 0,
						xPercent: 0,
						duration: 2,
						ease: "expo.inOut",
					},
					2.3
				)
				.to(
					wordRefs.current[1],
					{
						right: 0,
						xPercent: 0,
						duration: 2,
						ease: "expo.inOut",
					},
					2.6
				)
				.to(
					wordRefs.current[2],
					{
						left: 0,
						duration: 2,
						xPercent: 0,
						ease: "expo.inOut",
					},
					2.9
				);
		}
	}, [isSplit, wordRefs]);
	return (
		<Section
			classes={"section-hero"}
			sectionRef={props.sectionRefs}
			bg={"light"}
		>
			<StyledHero className='hero-wrapper'>
				<Container padding='regular' height='100vh'>
					<div className='hero-content'>
						<div className='hero-content__inner'>
							<DrawnLogo width='400px' />
							<div className='hero-word hero-word-social' ref={addToRefs}>
								Social
							</div>
							<div className='hero-word hero-word-impact' ref={addToRefs}>
								Impact
							</div>
							<div className='hero-word hero-word-agency' ref={addToRefs}>
								Agency
							</div>
						</div>
					</div>
				</Container>
			</StyledHero>
		</Section>
	);
}

export default Hero;
