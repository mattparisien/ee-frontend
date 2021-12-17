import styled from "styled-components";
import { device, deviceSize } from "../styles/device";

export const StyledFooter = styled.footer`
	color: ${({ theme }) => theme.colors.dark};
	background-color: ${({ theme }) => theme.colors.dark};
	position: relative;
	height: ${({ $height }) => $height ? $height : 'auto'};

	@media (max-width: ${deviceSize.tablet}px) {
		height: auto;
	}

	h2 {
		font-size: 15vw;

		color: ${({ theme }) => theme.colors.light};


		@media ${device.laptopL} {
			font-size: 300px;
		};
	};



	.footer-horiz-band {
		height: 30vw;
		max-height: 500px;
		min-height: 250px;
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

		&::after {
			content: "";
			position: absolute;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 1px;
			background-color: ${({ theme }) => theme.colors.dark};
		};
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

	.link-list {
		color: ${({theme}) => theme.colors.light};
		justify-content: end;
	
		li {
			padding: 0 3rem;
		}
	}

	
	} ;
`;

export const StyledProjectFooterInner = styled.div`
`

export const StyledContactFooterInner = styled.div`
text-align: left;
`

export const StyledFooterBottom = styled.div`
	color: ${({theme}) => theme.colors.light};
	display: flex;
	align-items: center;

	.footer-brand-name {
		width: 10rem;
	}
`