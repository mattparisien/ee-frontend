module.exports = {
	// async redirects() {
	// 	return [
	// 		{
	// 			source: "/",
	// 			destination: "/maintenance",
	// 			permanent: false,
	// 		},
	// 		{
	// 			source: "/about",
	// 			destination: "/maintenance",
	// 			permanent: false,
	// 		},
	// 		{
	// 			source: "/404",
	// 			destination: "/maintenance",
	// 			permanent: false,
	// 		},
	// 		{
	// 			source: "/projects",
	// 			destination: "/maintenance",
	// 			permanent: false,
	// 		},
	// 		{
	// 			source: "/projects/[slug]",
	// 			destination: "/maintenance",
	// 			permanent: false,
	// 		},
	// 	];
	// },
	images: {
		loader: "cloudinary",
		path: "",
		domains: ["res.cloudinary.com", "scontent.cdninstagram.com"],
	},
	optimizeFileTracing: false,
	webpack(config) {
		config.infrastructureLogging = { debug: /PackFileCache/ };
		return config;
	},
};
