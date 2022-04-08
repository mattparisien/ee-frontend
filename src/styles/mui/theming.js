import { createTheme } from "@mui/material";
import variables from "../scss/_vars.module.scss";

let theme = createTheme();

theme = createTheme(theme, {
	overrides: {
		MuiTypography: {
			[theme.breakpoints.up("md")]: {
				fontSize: "11rem",
				background: "red",
			},
		},
	},
	components: {
		MuiBox: {
			variants: [
				{
					props: { sectionGutter: true },
					style: {
						marginTop: "10rem",
						marginBottom: "10rem",
					},
				},
			],
		},
	},
	typography: {
		fontSize: 17,
		fontFamily: ["Kobe"],

		h1: {
			fontFamily: "Kobe Bold",
			[theme.breakpoints.down("sm")]: {
				fontSize: "5.2rem", // 20px
				lineHeight: "5.6rem", //  30px
			},
		},
		p: {
			fontFamily: "Kobe",
		},
	},
	palette: {
		primary: {
			main: "#000000",
		},
	},
});

export { theme };

// theme.overrides = {
// 	MuiTypography: {
// 		[theme.breakpoints.up("md")]: {
// 			fontSize: "11rem",
// 			background: "red",
// 		},
// 	},
// };

// theme.components = {
// 	MuiBox: {
// 		variants: [
// 			{
// 				props: { sectionGutter: true },
// 				style: {
// 					marginTop: "10rem",
// 					marginBottom: "10rem",
// 				},
// 			},
// 		],
// 	},
// };

// theme.typography = {
// 	fontSize: 17,
// 	fontFamily: ["Times"],

// 	h1: {
// 		fontFamily: "Kobe Bold",
// 	},
// 	p: {
// 		fontFamily: "Neue Mtl",
// 	},
// };

// theme.palette = {
// 	primary: {
// 		main: "#000000",
// 	},
// };
