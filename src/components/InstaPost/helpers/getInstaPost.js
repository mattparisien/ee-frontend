import axios from "axios";
import getInstaMedia from "./getInstaMedia";

const getInstaPost = (url, options) => {
	return getInstaMedia(url, options)
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
		})
		.catch(err => err);
};

export default getInstaPost;
