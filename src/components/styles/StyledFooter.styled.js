import styled from "styled-components";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const StyledFooter = styled.footer`
	position: relative;
	h2 {
		font-size: 20rem;
		color: ${({ theme }) => theme.colors.light};
	}

	.footer-next-title-wrapper {
		h2 {
			white-space: nowrap;
			font-family: "Kobe";
			font-weight: 200;
		}
	}

	background-color: ${({ theme }) => theme.colors.dark};
	color: ${({ theme }) => theme.colors.dark};
	height: 100vh;
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
		}
	}

	.marquee-wrapper {
		position: relative;
	}

	.marquee-inner {
		display: flex;
		height: 500px;
		width: 100vw;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);

		.marquee-part {
			position: absolute;
			left: 0;
			transform: translateX(${window.innerWidth}px);
		}
	}
`;
export { StyledFooter };
