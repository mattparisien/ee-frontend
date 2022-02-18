import styled from "styled-components";
import { device, deviceSize } from "../styles/device";
import { responsiveGutter } from "../Containers/StyledContainer.styled";

const paragraphFontSizes = {
	large: {
		desktopL: {
			fontSize: "3.4rem",
			lineHeight: "3.4rem",
		},
		desktop: {
			fontSize: "2.8rem",
			lineHeight: "2rem",
		},
		laptopL: {
			fontSize: "3rem",
			lineHeight: "3.2rem",
		},
		laptop: {
			fontSize: "2.7rem",
			lineHeight: "2.8rem",
		},
		tablet: {
			fontSize: "3rem",
			lineHeight: "3rem",
		},
		mobileL: {
			fontSize: "2.4rem",
			lineHeight: "2.5rem",
		},
		mobileM: {
			fontSize: "4rem",
			lineHeight: "4rem",
		},
		mobileS: {
			fontSize: "4rem",
			lineHeight: "4rem",
		},
	},
	small: {
		desktopL: {
			fontSize: "1.5rem",
			lineHeight: "1.5rem",
		},
		desktop: {
			fontSize: "1.5rem",
			lineHeight: "1.5rem",
		},
		laptopL: {
			fontSize: "1.5rem",
			lineHeight: "1.5rem",
		},
		laptop: {
			fontSize: "2rem",
			lineHeight: "2rem",
		},
		tablet: {
			fontSize: "1.5rem",
			lineHeight: "1.5rem",
		},
		mobileL: {
			fontSize: "2.4rem",
			lineHeight: "2.5rem",
		},
		mobileM: {
			fontSize: "4rem",
			lineHeight: "4rem",
		},
		mobileS: {
			fontSize: "4rem",
			lineHeight: "4rem",
		},
	},
};

const headingFontSizes = {
	h2: {
		desktopL: {
			fontSize: "8rem",
			lineHeight: "6rem",
		},
		desktop: {
			fontSize: "10vw",
			lineHeight: "12vw",
		},
		laptopL: {
			fontSize: "8vw",
			lineHeight: "6vw",
		},
		laptop: {
			fontSize: "8vw",
			lineHeight: "6vw",
		},
		tablet: {
			fontSize: "12vw",
			lineHeight: "9vw",
		},
		mobileL: {
			fontSize: "10vw",
			lineHeight: "8vw",
		},
		mobileM: {
			fontSize: "4rem",
			lineHeight: "4rem",
		},
		mobileS: {
			fontSize: "4rem",
			lineHeight: "4rem",
		},
	},
};

export const StyledHeading = styled.div`
${({ $headingStyles, theme }) => {
	return (
		$headingStyles.color && `color: ${theme.colors[$headingStyles.color]};`
	);
}}

width: ${({ $headingStyles }) =>
	$headingStyles.width ? $headingStyles.width : "100%"};

font-family: ${({ $headingStyles }) =>
	$headingStyles.weight === "light" ? "Kobe" : "Kobe Bold"};

text-transform: ${({ $headingStyles }) =>
	$headingStyles.capitalize && "capitalize"};


h2 {
  	
		${Object.keys(device).map(deviceName => {
			return `@media ${device[deviceName]} {
									font-size: ${headingFontSizes["h2"][deviceName]["fontSize"]};
									line-height: ${headingFontSizes["h2"][deviceName]["lineHeight"]};
								}`;
		})}
}}
`;

export const StyledParagraph = styled.div`
	p {
		${({ indent, size }) => {
			return `
      text-indent: ${
				indent && size === "large"
					? "10vw"
					: indent && size === "small"
					? "5vw"
					: "0"
			}

      `;
		}}
	}

	position: relative;
	letter-spacing: -1px;

	.line-wrapper {
		overflow: hidden;
	}

	.fade-up-line {
		transform: translateY(100%);
		opacity: 0;
		white-space: nowrap;
	}

	.indent-title {
		font-family: "Kobe";
		font-size: 1vw;
		text-indent: 0px;
		width: 20%;
		position: absolute;
		display: flex;
		align-items: center;

		span {
			display: block;
			text-align: left;
			width: 100%;
		}
	}

	${({ size, offset }) => {
		return Object.keys(device).map(deviceName => {
			return `@media ${device[deviceName]} {
									font-size: ${paragraphFontSizes[size][deviceName]["fontSize"]};
									line-height: ${paragraphFontSizes[size][deviceName]["lineHeight"]};
									padding-${offset}: ${responsiveGutter["vertical"][deviceName]["padding"]}
								}`;
		});
	}};
`;
