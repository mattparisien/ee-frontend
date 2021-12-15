import styled from "styled-components";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { deviceSize } from "./device";

const StyledFooter = styled.footer`
	color: ${({ theme }) => theme.colors.dark};
	background-color: ${({ theme }) => theme.colors.dark};
	position: relative;
	height: 90vh;

	@media (max-width: ${deviceSize.tablet}px) {
		height: 65vh !important;
	}

	h2 {
		font-size: 20vw;
		color: ${({ theme }) => theme.colors.light};
	};

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

	.marquee-wrapper {
		display: flex;

		
		.marquee-title:first-of-type {
			
			background-color: red;
		}

		.marquee-title:nth-of-type(2) {
			background-color: orange;
		}

		.marquee-title:nth-of-type(3) {
			background-color: blue;
		}

	};

	a.footer-next-project-clickable {
		display: block;
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

	
	} ;
`;
export { StyledFooter };
