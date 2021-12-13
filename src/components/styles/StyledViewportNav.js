import React, { forwardRef } from "react";
import styled from "styled-components";
import { deviceSize } from "./device";

const StyledViewportNav = styled.div`
	height: 100vh;
	width: 100%;
	z-index: 999;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	transform: ${({ $menuStyles }) => `translateX(${$menuStyles.offset})`};

	#trumpet {
		position: absolute;
		width: 30vw;
		transform: scaleX(-1)translate(10vw, 10vw);

	}

	.viewport-nav__inner {
		height: 100%;
		width: 100%;

		ul {
			width: 70%;
			max-width: 1000px;

			li {
				transition: 300ms ease;



				&:hover a {
					color: ${({ theme }) => theme.colors.yellow};
				}

				&:nth-child(even) {
					text-align: right;
					@media (max-width: ${deviceSize.mobileL}px) {
						text-align: left;
					}
				}

				a {
					text-transform: uppercase;
					font-size: 14vw;
					letter-spacing: -0.6vw;
					transition: 300ms ease;
					

					.line {
						overflow: hidden;

						.char {
							&:nth-of-type(odd) {
								transform: translateY(-100%);
							}

							&:nth-of-type(even) {
								transform: translateY(100%);
							}
						}
					}


					@media (min-width: ${deviceSize.laptopL}px) {
						font-size: 190px;
					}

					@media (max-width: ${deviceSize.mobileL}px) {
						font-size: 17vw;
					}
				}
			}
		}
	}
`;

export { StyledViewportNav };
