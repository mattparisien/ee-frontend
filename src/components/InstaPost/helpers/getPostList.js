import axios from "axios";
import determineFields from "./determineFields";

const getPostList = (url, options) => {
	const baseURL =
		process.env.REACT_APP_INSTA_GRAPH_ROOT +
		`/${process.env.REACT_APP_INSTA_USERID}/media`;

	const requestConfig = {
		params: {
			access_token: process.env.REACT_APP_INSTA_APPTOKEN,
			fields: determineFields(options),
		},
	};

	return axios
		.get(baseURL, requestConfig)
		.then(res => {
			return {
				data: res.data.data,
				next: res.data.paging.next,
			};
		})
		.catch(err => {
			//Break
			return;
		});
};

export default getPostList;
