import React, { forwardRef } from "react";
import styled from "styled-components";
import { deviceSize } from "./device";

const StyledViewportNav = styled.div`
	height: 100vh;
	width: 100%;
	z-index: 999;
	background-color: white;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	transform: ${({ $menuStyles }) => `translateX(${$menuStyles.offset})`};
	background-color: ${({ theme }) => theme.colors.dark};
	color: ${({ theme }) => theme.colors.light};
	display: none;

	#trumpet {
		position: absolute;
		width: 30vw;
		transform: scaleX(-1) translate(10vw, 10vw);
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
						text-align: left ${-10};
					}
				}

				a {
					text-transform: uppercase;
					font-size: 14vw;
					letter-spacing: -0.6vw;
					transition: 300ms ease;

				
					@media (min-width: ${deviceSize.laptopL}px) {
						font-size: 190px;
						letter-spacing: -1px;
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
