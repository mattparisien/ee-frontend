import styled, { ThemeConsumer } from "styled-components";

export const StyledLoader = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	.spinner circle {
		height: 60vw;
		fill: black !important;
	}
`;

export const StyledDrawnLogo = styled.div`
	#drawn-logo {
		overflow: visible;

		.faceLine {
			fill: white;
		}

		.nose,
		.ear {
			fill: none;
		}

		.vibration,
		.eye {
			fill: yellow;
		}
	}
`;
