import { createGlobalStyle } from "styled-components";
import { device, deviceSize } from "./device";
import BertholdBlock from "./assets/fonts/blc69-webfont.woff";
import BertholdBlock2 from "./assets/fonts/blc69-webfont.woff2";

const GlobalStyles = createGlobalStyle`

@font-face {
	font-family: 'Blc';
	src: local('BertholdBlock'), local('BertholdBlock'),
	url(${BertholdBlock}) format('woff'),
	url(${BertholdBlock2}) format('woff2');
	font-weight: 200;
}


* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	// overflow-y: ${props => (props.isOverflowHidden ? "hid den" : "overlay")};
	font-family: 'Blc' !important;
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



.char {
	display: inline-block;
	position: relative;
}

.viewport-nav {
	.char:nth-of-type(odd) {
		opacity: 0;
		transform: translateY(100%);
		
	}
	
	.char:nth-of-type(even) {
		opacity: 0;
		transform: translateY(-100%);
		
	}
}

.line-wrapper {
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
