import styled from "styled-components";
import { deviceSize, device } from "../styles/device";

const StyledGrid = styled.div`
	overflow: visible;
	&:not(:first-child) {
		margin-top: ${({ $gridStyles }) => ($gridStyles.gap ? $gridStyles.gap : "3vw")}
	}
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	position: relative;

	.drawing {
		display: none;
	}

	.note {
		width: 15vw;
	}


	.location-note-wrapper {
		position: absolute;
		
	

		&__1 {
			top: 30vw;
			left: -5vw;
			
		}

		&__2 {
			
			bottom: 25vw;
			left: -10vw;
		}

		&__3 {
			right: -7vw;
			
		}

		&__4 {
			right: -8vw;
			top: 135vw;
		}

	}

	.grid-item-wrapper {
		grid-column: 1/ span 6;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		h4 {
			text-align: center;
			font-size: 14vw;
			line-height: 12vw;
			letter-spacing: -0.1vw;
			text-transform: uppercase;
			font-family: 'Kobe';
		
		}

		p {
			text-align: center;
		
		}
	}


	@media ${device.mobileL} {

		.drawings-wrapper{
			width: 100%;
			height: 100%;
			
			position: absolute;

			.drawing {
				display: block;
				position: absolute;
				width: 15vw;
				height: auto;
				overflow: visible;
			}

			.drawing-blue {
				
				bottom: 0;
				right: 0;
			}

			.drawing-green {
				bottom: 10vw;
				
			}

			.drawing-yellow {
				top: 10vw;
				right: 0;
				
			}

			.drawing-red {
				top: 0;
				left: 0;
				width:  10vw;
			}
		}


		.note {
			width: 4vw;
		}

		.location-note-wrapper {

			&__1 {
				grid-row: 3/4;
				grid-column: 11/12;
			}

			&__2 {
				grid-row: 5/6;
				grid-column: 4/5;
			}

			&__3 {
				grid-row: 2/3;
				grid-column: 3/4;
			}

			&__4 {
				grid-row: 3/4;
				grid-column: 1/2;
			}

			
		}

		

		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(5, 400px);
		grid-column-gap: 1.042vw;
		align-items: flex-start;
		

		.grid-item-wrapper {

			
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
	
		
	
		
	
			h4 {
				text-align: center;
				font-size: 3.3vw;
				letter-spacing: -0.1vw;
				text-transform: uppercase;
				font-family: 'Kobe';
				line-height: 3vw;
				margin-bottom: 2vw;
				margin-right: 0;
				width: 15vw;
			}
	
			p {
				text-align: center;
				width: 15.3vw;
				font-size: 1vw;
				line-height: 1.3vw;
			}
	
		
	
		}

		.steps-grid__item {
			

				&1 {
					grid-column: 1/5;
					grid-row: 1/2;
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

	&.steps-grid {

		.styled-object-container {
			height: 100%;
		}

		
		.steps-grid__item {

			

			transition: 300ms ease;

			${({ itemInView }) => {
				return (
					itemInView &&
					`
					
					&${itemInView.id} {
						opacity: 1;
					}
				`
				);
			}};		

	


		
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
