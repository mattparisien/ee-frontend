import getInstaCarousel from "./getInstaCarousel";

const getInstaPost = async (url, array) => {
	const post = array.filter(post => post.permalink === url)[0];
	const newObj = {};

	if (!post) {
		return null;
	}

	if (post["media_type"] === "CAROUSEL_ALBUM") {
		const carouselItems = await getInstaCarousel(post.id);

		newObj["items"] = carouselItems.map(x => ({
			media_type: x.media_type.toLowerCase(),
			url: x.media_url,
			permalink: x.permalink,
		}));

		return newObj;
	}

	newObj["items"] = [
		{
			url: post.media_url,
			media_type: post.media_type.toLowerCase(),
		},
	];

	return newObj;
};

export default getInstaPost;
