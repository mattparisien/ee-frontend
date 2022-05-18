import create from "zustand";
import axios from "axios";

const useLocalStore = create(set => ({
	home: [],
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
				fields: "Title, Body",
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
	},
}));

export default useLocalStore;
