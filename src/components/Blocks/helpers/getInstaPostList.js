import axios from "axios";

const getInstaPostList = async () => {
	const base = "https://graph.instagram.com" + "/5009538929167034" + "/media";
	const requestConfig = {
		params: {
			access_token:
				"IGQVJWalF1R1pNZAnk4NDdKdEt3amJWcER6U21LLS1iWkt1R0hBeE1Ybk5QNTREZA25BOE9TbXozaUFPMTA0X1FJT3cwWlBEV2NPYnAydTJDYmlyVVpOLXAwTVZATTW8wOVJyc2tsd0lDc3FnVFFUZAjdIdQZDZD",
			fields: "id,media_type,media_url,permalink,username",
		},
	};

	try {
		const resp = await axios.get(base, requestConfig);
		return resp.data.data;
	} catch (err) {
		console.log(err);
	}
};

export default getInstaPostList;