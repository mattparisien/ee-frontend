module.exports = {
	content: [
		"./public/index.html",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/App.js",
		"./src/Components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				light: "#fbf7ed",
				dark: "#1c1c1c",
				blue: {
					custom: "#0a4d98",
				},
				red: {
					custom: "#e94034",
				},
				yellow: {
					custom: "#F6E544",
				},
				blue: {
					custom: "#0a4d98",
				},
			},
		},
	},
	plugins: [],
};
