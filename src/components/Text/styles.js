import styled from "styled-components";
import { device, deviceSize } from "../styles/device";
import { RESPONSIVECONTAINERGUTTER } from "../styles/presetStyles";

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
			fontSize: "3.5rem",
			lineHeight: "3.5rem",
		},
		laptop: {
			fontSize: "3.2rem",
			lineHeight: "3.3rem",
		},
		tablet: {
			fontSize: "4rem",
			lineHeight: "4rem",
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
			fontSize: "3.4rem",
			lineHeight: "3.4rem",
		},
		desktop: {
			fontSize: "2.8rem",
			lineHeight: "2rem",
		},
		laptopL: {
			fontSize: "3.5rem",
			lineHeight: "3.5rem",
		},
		laptop: {
			fontSize: "3.2rem",
			lineHeight: "3.3rem",
		},
		tablet: {
			fontSize: "4rem",
			lineHeight: "4rem",
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

export const StyledHeading = styled.div`
${({ $headingStyles, theme }) => {
	return (
		($headingStyles.color && `color: ${theme.colors[$headingStyles.color]};`) ||
		($headingStyles.size && `font-size: ${$headingStyles.size}`)
	);
}}

h2 {
  font-size: 8vw;
  line-height: 8vw;
}
}}
`;

export const StyledParagraph = styled.div`
	p {
		${({ indent, size }) => {
			return `
      text-indent: ${
				indent && size === "medium"
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

		&:nth-of-type(1) {
			padding-left: 20%;
		}
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

	padding-top: ${({ offsetTop }) => (offsetTop ? "6rem" : "0")};

	${({ size }) => {
		return `
      ${Object.keys(device).map(deviceName => {
				return `@media ${device[deviceName]} {
              font-size: ${
								paragraphFontSizes[size === "large" ? "large" : "small"][
									deviceName
								]["fontSize"]
							};
              line-height: ${
								paragraphFontSizes.large[deviceName]["lineHeight"]
							};
            }`;
			})};      
      `;
	}}
`;
