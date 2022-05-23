let plugin = require("tailwindcss/plugin");

module.exports = {
	content: [
		"./src/pages/index.js",
		"./src/**/*.{js,jsx,ts,tsx}",
		"./src/pages/_app.js",
		"./src/components/**/*.{js,jsx,ts,tsx}",
	],
	plugins: [
		plugin(function ({ addVariant }) {
			// Add a `third` variant, ie. `third:pb-0`
			addVariant("second", "&:nth-child(2)");
			addVariant("third", "&:nth-child(3)");
			addVariant("child", "& > *");
			addVariant("child-hover", "& > *:hover");
			addVariant("last-child", "& > *:last-child");
			addVariant("first-child", "& > *:first-child");
			addVariant("second-child", "& > *:nth-child(2)");
		}),
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
};
