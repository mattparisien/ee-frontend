export const pageSchema = {
	home: {
		sections: [
			{
				id: 1,
				name: "hero",
				page: "home",
				backgroundColor: "light",
				height: "100vh",
			},
			{
				id: 2,
				name: "about",
				page: "home",
				backgroundColor: "dark",
			},

			{
				id: 3,
				name: "how",
				page: "home",
				backgroundColor: "light",
			},
			// {
			// 	id: 4,
			// 	name: "featuredWork",
			// 	page: "home",
			// 	backgroundColor: "light",
			// 	minHeight: "100vh"
			// },
		],
	},
	projects: {
		sections: [
			{
				id: 1,
				name: "hero",
				page: "projects",
				backgroundColor: "light",
				height: "auto",
			},
			{
				id: 2,
				name: "projects",
				page: "projects",

				backgroundColor: "light",
				height: "auto",
			},
		],
	},
};
