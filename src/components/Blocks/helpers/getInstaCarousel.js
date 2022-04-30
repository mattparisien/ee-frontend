import axios from 'axios';

const getInstaCarousel = async mediaId => {
	const baseURL = "https://graph.instagram.com" + "/" + mediaId + "/children";

	const requestConfig = {
		params: {
			access_token:
				"IGQVJWalF1R1pNZAnk4NDdKdEt3amJWcER6U21LLS1iWkt1R0hBeE1Ybk5QNTREZA25BOE9TbXozaUFPMTA0X1FJT3cwWlBEV2NPYnAydTJDYmlyVVpOLXAwTVZATTW8wOVJyc2tsd0lDc3FnVFFUZAjdIdQZDZD",
			fields: "id,media_type,media_url,permalink,username",
		},
	};

	try {
		const resp = await axios.get(baseURL, requestConfig);
		return [...resp.data.data];
	} catch (err) {
		console.log(err);
	}
};

export default getInstaCarousel;