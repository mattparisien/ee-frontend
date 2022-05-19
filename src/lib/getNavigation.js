import axios from "axios";

export async function getNavigation(setState) {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/pages?fields=Name,Slug&filters=[Active][$eq]=true&sort[0]=id%3Aasc`
		);

		setState(state => ({
			...state,
			navigation: [...response.data.data.map(x => ({ ...x.attributes }))],
		}));

		console.log([...response.data.data.map(x => ({ ...x.attributes }))])

	} catch (err) {
		console.log(err);
	}
}
