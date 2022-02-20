import styled from "styled-components";
import { device } from "../styles/device";

export const StyledFooter = styled.footer`

	color: ${({ theme }) => theme.colors.dark};
	background-color: ${({ theme }) => theme.colors.dark};
	position: relative;
	height: 60vw;
	max-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;


	

	.footer-contact {
		display: flex;
		width: 100%;
		justify-content: space-between;


		.footer-heading h2 {
			font-size: 10.8vw;
			letter-spacing: -0.1vw;
		}

		&__left {
			display: flex;
			align-items: flex-start;
			flex-direction: column;
			justify-content: center;

			.footer-email {
				h2 {
					font-size: 4.3vw;
					margin-top: 3.1vw;
					letter-spacing: -0.1vw;
					line-height: 3.1vw;
				}
			}

		}


		@media ${device.laptopL} {
			.footer-heading h2 {
				font-size: 9rem;
			}	

			.footer-email h2 {
				margin-top: 1.23rem;
				font-size: 3.6rem;
			}
		}

		&__right {
			width: 15vw;

			@media ${device.desktop} {
				.drawnLogo {
					width: 300px;
			}
				
			}
		}
	}

	#next-link, .marquee-text {
		font-size: 15vw;
		font-family: 'Kobe Bold';
		letter-spacing: -0.6vw;

		color: ${({ theme }) => theme.colors.light};


		@media ${device.laptopL} {
			font-size: 300px;
		};
	};

	.styled-object-container {
		padding-bottom: 0px;
	}

	#scene {
		
		left: 0;
		top: 0;
	}


	.footer-horiz-band {
		height: 30vw;
		max-height: 500px;
		min-height: 200px;
		display: flex;
		align-items: center;
	}

	.footer-next-title-wrapper {
		h2 {
			white-space: nowrap;
			font-family: "Kobe";
			font-weight: 200;
		};
	};

	.footer-email {
		font-size: 5rem;
		position: relative;

		
	};

	

	a.footer-next-project-clickable {
		width: 100%;

		.footer-next-btn-wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.next-arrow {
				width: 30vw;
				margin-left: 10vw;
			};
		};

	};

	.footer-navList-wrapper {
		position: absolute;
		bottom: 0;
		padding: inherit;
		margin-bottom: 2rem;
		
	}

	.link-list {
		color: ${({ theme }) => theme.colors.light};
		justify-content: end;
	
		li {
			padding: 0 2vw;
		}
	}

	
	} ;
`;

export const StyledProjectFooterInner = styled.div`
	width: 100%;
`;

export const StyledContactFooterInner = styled.div`
	text-align: left;
`;

export const StyledFooterBottom = styled.div`
	color: ${({ theme }) => theme.colors.light};
	display: flex;
	align-items: center;
	width: 100%;

	.footer-brand-name {
		width: 13rem;
	}
`;
