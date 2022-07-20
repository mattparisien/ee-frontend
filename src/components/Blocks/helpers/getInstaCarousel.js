import axios from "axios";

const getInstaCarousel = async mediaId => {
	const baseURL =
		process.env.NEXT_PUBLIC_INSTA_GRAPH_ROOT + "/" + mediaId + "/children";

	const requestConfig = {
		params: {
			access_token: process.env.NEXT_PUBLIC_INSTA_APPTOKEN,
			fields: "id,media_type,media_url,permalink,username",
		},
	};

	try {
		const resp = await axios.get(baseURL, requestConfig);
		return resp.data.data;
	} catch (err) {
		console.log(err);
	}
};

export default getInstaCarousel;
