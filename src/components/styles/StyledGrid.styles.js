import React, { forwardRef } from "react";
import styled from "styled-components";
import { deviceSize } from "./device";

const StyledGrid = styled.div`

	&:not(:first-child) {
		margin-top: ${({ $gridStyles }) => ($gridStyles.gap ? $gridStyles.gap : "3vw")}
	}
	display: grid;
	min-height: 100vh;
	grid-template-columns: repeat(
		${({ $gridStyles }) => $gridStyles.columns},
		1fr
	);



	${({ $windowWidth, $gridStyles }) => {
		return $windowWidth <= deviceSize.mobileL
			? "grid-auto-rows: 130vw"
			: $gridStyles.rows;
	}};
	
	grid-gap: ${({ $gridStyles }) => ($gridStyles.gap ? $gridStyles.gap : "3vw")};
	grid-row-gap: 5vw;

	&.steps-grid {

		margin: 0 10vw;

		.grid-item-wrapper {


			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;

			h4 {
				font-size: 4.8vw;
				line-height: 4.2vw;
				text-transform: uppercase;
				margin-bottom: 2vw;
			}

			p {
				font-size: 1vw;
			}

		}
	
		
		.steps-grid__item {


			&1 {
				grid-column: 1/5;
			}

			&2 {
				grid-column: 5/9;
				grid-row: 2/3;
			}

			&3 {
				grid-column: 9/13;
				grid-row: 3/4;
			}

			&4 {
				grid-column: 5/9;
				grid-row: 4/5;
			}

			&5 {
				grid-column: 1/5;
				grid-row: 5/6;
			}
		}

	}
	


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

			.title {
				font-family: 'Kobe Bold';
			}

		}
	}

		.project-grid__item {

			

			@media only screen and (max-width: ${deviceSize.tablet}px) {
				grid-column: 1/13 !important;	
				grid-row: auto/auto !important;	
				transform: none !important;
			};
			

		&__1 {
			grid-column: 1/7;
			grid-row: 1/4;
		}

		&__2 {
			grid-column: 7/13;
			grid-row: 4/6;
			transform: translateY(-14vw);
		}

		&__3 {
			grid-column: 5/9;
			grid-row: 6/8;
		}

		&__4 {
			grid-column: 6/13;
			grid-row: 9/13;
		}

		&__5 {
			grid-column: 1/5;
			grid-row: 13/15;
			transform: translateY(-14vw);
		}

		&__6 {
			grid-column: 10/13;
			grid-row: 14/15;
		}

		&__7 {
			grid-column: 5/9;
			grid-row: 16/18;
		}
		
	}


}
`;

export default StyledGrid;
