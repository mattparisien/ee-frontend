import styled from "styled-components";

export const StyledHero = styled.div`
	.hero-content {
		height: 60vw;
    max-height: 800px;
		font-family: Kobe Bold;
		width: 80%;
		margin: 0 auto;
		font-size: 10vw;
    line-height: 10vw;
		letter-spacing: -0.4rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

		&__inner {
			position: relative;
			width: 100%;
			height: 100%;

			.word {
				position: absolute;

				&:nth-of-type(2) {
					right: 0;
					top: 50%;
					transform: translateY(-50%);
				}

        &:nth-of-type(3) {
          bottom: 0;
          left: 0;
        }
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
