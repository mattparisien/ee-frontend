module.exports = {
	images: {
		loader: "akamai",
		path: "",
		domains: ["res.cloudinary.com", "scontent.cdninstagram.com"],
	},
	optimizeFileTracing: false,
	webpack(config) {
		config.infrastructureLogging = { debug: /PackFileCache/ };
		return config;
	},
};
