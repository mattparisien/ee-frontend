import axios from "axios";
import getProjects from "./getProjects";

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

		const postsConfig = {
			params: {
				fields: "Title,Subtitle,Date",
				populate: "FeatureImage",
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

		const posts = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/projects`,
			postsConfig
		);

		const seo = await axios.get(
			`${process.env.NEXT_PUBLIC_API_URL}/pages/?filters[name][$eq]=Home&populate[0]=seo`
		);

		return {
			about: about.data.data.attributes.Body1,
			steps: steps.data.data.map(x => ({ id: x.id, ...x.attributes })),
			projects: [posts.data.data.map(x => ({ ...x.attributes }))][0],
			seo: { ...seo.data.data[0].attributes.seo },
		};
		
	} catch (err) {
		console.log(err);
	}
}
