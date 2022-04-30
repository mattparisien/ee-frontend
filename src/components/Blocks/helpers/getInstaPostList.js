import axios from "axios";

const getInstaPostList = async () => {
	const base = `${process.env.REACT_APP_INSTA_GRAPH_ROOT}/${process.env.REACT_APP_INSTA_USERID}/media`;
	const requestConfig = {
		params: {
			access_token: process.env.REACT_APP_INSTA_APPTOKEN,
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
