import axios from "axios";

export async function getProjects() {
	const postsConfig = {
		params: {
			fields: "Title,Subtitle,Date",
			populate: "FeatureImage",
		},
	};

	try {
		const posts = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/projects`,
			postsConfig
		);

		const seo = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/pages/?filters[name][$eq]=Projects&populate[0]=seo&fields=Name`
		);

		return {
			projects: [posts.data.data.map(x => ({ ...x.attributes }))],
			seo: { ...seo.data.data[0].attributes.seo },
		};
	} catch (err) {
		console.log(err);
	}
}
