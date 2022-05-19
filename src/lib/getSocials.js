import axios from "axios";

export async function getSocials(setState) {
	try {
		const config = {
			params: {
				fields: "Name, Url",
			},
		};

		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/socials`,
			config
		);
		setState(state => ({
			...state,
			socials: [...response.data.data.map(x => ({ ...x.attributes }))],
		}));
	} catch (err) {
		console.log(err);
	}
}
