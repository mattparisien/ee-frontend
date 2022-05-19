import create from "zustand";
import axios from "axios";

const useGlobalStore = create(set => ({
	dropdownActive: false,
	toggleDropdown: () => {
		set(state => ({
			...state,
			dropdownActive: !useGlobalStore.getState().dropdownActive,
		}));
	},
	navigation: [],
	getNavigation: async () => {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/pages?fields=Name,Slug&filters=[Active][$eq]=true&sort[0]=id%3Aasc`
		);

		set(state => ({
			...state,
			navigation: response.data.data.map(x => ({ ...x.attributes })),
		}));
	},
	projects: [],
	setProjects: projects =>
		set(state => ({
			...state,
			projects: [...state.projects, ...projects],
		})),

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
		set(state => ({
			...state,
			socials: [...response.data.data.map(x => ({ ...x.attributes }))],
		}));
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

		set(state => ({
			...state,
			footer: { ...footerText.data.data.attributes },
		}));
	},
}));

export default useGlobalStore;
