import { createGlobalStyle } from "styled-components";
import { device } from "./device";

const GlobalStyles = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	overflow-y: ${props => (props.isOverflowHidden ? "hidden" : "overlay")};
}

html,
p {
	height: 100%;
	width: 100%;
	line-height: 1.6;
	font-family: "Kobe";
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: none;
	cursor: ${({ isTransitioning }) => isTransitioning && "wait"};
}

body {
  overflow-x: hidden;
}


main {
	min-height: 100vh;
}



.line {
	opacity: 0;
	transform: translateY(100%);
	overflow: hidden;
}


@media ${device.mobileS} {
	html {
		font-size: 15px
}
}

@media ${device.mobileM} {
	html {
		font-size: 15px
}
}

@media ${device.mobileL} {
	html {
		font-size: 15px
}
}

@media ${device.tablet} {
	html {
		font-size: 15px
}
}

@media ${device.laptop} {
	html {
		font-size: 17px
}
}

@media ${device.laptopL} {
	html {
		font-size: 17px
}
}

@media ${device.desktop} {
	html {
		font-size: 21px
}
}

@media ${device.desktopL} {
	html {
		font-size: 21px
}
}


`;

export { GlobalStyles };
