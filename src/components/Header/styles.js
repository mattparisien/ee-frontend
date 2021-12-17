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
	padding: ${({ $headerStyles }) => $headerStyles.padding};
	z-index: 9999;
	display: flex;
	align-items: center;

	.logo-wrapper {
		width: 200px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

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

		ul {
			li {
				display: inline;

				&:not(:last-of-type) {
					padding-right: 8rem;
				}

				a {
					position: relative;
					text-decoration: none;
					color: $dark;
					font-size: 1.4rem;
				}
			}
		}
	}

	.mobile-nav-wrapper {
		display: inline-block;
		margin-left: auto;
		button {
			outline: none;
			border: 0px;
			background: transparent;
			position: relative;
			height: 30px;
			width: 35px;

			${({ $isHoverable }) => {
				return $isHoverable
					? `&:hover .top {
        left: -10px;
      };

      &:hover .bottom {
        left: 10px;
      }`
					: "";
			}};

			.top,
			.bottom {
				height: 2.5px;
				width: 100%;
				position: absolute;
				left: 0;

				transform-origin: center;
				transition: 300ms ease;
			}

			.top {
				transform: translateY(-5px);
			}

			.bottom {
				transform: translateY(5px);
			}

			.burger-circle {
				position: absolute;
				left: 50%;
				top: 50%;
				transform-origin: center;
				transform: translate(-50%, -50%) scale(0);
			}
		}
	}

	@media screen and (max-width: ${deviceSize.mobileL}) {
		.logo-wrapper {
			display: none;
		}
	} ;
`;

export const StyledInnerLayout = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	.mobile-nav-wrapper {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}

	.logo-wrapper path {
		transition: 300ms ease;
		fill: ${(props, theme) =>
			props.menuIsActive
				? props.theme.colors["light"]
				: props.theme.colors["dark"]};
	}

	.bottom,
	.top {
		transition: 300ms ease;
		background-color: ${(props, theme) =>
			props.menuIsActive ? "white" : "black"};
	}
`;
