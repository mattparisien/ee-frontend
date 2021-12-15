import { height } from "@mui/system";
import styled from "styled-components";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import { deviceSize } from "./device";

const StyledFooter = styled.footer`
	color: ${({ theme }) => theme.colors.dark};
	background-color: ${({ theme }) => theme.colors.dark};
	position: relative;
	height: ${({ $height }) => $height ? $height : 'auto'};

	@media (max-width: ${deviceSize.tablet}px) {
		height: 65vh !important;
	}

	h2 {
		font-size: 20vw;
		color: ${({ theme }) => theme.colors.light};
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
