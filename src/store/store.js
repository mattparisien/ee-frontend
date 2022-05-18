import create from "zustand";
import axios from "axios";

const useGlobalStore = create(set => ({
	projects: [],
	getProjects: async () => {
		const config = {
			params: {
				fields: "Title,Subtitle,Date",
				populate: "FeatureImage",
			},
		};

		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/projects`,
			config
		);

		set({ projects: [...response.data.data.map(x => ({ ...x.attributes }))] });
	},
	addProject: projects =>
		set(state => ({ projects: [...state.projects, projects] })),
	clearProjects: () => set(() => ({ projects: [] })),
	socials: [],
	getSocials: async () => {
		const config = {
			params: {
				fields: "Name, Url",
			},
		};

		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/socials`,
			config
		);
		set({ socials: [...response.data.data.map(x => ({ ...x.attributes }))] });
	},
	footer: {},
	getFooter: async () => {
		const config = {
			params: {
				fields: "Heading, Email",
			},
		};

		const footerText = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/footer`,
			config
		);

		set({
			footer: { ...footerText.data.data.attributes },
		});
	},
}));

export default useGlobalStore;
