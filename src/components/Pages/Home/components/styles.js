import styled from "styled-components";
import { device } from "../../../styles/device";

export const StyledHero = styled.div`
	.hero-content {
		height: 60vw;
		max-height: 800px;
		font-family: Kobe Bold;
		width: 80%;
		max-width: 1550px;
		margin: 0 auto;
		font-size: 10vw;
		letter-spacing: -0.4vw;
		line-height: 10vw;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		&__inner {
			position: relative;
			width: 100%;
			height: 100%;

			.drawnLogo {
				width: 30vw;
				max-width: 15vw;
				top: 50%;
				left: 50%;
				position: absolute;
				transform: translate(-50%, -50%);
			}

			@media ${device.desktop} {
				.drawnLogo {
					width: 300px;
				}

				.word {
					font-size: 200px;
				}
			}

			.word {
				position: absolute;
			}

			.word-impact {
				right: 0;
				top: 50%;
				transform: translateY(-50%);
			}

			.word-agency {
				bottom: 0;
				left: 0;
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
