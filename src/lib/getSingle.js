import axios from "axios";

export async function getSingle(param) {
	const formattedParam = param
		.split("-")
		.map(x => x[0].toUpperCase() + x.slice(1, x.length))
		.join("%20");

	

	try {
		const post = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/projects?filters[Subtitle][$eq]=${formattedParam}&populate=deep,10`
		);

		return post.data.data[0].attributes;
	} catch (err) {
		console.log(err);
	}
}
