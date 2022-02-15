import React, { useRef, useEffect } from "react";

import { Container, Section } from "../../../index";
import gsap from "gsap";
import useSplit from "../../../../helpers/hooks/useSplit";
import { StyledHero } from "./styles";
import { DrawnLogo } from "../../../index";

function Hero(props) {
	const wordRefs = useRef([]);
	const [isSplit, chars, splitCount, words] = useSplit(wordRefs.current, {
		type: "words",
		wordsClass: "word",
	});

	const addToRefs = el => {
		if (el && !wordRefs.current.includes(el)) {
			wordRefs.current.push(el);
		}
	};

	const introAnimation = useRef(gsap.timeline());

	// useEffect(() => {
	// 	if (isSplit) {
	// 		introAnimation.current.fromTo(
	// 			words,
	// 			{
	// 				y: "-110%",
	// 				left: "50%",
	// 				x: "-50%"
	// 			},
	// 			{
	// 				duration: 1,
	// 				stagger: 0.3,
	// 				y: "0",
	// 				left: "50%",
	// 				x: "-50%",
	// 			}
	// 		);
	// 	}
	// }, [isSplit]);
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
