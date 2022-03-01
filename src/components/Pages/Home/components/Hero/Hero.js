import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useSplit from "../../../../../helpers/hooks/useSplit";
import {  DrawnLogo } from "../../../../index";
import ContainerFluid from "../../../../Containers/ContainerFluid";
import { device } from "../../../../styles/device";
import { calculateWordOffsets, animateIntro } from "./helpers/helpers";
import useResize from "../../../../../helpers/hooks/useResize";

export const StyledHero = styled.div`
	.hero-content {
		height: 800px;
		max-height: 800px;
		font-family: Kobe Bold;
		width: 100%;
		padding: inherit;
		margin: 0 auto;
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
				width: 20vw;
				height: 30vw;
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
				letter-spacing: -0.8vw;
				line-height: 20vw;
				font-size: 20vw;
				position: absolute;
				overflow: hidden;
			}

			@media ${device.laptop} {
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
	const [defaultOffsets, setDefaultOffsets] = useState({});
	const [windowWidth] = useResize();
	const containerRef = useRef(null);
	const logoRef = useRef(null);
	const overlayRef = useRef(null);

	const addToRefs = el => {
		if (el && !wordRefs.current.includes(el)) {
			wordRefs.current.push(el);
		}
	};

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
			<ContainerFluid padding='regular' height='100vh'>
				<div className='hero-content'>
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
				</div>
			</ContainerFluid>
		</StyledHero>
	);
}

export default Hero;
