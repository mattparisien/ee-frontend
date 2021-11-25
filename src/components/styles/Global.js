import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {

	height: 100%;
	width: 100%;
	line-height: 1.6;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: none;
}

main {
	min-height: 100vh;
}
`;

export { GlobalStyles };
