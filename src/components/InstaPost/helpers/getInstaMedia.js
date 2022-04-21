import axios from "axios";
import getPostByPermalink from "./getPostByPermalink";
import getCarouselMedia from "./getCarouselMedia";
import getPostList from "./getPostList";

const getInstaMedia = (url, options) => {
	return getPostList(url, options)
		.then(data => {
			return data ? getPostByPermalink(data.data, url, data.next) : null;
		})
		.then(post => {
			//Post object was returned
			if (post.media_type === "CAROUSEL_ALBUM") {
				return getCarouselMedia(post.id, options);
			}

			return post;
		});
};

export default getInstaMedia;
