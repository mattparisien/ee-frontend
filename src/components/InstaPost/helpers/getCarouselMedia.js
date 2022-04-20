import axios from "axios";

const getCarouselMedia = (mediaId, options) => {
	const baseURL =
		process.env.REACT_APP_INSTA_GRAPH_ROOT + `/${mediaId}/children`;

	const requestConfig = {
		params: {
			access_token: process.env.REACT_APP_INSTA_APPTOKEN,
			fields: "id,media_type,media_url,permalink,username",
		},
	};

	return axios
		.get(baseURL, requestConfig)
		.then(res => res.data.data)
		.catch(err => console.log(err));
};

export default getCarouselMedia;
