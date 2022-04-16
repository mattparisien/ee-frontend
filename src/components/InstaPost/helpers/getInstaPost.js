import axios from "axios";

const getInstaPost = (url, options) => {
	return getPostList(url, options)
		.then(data => {
			return getPostByPermalink(data.data, url, data.next);
		})
		.then(response => {
			//Post object was returned
			return response;
		});
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
		.then(res => {
			return {
				data: res.data.data,
				next: res.data.paging.next,
			};
		})
		.catch(err => console.log(err));
};

const getPostByPermalink = (posts, permalink, next) => {
	for (let post of posts) {
		if (post.permalink === permalink) {
			console.log("heellooo");
			return post;
		}
	}

	return next;
};

const determineFields = options => {
	let baseString = "id,media_type,media_url,permalink";

	if (options.Caption) {
		baseString += ",caption";
	}
	return baseString;
};

export default getInstaPost;
