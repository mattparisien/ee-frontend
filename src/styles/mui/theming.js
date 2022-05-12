import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme();

const yellow = "#F6E544";

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

const aspectRatio = {
	square: 1,
	portrait: 1.25,
	landscape: 0.5625,
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
		[theme.breakpoints.up("sm")]: {
			fontSize: 22,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: 26.5,
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: 29,
		},
		fontSize: 24,
	},
	body2: {
		[theme.breakpoints.up("sm")]: {
			fontSize: 14,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: 17,
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: 20,
		},
		fontSize: 12,
	},

	body3: {
		fontFamily: ["Helvetica"],
		fontWeight: 400,
		[theme.breakpoints.up("sm")]: {
			fontSize: 12,
		},
		[theme.breakpoints.up("md")]: {
			fontSize: 13,
		},
		[theme.breakpoints.up("lg")]: {
			fontSize: 15,
		},
		fontSize: 12,
	},
	h1: {
		fontFamily: "Kobe Bold",
	},
	h2: {
		fontFamily: "Kobe Bold",
	},
};

theme = createTheme(theme, {
	transitions: transitions,
	aspectRatio: aspectRatio,

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
