import styled from "styled-components";
import { device, deviceSize } from "../styles/device";

export const StyledDynamicWrapper = styled.div`
	width: 100%;
	height: 100%;

	transition: 300ms ease;
	transform: translateY(${props => (props.isScrollingDown ? "-400%" : "0")});
`;

export const StyledHeader = styled.div`
	width: 100%;
	height: 100px;
	position: fixed;
	top: 0;
	left: 0;

	@media (min-width: ${deviceSize.mobileS}px) and (max-width: ${deviceSize.mobileL}px) {
		padding: 1.8rem !important;
		height: 75px;
	}

	z-index: 9999;
	display: flex;
	align-items: center;

	.logo-wrapper {
		width: 150px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		@media (min-width: ${deviceSize.mobileS}px) and (max-width: ${deviceSize.mobileL}px) {
			top: 50%;
			left: 0;
			transform: translate(0, -50%);
			width: 150px;
		}

		a {
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	#header-logo {
		width: 100%;
		height: 100%;
	}

	nav {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		align-self: flex-end;
	}

	button {
		margin-left: auto;
		outline: none;
		border: 0px;
		background: transparent;
		position: relative;
		width: 35px;

		@media ${device.mobileS} {
			width: 2rem;
			height: 100%;
		}

		${props => {
			return !props.isMenuActive
				? `&:hover{
						.top {
							left: 10px;
						}

						.bottom {
							left: -10px;
						}
					}`
				: "";
		}}

		.top {
			transform: ${props =>
				props.isMenuActive
					? "translate(-50%, -50%)rotate(45deg)"
					: "translate(0, 5px)rotate(0deg)"};
		}

		.bottom {
			transform: ${props =>
				props.isMenuActive
					? "translate(-50%, -50%)rotate(-45deg)"
					: "translate(0, -5px)rotate(0deg)"};
		}

		.top,
		.bottom {
			height: 2.5px;
			width: 100%;
			position: absolute;
			top: ${props => (props.isMenuActive ? "50%" : "")};
			left: ${props => (props.isMenuActive ? "50%" : "0")};
			transform-origin: center;
			transition: 300ms ease;
		}

		.burger-circle {
			width: 66px;
			height: 66px;
			display: block;
			position: absolute;
			left: 50%;
			top: 50%;
			transform-origin: center;
			transform: translate(-50%, -50%) scale(0);
			background-color: ${({ theme }) => theme.colors.light};
			border-radius: 50%;
			z-index: -1;
			overflow: hidden;

			@media (min-width: ${deviceSize.mobileS}px) and (max-width: ${deviceSize.mobileL}px) {
				width: 48px;
				height: 48px;
			}
		}
	}
`;

export const StyledInnerLayout = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;

	.logo-wrapper path {
		transition: 300ms ease;
		fill: ${(props, theme) =>
			props.menuIsActive
				? props.theme.colors["light"]
				: props.theme.colors[props.headerColor]};
	}

	.burger-circle {
		fill: ${({ theme }) => theme.colors.light};
	}

	.bottom,
	.top {
		transition: 300ms ease;
		background-color: ${({ headerColor, theme, menuIsActive }) =>
			theme.colors[menuIsActive ? "light" : headerColor]};
	}
`;
