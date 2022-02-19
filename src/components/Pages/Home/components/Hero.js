import React, { useRef, useEffect, useState } from "react";

import { Container, Section } from "../../../index";
import gsap from "gsap";
import useSplit from "../../../../helpers/hooks/useSplit";
import { DrawnLogo } from "../../../index";

import styled from "styled-components";
import { device } from "../../../styles/device";

export const StyledHero = styled.div`
	.hero-content {
		height: 60vw;
		max-height: 800px;
		font-family: Kobe Bold;
		width: 100%;
		padding: inherit;
		margin: 0 auto;
		font-size: 9vw;
		letter-spacing: -0.4vw;
		line-height: 10vw;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		&__inner {
			position: relative;
			width: 100%;
			height: 100%;

			.drawnLogo-wrapper-overflowHidden {
				top: 50%;
				left: 50%;
				width: 14vw;
				height: 20vw;

				position: absolute;
				transform: translate(-50%, -50%);
				overflow: hidden;

				.drawnLogo__inner-relative {
					position: relative;
					height: 100%;
					width: 100%;
				}

				.drawnLogo__inner-absolute {
					position: absolute;
					top: 0;
					height: 100%;
					width: 100%;
					right: -100%;
				}

				.drawnLogo {
					width: 100%;
				}
			}

			@media ${device.desktop} {
				.drawnLogo {
					width: 300px;
				}

				.hero-word {
					font-size: 200px;
				}
			}

			.hero-word {
				position: absolute;
				overflow: hidden;
			}

			.hero-word-social {
				left: ${({ defaultOffsets }) =>
					defaultOffsets[0] && defaultOffsets[0].left}px;
				top: ${({ defaultOffsets }) =>
					defaultOffsets[0] && defaultOffsets[0].top - 150}px;
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
				bottom: ${({ defaultOffsets }) =>
					defaultOffsets[2] && defaultOffsets[0].top - 150}px;
			}
		}
	}

	#hero-amperstand {
		overflow: hidden;

		.amperstand-inner {
			transform: translateY(100%);

			#amperstand {
				fill: ${({ theme }) => theme.colors.yellow};
				height: 30vw;
				max-height: 600px;
			}
		}
	}
`;

function Hero(props) {
	const wordRefs = useRef([]);
	const [isSplit, chars, splitCount, words] = useSplit(wordRefs.current, {
		type: "chars",
		charsClass: "char",
	});

	const containerRef = useRef(null);
	const logoRef = useRef(null);

	const addToRefs = el => {
		if (el && !wordRefs.current.includes(el)) {
			wordRefs.current.push(el);
		}
	};

	const [defaultOffsets, setDefaultOffsets] = useState({});

	const introAnimation = useRef(gsap.timeline());

	useEffect(() => {
		if (wordRefs.current.length > 2 && containerRef.current) {
			const containerWidth = containerRef.current.offsetWidth;

			const containerHeight = containerRef.current.offsetHeight;

			wordRefs.current.forEach((word, id) => {
				const wordWidth = word.offsetWidth;
				const wordHeight = word.offsetHeight;
				setDefaultOffsets(prev => ({
					...prev,
					[id]: {
						left: containerWidth / 2 - wordWidth / 2,
						top: containerHeight / 2 - wordHeight / 2,
					},
				}));
			});

			console.log(defaultOffsets);
		}

		if (isSplit && wordRefs.current.length > 2 && logoRef.current) {
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
						top: 0,
						duration: 2,
						ease: "expo.inOut",
					},
					3
				)
				.to(
					wordRefs.current[2],
					{
						bottom: 0,
						duration: 2,
						ease: "expo.inOut",
					},
					3
				)
				.to(
					wordRefs.current[0],
					{
						left: 0,
						duration: 2,
						ease: "expo.inOut",
					},
					3.4
				)
				.to(
					wordRefs.current[1],
					{
						right: 0,
						duration: 2,
						ease: "expo.inOut",
					},
					3.4
				)
				.to(
					wordRefs.current[2],
					{
						left: 0,
						duration: 2,
						ease: "expo.inOut",
					},
					3.4
				)
				.to(
					logoRef.current,
					{
						right: 0,
						duration: 1,
						ease: "expo.inOut",
					},
					3.9
				);
		}
	}, [isSplit, wordRefs]);
	return (
		<StyledHero className='hero-wrapper' defaultOffsets={defaultOffsets}>
			<Container padding='regular' height='100vh'>
				<div className='hero-content'>
					<div className='hero-content__inner' ref={containerRef}>
						<div className='drawnLogo-wrapper-overflowHidden'>
							<div className='drawnLogo__inner-relative'>
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
				</div>
			</Container>
		</StyledHero>
	);
}

export default Hero;
