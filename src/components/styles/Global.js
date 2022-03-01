import { createGlobalStyle } from "styled-components";
import { device, deviceSize } from "./device";

export const CONTAINERMAXWIDTH = "1900px";
export const MOBILEFONTSIZE = "4.444vw";
export const MOBILEIMAGELISTITEMHEIGHT = "450px"

const GlobalStyles = createGlobalStyle`


* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-family: 'Kobe';
}




html,
body,
#root,
.App,  {
	height: 100%;
	width: 100%;
	line-height: 1.6;
	font-family: "Kobe";
	
	
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: none;
	
}

.scroll-wrapper {
	min-height: 100vh;
}

body {
  overflow-x: hidden;
}



main {
	height: 
}




.char {
	display: inline-block;
	position: relative;
	transform: translateY(100%);
	
}

.heading-char {
	transform: translateY(100%);
	opacity: 0;
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

body {
	background-color: ${({ theme }) => theme.colors.light};
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
