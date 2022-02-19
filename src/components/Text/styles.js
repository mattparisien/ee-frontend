import styled from "styled-components";
import { device, deviceSize } from "../styles/device";
import { responsiveGutter } from "../Containers/StyledContainer.styled";

const paragraphFontSizes = {
	large: {
		desktopL: {
			fontSize: "2.8rem",
			lineHeight: "2.8rem",
		},
		desktop: {
			fontSize: "3rem",
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
			fontSize: "9rem",
			lineHeight: "8rem",
			letterSpacing: "-0.2rem"
		},
		desktop: {
			fontSize: "12vw",
			lineHeight: "12vw",
		},
		laptopL: {
			fontSize: "10vw",
			lineHeight: "6vw",
			letterSpacing: "-0.3vw"
		},
		laptop: {
			fontSize: "11vw",
			lineHeight: "6vw",
			letterSpacing: "-0.4vw",
		},
		tablet: {
			fontSize: "14vw",
			lineHeight: "9vw",
			letterSpacing: "-0.6vw",
		},
		mobileL: {
			fontSize: "14vw",
			lineHeight: "9vw",
			letterSpacing: "-0.6vw",
		},
		mobileM: {
			fontSize: "17vw",
			lineHeight: "4rem",
		},
		mobileS: {
			fontSize: "20vw",
			letterSpacing: "-0.6vw",
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
text-align: center;
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
									letter-spacing: ${headingFontSizes["h2"][deviceName]["letterSpacing"]};
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
