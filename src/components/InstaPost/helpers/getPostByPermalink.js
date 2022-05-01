import axios from "axios";

const getPostByPermalink = (posts, permalink, next) => {
	for (let post of posts) {
		if (post.permalink === permalink) {
			return post;
		}
	}

	return null;
};

export default getPostByPermalink;
