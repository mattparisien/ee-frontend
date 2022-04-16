import axios from "axios";

const getInstaPost = (url, options) => {
	return getPostList(url, options)
		.then(data => {
			return getPostByPermalink(data.data, url, data.next);
		})
		.then(post => {
			//Post object was returned
			if (post.media_type === "CAROUSEL_ALBUM") {
				return getCarouselMedia(post.id, options);
			}
			return post;
		})
		.then(item => {
			if (Array.isArray(item)) {
				//is carousel media
				return {
					media_type: "CAROUSEL_ALBUM",
					items: item,
				};
			}

			return {
				media_type: item.media_type,
				item: { ...item },
			};
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

const getCarouselMedia = (mediaId, options) => {
	const baseURL =
		process.env.REACT_APP_INSTA_GRAPH_ROOT + `/${mediaId}/children`;

	const requestConfig = {
		params: {
			access_token: process.env.REACT_APP_INSTA_APPTOKEN,
			fields: "id,media_type,media_url,permalink",
		},
	};

	return axios
		.get(baseURL, requestConfig)
		.then(res => res.data.data)
		.catch(err => console.log(err));
};

export default getInstaPost;
