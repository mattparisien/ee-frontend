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
					custom: "#1C4298",
				},
			},
		},
	},
	plugins: [],
};
