import styled from "styled-components";
import { device, deviceSize } from "../styles/device";
import { responsiveGutter } from "../Containers/StyledContainer.styled";

const paragraphFontSizes = {
	large: {
		desktopL: {
			fontSize: "4rem",
			lineHeight: "4.5rem",
		},
		desktop: {
			fontSize: "3rem",
			lineHeight: "2rem",
		},
		laptopL: {
			fontSize: "4rem",
			lineHeight: "4.5rem",
		},
		laptop: {
			fontSize: "3rem",
			lineHeight: "3.5rem",
		},
		tablet: {
			fontSize: "3rem",
			lineHeight: "4rem",
		},
		mobileL: {
			fontSize: "2.9rem",
			lineHeight: "4rem",
		},
		mobileM: {
			fontSize: "2.1rem",
			lineHeight: "3rem",
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
			letterSpacing: "-0.2rem",
		},
		desktop: {
			fontSize: "12vw",
			lineHeight: "12vw",
		},
		laptopL: {
			fontSize: "10vw",
			lineHeight: "6vw",
			letterSpacing: "-0.3vw",
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
text-align: ${({ align }) => (align ? align : "center")};
width: ${({ $headingStyles }) =>
	$headingStyles.width ? $headingStyles.width : "100%"};

font-family: ${({ $headingStyles }) =>
	$headingStyles.weight === "light" ? "Kobe" : "Kobe Bold"};

text-transform: ${({ $headingStyles }) =>
	$headingStyles.capitalize && "capitalize"};


h2 {
	${({ theme }) => theme.spacing(0.5, "margin-top")};
	${({ theme }) => theme.spacing(0.5, "margin-bottom")};
	${({ theme }) => theme.typography.setSize(6)};

}}
`;

export const StyledParagraph = styled.div`
	position: relative;
	letter-spacing: -1px;

	p {
		${({ theme }) => theme.typography.setSize(3)};
		${({ theme }) => theme.spacing(2, "margin-top")};
		${({ theme }) => theme.spacing(2, "margin-bottom")};
		letter-spacing: -0.8px;
	}

	.indent-spacer {
		width: 300px;
		height: 100%;
		display: inline-block;
	}

	.indent-title {
		font-family: "Kobe";
		height: 100%;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: start;

		${({ theme }) => theme.typography.setSize(1)};
	}
`;
