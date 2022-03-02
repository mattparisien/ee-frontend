import { Box } from "@mui/material";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useResize from "../../../../../helpers/hooks/useResize";
import useSplit from "../../../../../helpers/hooks/useSplit";
import { SiteWideControls } from "../../../../Containers/Temp/Authenticated";
// import { Paragraph } from "../../../../index";
import { device } from "../../../../styles/device";
import { animateIntro, calculateWordOffsets } from "./helpers/helpers";
import { DrawnLogo } from "../../../../index";
import { Typography } from "@mui/material";

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

	.hero-brand-line {
		position: relative;
		&__logo {
			width: 5rem;
			position: absolute;
			right: -7vw;
			top: 50%;
			transform: translateY(-50%);
		}
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
			{isParagraphRevealed && (
				<Box className='hero-brand-line'>
					<Typography variant='body2' animationDelay={wordEntryDuration + 1}>
						We are the Eyes & Ears agency.
					</Typography>
					<Box className='hero-brand-line__logo'>
						<DrawnLogo />
					</Box>
				</Box>
			)}
			{/* <HeroHeading ref={headingRef} data-scroll data-scroll-speed={3}>Impact</HeroHeading> */}
		</StyledHero>
	);
}

export default Hero;
