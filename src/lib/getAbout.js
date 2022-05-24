import axios from "axios";

export async function getAbout() {
	try {
		const about = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/pages?filters[Name][$eq]=About&populate=deep,10`
		);
		

		return {
			blocks: about.data.data[0].attributes.Choose,
			seo: about.data.data[0].attributes.seo,
		};
	} catch (err) {
		console.log(err);
	}
}
