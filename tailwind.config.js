module.exports = {
	content: [
		"./src/pages/index.js",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/pages/_app.js",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				adieu: ["Adieu"],
			},
			colors: {
				light: "#F9F8F2",
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
			transitionTimingFunction: {
				dropdown: "cubic-bezier(.645,.045,.355,1)",
			},
		},
	},
	plugins: [],
};
