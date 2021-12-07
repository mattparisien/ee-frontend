import React, { forwardRef } from "react";
import styled from "styled-components";
import { deviceSize } from "./device";

const StyledGrid = styled.div`


	display: grid;
	min-height: 100vh;
	grid-template-columns: repeat(
		${({ $gridStyles }) => $gridStyles.columns},
		1fr
	);

	${({ $windowWidth }) => {
		return $windowWidth <= deviceSize.tablet
			? "grid-auto-rows: 130vw"
			: "grid-template-rows: repeat(10, 20vw)";
	}};
	
	grid-gap: 4vw;

	.project-grid-item__link {
		display: block;
		height: 100%;
		width: 100%;
		position: relative;

		.image-overlay {
			font-size: 2rem;
			line-height: 2rem;
			padding: 2rem;
			text-transform: capitalize;
		}
	}

		.project-grid__item {
			@media only screen and (max-width: ${deviceSize.tablet}px) {
				grid-column: 1/5 !important;	
				grid-row: auto/auto !important;	
				transform: none !important;
			};
		
		
		&__1 {
			grid-column: 1/3;
			grid-row: 1/4;
		}

		&__2 {
			grid-column: 3/5;
			grid-row: 4/5;
			transform: translateY(-14vw);
		}

		&__3 {
			grid-column: 2/4;
			grid-row: 5/8;
		}

		&__4 {
			grid-column: 1/3;
			grid-row: 8/10;
		}
	}


}
`;

export default StyledGrid;
