import axios from "axios";

export async function getHome() {
	try {
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

		return {
			about: about.data.data.attributes.Body1,
			steps: steps.data.data.map(x => ({ id: x.id, ...x.attributes })),
		};
	} catch (err) {
		console.log(err);
	}
}
