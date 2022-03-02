import gsap from "gsap";
import React, { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import useSplit from "../../../../../helpers/hooks/useSplit";
import { DrawnLogo } from "../../../../index";
import ContainerFluid from "../../../../Containers/ContainerFluid";
import { device } from "../../../../styles/device";
import { calculateWordOffsets, animateIntro } from "./helpers/helpers";
import useResize from "../../../../../helpers/hooks/useResize";
import { Paragraph } from "../../../../index";
import SplitText from "gsap/SplitText";
import { SiteWideControls } from "../../../../Containers/Temp/Authenticated";

const HeroHeading = styled.h1`
	font-size: 21vw !important;
	letter-spacing: -0.5vw;
`;

export const StyledHero = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	.line {
		white-space: nowrap;
		overflow: hidden;
	}

	& h1 {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.rotate-heading-wrapper__social {
		position: absolute;
		top: 0;
		left: 0;

		.hero-heading-char {
			transform: translateX(-110vw);
		}
	}

	.rotate-heading-wrapper__impact {
		position: absolute;
		bottom: 0;
		right: 0;

		.hero-heading-char {
			transform: translateX(110vw);
		}
	}

	.hero-content {
		height: 800px;
		max-height: 800px;
		font-family: Kobe Bold;

		width: 100%;

		margin: 0 auto;

		&__inner {
			width: 100%;
			height: 100%;

			.drawnLogo-wrapper-overflowHidden {
				top: 50%;
				left: 50%;
				width: 12vw;
				height: 18vw;
				max-width: 300px;

				position: absolute;
				transform: translate(-50%, -50%);

				.drawnLogo__inner-relative {
					position: relative;
					height: 100%;
					width: 100%;

					.drawnLogo__overlay {
						position: absolute;
						top: 0;
						left: 0;
						width: 150%;
						height: 100%;
						background-color: ${({ theme }) => theme.colors.light};
						z-index: 99;
					}
				}

				.drawnLogo__inner-absolute {
					position: absolute;
					top: 0;
					height: 100%;
					width: 100%;
				}

				.drawnLogo {
					width: 100%;
				}
			}

			.hero-word {
				letter-spacing: -0.6vw;
				line-height: 20vw;
				font-size: 10vw;
				position: absolute;
				overflow: hidden;
			}

			@media ${device.desktop} {
				.drawnLogo-wrapper-overflowHidden {
					width: 300px;
					height: 420px;
				}

				.hero-word {
					font-size: 200px;
					line-height: 200px;
					letter-spacing: -9px;
				}
			}

			.hero-word-social {
				left: ${({ defaultOffsets }) =>
					defaultOffsets[0] && defaultOffsets[0].left}px;
				top: 0;
			}

			.hero-word-impact {
				right: ${({ defaultOffsets }) =>
					defaultOffsets[1] && defaultOffsets[1].left}px;
				top: 50%;
				transform: translateY(-50%);
			}

			.hero-word-agency {
				left: ${({ defaultOffsets }) =>
					defaultOffsets[2] && defaultOffsets[2].left}px;
				bottom: 0;
			}
		}
	}

	#hero-amperstand {
		overflow: hidden;
	}
`;

function Hero(props) {
	const wordRefs = useRef([]);
	const [isSplit, chars, splitCount, words] = useSplit(wordRefs.current, {
		type: "chars",
		charsClass: "char",
	});

	const { toggleScrollLock } = useContext(SiteWideControls);

	const [split, setSplit] = useState(null);
	const [isHeadingSplit, setHeadingsplit] = useState(null);
	const headingRefs = useRef([]);
	headingRefs.current = [];
	const [defaultOffsets, setDefaultOffsets] = useState({});
	const [windowWidth] = useResize();
	const containerRef = useRef(null);
	const logoRef = useRef(null);
	const overlayRef = useRef(null);
	const line1Timeline = useRef(gsap.timeline({ delay: 0.5 }));
	const line2Timeline = useRef(gsap.timeline({ delay: 0.5 }));
	const wordEntryDuration = 2;

	const addToRefs = el => {
		if (el && !wordRefs.current.includes(el)) {
			wordRefs.current.push(el);
		}
	};

	const addToHeadingRefs = el => {
		if (el && !headingRefs.current.includes(el)) {
			headingRefs.current.push(el);
		}
	};

	useEffect(() => {
		if (headingRefs.current && !isHeadingSplit) {
			const mySplitText = new SplitText(headingRefs.current, {
				type: "lines, chars, words",
				charsClass: "hero-heading-char",
				linesClass: "line",
				wordClass: "word",
			});

			setHeadingsplit(true);
		}

		if (isHeadingSplit) {
			const charsLine1 = $(headingRefs.current[0]).find(".hero-heading-char");
			const charsLine2 = $(headingRefs.current[1]).find(".hero-heading-char");

			line1Timeline.current
				.to(charsLine1, {
					x: 0,
					duration: wordEntryDuration,
					stagger: -0.1,
					ease: "expo.inOut",
				})
				.to(charsLine1, {
					y: "-100%",
					duration: wordEntryDuration,
					stagger: -0.1,
					ease: "expo.inOut",
				});
			line2Timeline.current
				.to(charsLine2, {
					x: 0,
					duration: wordEntryDuration,
					stagger: 0.1,
					ease: "expo.inOut",
				})
				.to(charsLine2, {
					y: "100%",
					duration: wordEntryDuration,
					stagger: -0.1,
					ease: "expo.inOut",
					onComplete: () => {
						toggleScrollLock()
					}
				});
		}
	}, [headingRefs, isHeadingSplit]);

	const introAnimation = useRef(gsap.timeline());

	useEffect(() => {
		if (wordRefs.current.length > 2 && containerRef.current) {
			calculateWordOffsets(containerRef, wordRefs, setDefaultOffsets);
		}

		if (isSplit && wordRefs.current.length > 2 && logoRef.current) {
			animateIntro(introAnimation, wordRefs, chars, logoRef, overlayRef);
		}
	}, [isSplit, wordRefs, windowWidth]);

	return (
		<StyledHero className='hero-wrapper' defaultOffsets={defaultOffsets}>
			{/* <div className='hero-content'>
				<div className='hero-content__inner' ref={containerRef}>
					<div className='drawnLogo-wrapper-overflowHidden'>
						<div className='drawnLogo__inner-relative'>
							<div className='drawnLogo__overlay' ref={overlayRef}></div>
							<div className='drawnLogo__inner-absolute' ref={logoRef}>
								<DrawnLogo width='400px' />
							</div>
						</div>
					</div>

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
			</div> */}
			<div className='rotate-heading-wrapper__social'>
				<HeroHeading ref={addToHeadingRefs} className='heading-social'>
					Social
				</HeroHeading>
			</div>
			<div className='rotate-heading-wrapper__impact'>
				<HeroHeading ref={addToHeadingRefs} className='heading-social'>
					Impact
				</HeroHeading>
			</div>
			<Paragraph animationDelay={wordEntryDuration + 1}>
				We are the Eyes & Ears agency.
			</Paragraph>{" "}
			<br></br>
			{/* <HeroHeading ref={headingRef} data-scroll data-scroll-speed={3}>Impact</HeroHeading> */}
		</StyledHero>
	);
}

export default Hero;
