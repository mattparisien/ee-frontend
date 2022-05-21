module.exports = {
	images: {
		domains: ["res.cloudinary.com"],
	},
	optimizeFileTracing: false,
	webpack(config) {
		config.infrastructureLogging = { debug: /PackFileCache/ };
		return config;
	},
};
