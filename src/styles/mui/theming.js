import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme();

const yellow = "#16854b";

const sitePalette = {
	primary: {
		dark: "#181818",
		light: "#f9f8f4",
		red: "#e94034",
		green: "#16854b",
		blue: "#0a4d98",
		yellow: yellow,
		accent: {
			main: yellow,
		},
		colorSet: {
			red: "#e94034",
			green: "#16854b",
			yellow: yellow,
			blue: "#0a4d98",
		},
	},
};

const transitions = {
	duration: {
		shortest: 150,
		shorter: 200,
		short: 250,
		standard: 300,
		long: 3,
	},
	easing: {
		zoom: "cubic-bezier(0.075, 0.82, 0.165, 1)",
	},
};

const typography = {
	body1: {
		fontSize: 29,
	},
	body2: {
		fontSize: 23,
	},
	h1: {
		fontFamily: "Kobe Bold",
		[theme.breakpoints.down("sm")]: {
			fontSize: "5.2rem", // 20px
			lineHeight: "5.6rem", //  30px
		},
	},
	p: {
		fontFamily: "Inter",
	},
};

theme = createTheme(theme, {
	transitions: transitions,
	// overrides: {
	// 	MuiTypography: {
	// 		fontFamily: "Kobe",
	// 		[theme.breakpoints.up("md")]: {
	// 			fontSize: "11rem",
	// 			background: "red",
	// 		},
	// 	},
	// },
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
	typography: typography,
	spacing: factor => `${0.25 * factor}rem`,
	palette: sitePalette,
});

theme = responsiveFontSizes(theme);

export { theme };
