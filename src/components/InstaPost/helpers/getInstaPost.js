import axios from "axios";

const getInstaPost = (url, options) => {
	return getPostList(url, options)
		.then(list => getPostByPermalink(list, url))
		.then(post => post);
};

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
		.then(res => res.data.data)
		.catch(err => console.log(err));
};

const getPostByPermalink = (posts, permalink) => {
	for (let post of posts) {
		if (post.permalink === permalink) {
			return post;
		}
	}
	return null;
};

const determineFields = options => {
	let baseString = "id,media_type,media_url,permalink";

	if (options.Caption) {
		baseString += ",caption";
	}
	return baseString;
};

export default getInstaPost;
