import React, { forwardRef } from "react";
import styled from "styled-components";
import { deviceSize, device } from "../styles/device";

const StyledGrid = styled.div`

	&:not(:first-child) {
		margin-top: ${({ $gridStyles }) => ($gridStyles.gap ? $gridStyles.gap : "3vw")}
	}
	display: grid;
	min-height: 100vh;
	grid-template-columns: repeat(12, 1fr);
	grid-column-gap: 1.042vw
	align-items: flex-start;
	

	&.steps-grid {

		.grid-item-wrapper {


			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;

			h4 {
				font-size: 4vw;
				line-height: 4vw;
				margin-bottom: 2vw;
				width: 15vw;
			}

			p {
				width: 15.3vw;
				font-size: 1vw;
				line-height: 1.3vw;
			}

		}
	
		
		.steps-grid__item {


			&1 {
				grid-column: 3/7;
			}

			&2 {
				grid-column: 6/10;
				
			}

			&3 {
				grid-column: 9/12;
			}

			&4 {
				grid-column: 6/10;
			}

			&5 {
				grid-column: 3/8
				
			}
		}

	}
	


	.project-grid-item__link {
		display: block;
		height: 100%;
		width: 100%;
		position: relative;

		.project-grid-item__image-wrapper {
			height: 80%;
		};

		.project-grid-item__mobile-title {
			margin-top: 4vw;
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;
			font-size: 6vw;
			line-height: 7vw;

			@media (min-width: ${deviceSize.mobileL}px) {
				visibility: hidden;
			};

		};

		.image-overlay {
			font-size: 2rem;
			line-height: 2rem;
			padding: 2rem;
			text-transform: capitalize;
			

			.title {
				font-family: 'Kobe Bold';
			};

		};
	};

		.project-grid__item {

			

			@media only screen and (max-width: ${deviceSize.mobileL}px) {
				grid-column: 1/13 !important;	
				grid-row: repeat(10, 200px);
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
