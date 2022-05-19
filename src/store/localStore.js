import create from "zustand";
import axios from "axios";

const useLocalStore = create(set => ({
	home: {},
	singleProject: [],
	about: [],
	getHome: async () => {
		const aboutConfig = {
			params: {
				fields: "Body1",
			},
		};

		const stepsConfig = {
			params: {
				fields: "id, Title, Body",
			},
		};
		const about = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/about`,
			aboutConfig
		);
		const steps = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/steps`,
			stepsConfig
		);

		set(state => ({
			...state,
			home: {
				...state.home,
				about: about.data.data.attributes.Body1,
				steps: steps.data.data.map(x => ({ id: x.id, ...x.attributes })),
			},
		}));
	},
}));

export default useLocalStore;
