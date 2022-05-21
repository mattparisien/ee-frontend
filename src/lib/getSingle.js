import axios from "axios";

export async function getSingle(param) {
	console.log("the param", param);

	try {
		const post = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/projects?filters[Subtitle][$eq]=Intersectional%20Environmentalist&populate=*`
		);

		return post.data.data[0].attributes;
	} catch (err) {
		console.log(err);
	}
}
