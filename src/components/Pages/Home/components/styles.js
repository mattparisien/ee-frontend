import styled from "styled-components";
import { device } from "../../../styles/device";

export const StyledHero = styled.div`
	.hero-content {
		height: 80%;
		max-height: 800px;
		font-family: Kobe Bold;
		width: 100%;
		padding: inherit;
		margin: 0 auto;
		font-size: 10vw;
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

			.drawnLogo {
				
				
				top: 50%;
				left: 50%;
				position: absolute;
				transform: translate(-50%, -50%);
				opacity: 0;
			}

			@media ${device.desktop} {
				.drawnLogo {
					width: 200px;
					opacity: 0;
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
					defaultOffsets && defaultOffsets[1].left}px;
				top: 50%;
				transform: translateY(-50%);
			}

			.hero-word-impact {
				left: ${({ defaultOffsets }) =>
					defaultOffsets && defaultOffsets[2].left}px;
			}

			.hero-word-agency {
				left: ${({ defaultOffsets }) =>
					defaultOffsets && defaultOffsets[2].left}px;
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

export const StyledAbout = styled.div`
	.megaphone-svg {
		min-width: 400px;
		width: 30vw;
		bottom: 0;
		left: -1vw;
		height: auto;
		padding-bottom: inherit;
	}

	.section-who__paragraph2 {
		width: 400px;
		margin-left: auto;
		margin-top: 600px;
	}
`;

export const StyledNoteRotationWrapper = styled.div`
	color: blue;
`;
