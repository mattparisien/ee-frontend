import { createGlobalStyle } from "styled-components";
import { device, deviceSize } from "./device";

export const FOOTERHEIGHT = "75vh";
export const CONTAINERMAXWIDTH = "1900px";
export const MOBILEFONTSIZE = "4.444vw";

const GlobalStyles = createGlobalStyle`


* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-family: 'Kobe';
}


#root, .has-scroll-smooth [data-scroll-container] {	
	${({ isScrollLock }) => {
		return isScrollLock && `overflow: hidden`;
	}}
}

html,
body {
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

body {
	background-color: ${({ theme }) => theme.colors.light};
}


.line {
	transform: translateY(100%);
	opacity: 0;
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
